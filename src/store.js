import { writable } from 'svelte/store'
import { players } from './data/players.js'
import { picks } from './data/picks.js'

let labels = []
const datasets = []

const dateInfo = new Date(Date.now() - 8 * 60 * 60 * 1000)
const date = dateInfo.toISOString().slice(0, 10)

players.forEach(p => {
  p.stats = { g: 0, a: 0, w: 0, s: 0 }
  p.live = { g: 0, a: 0, w: 0, s: 0 }
  p.isLive = false
  p.record = []
})

export const playerData = writable(players)
export const chartData = writable({ labels: [], datasets: [] })

const getSchedule = async () => {
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-04-17&endDate=${date}&expand=schedule.scoringplays`)
  const json = await res.json()
  return json.dates
}

const addPoint = (id, index, type, value = 1) => {
  const player = players.find(p => p.id === id)
  if (player) {
    player.record[index] += value
    player.stats[type] += 1

    if (index === labels.length - 1) {
      player.live[type] += 1
    }
  }
}

const getGoalieStats = async id => {
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=playoffGameLog`)
  const json = await res.json()

  json.stats[0].splits.forEach(game => {
    const index = labels.indexOf(game.date)
    if (game.isWin) addPoint(id, index, 'w')
    if (game.stat.shutouts) addPoint(id, index, 's', 2)
  })
}

const start = async () => {
  const schedule = await getSchedule()
  labels = schedule.map(d => d.date)

  const liveTeams = []
  const liveGames = schedule[schedule.length - 1]
  liveGames.games.forEach(game => {
    liveTeams.push(game.teams.away.team.id)
    liveTeams.push(game.teams.home.team.id)
  })

  players.forEach(p => {
    p.record = new Array(schedule.length).fill(0)
    p.isLive = liveTeams.includes(p.teamId)
  })

  schedule.forEach((d, i) => {
    d.games.forEach(g => {
      g.scoringPlays.forEach(s => {
        s.players.forEach(p => {
          if (p.playerType === 'Scorer') addPoint(p.player.id, i, 'g')
          else if (p.playerType === 'Assist') addPoint(p.player.id, i, 'a')
        })
      })
    })
  })

  await Promise.all(players.filter(p => p.type === 'G').map(g => getGoalieStats(g.id)))

  for (let name in picks) {
    const dataset = { label: name, data: new Array(schedule.length).fill(0) }
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
  console.log(players)
}

start()
