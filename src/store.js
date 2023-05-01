import { writable } from 'svelte/store'
import { players } from './data/players.js'
import { picks } from './data/picks.js'

players.forEach(p => {
  if (p.type === 'Goalie') {
    p.stats = { w: 0, s: 0, g: 0, a: 0 }
  } else {
    p.stats = { g: 0, a: 0 }
  }
})

const labels = []
const datasets = []

const test = async () => {
  const updates = await Promise.all(
    players.map(async player => {
      const { id, team, type } = player
      const res = await fetch('https://statsapi.web.nhl.com/api/v1/people/' + id)
      const json = await res.json()
      const { firstName, lastName, currentTeam } = json.people[0]
      return { id, team, type, firstName, lastName, id: currentTeam.id }
    })
  )
}
test()

export const playerData = writable(players)
export const chartData = writable({ labels: [], datasets: [] })

const getGoalieStats = async id => {
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=playoffGameLog`)
  const json = await res.json()

  const goalie = players.find(g => g.id === id)

  json.stats[0].splits.forEach(game => {
    const index = labels.indexOf(game.date)

    if (game.isWin) {
      goalie.stats.w += 1
      goalie.record[index] += 1
    }

    if (game.stat.shutouts) {
      goalie.stats.s += 1
      goalie.record[index] += 2
    }
  })
}

const main = async () => {
  const dateInfo = new Date()
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-04-17&endDate=${dateInfo.toLocaleDateString()}&expand=schedule.scoringplays`)
  const json = await res.json()

  players.forEach(p => {
    p.record = new Array(json.dates.length).fill(0)
  })

  const addPoint = (id, type, index) => {
    const player = players.find(p => p.id === id)
    if (player) {
      player.record[index] += 1
      player.stats[type] += 1
    }
  }

  json.dates.forEach((info, index) => {
    const { date, games } = info
    labels.push(date)
    games.forEach(game => {
      game.scoringPlays.forEach(play => {
        play.players.forEach(player => {
          if (player.playerType === 'Scorer') {
            addPoint(player.player.id, 'g', index)
          } else if (player.playerType === 'Assist') {
            addPoint(player.player.id, 'a', index)
          }
        })
      })
    })
  })

  await Promise.all(players.filter(p => p.type === 'Goalie').map(g => getGoalieStats(g.id)))

  for (let name in picks) {
    const dataset = { label: name, data: new Array(json.dates.length).fill(0) }

    picks[name].skaters.forEach(id => {
      const player = players.find(p => p.id === id)
      player.record.forEach((p, i) => (dataset.data[i] += p))
    })

    picks[name].goalies.forEach(id => {
      const player = players.find(p => p.id === id)
      player.record.forEach((p, i) => (dataset.data[i] += p))
    })

    for (let i = 1; i < dataset.data.length; i++) {
      dataset.data[i] += dataset.data[i - 1]
    }
    datasets.push(dataset)
  }

  playerData.set(players)
  chartData.set({ labels, datasets })
}

main()
