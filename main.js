import { goalieStats } from './goalieStats.js'
import { schedule } from './schedule.js'
import { players } from './players.js'
import { picks } from './picks.js'

const labels = []
const datasets = []
const dateInfo = new Date()
const date = dateInfo.toISOString().slice(0, 10)

const getGoalieStats = async id => {
  // const res = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=playoffGameLog`)
  // const json = await res.json()
  const json = goalieStats[id]

  const data = { id, w: 0, s: 0 }

  json.stats[0].splits.forEach(game => {
    if (game.isWin) data.w += 1
    data.s += game.stat.shutouts
  })

  return data
}

const main = async () => {
  // const res = await fetch(`https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-04-17&endDate=${date}&expand=schedule.scoringplays`)
  // const json = await res.json()
  const json = schedule

  players.forEach(p => {
    p.stats = { g: 0, a: 0 }
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

  const totals = {}

  const goalies = await Promise.all(players.filter(p => p.type === 'Goalie').map(g => getGoalieStats(g.id)))

  goalies.forEach(goalie => {
    const player = players.find(p => p.id === goalie.id)
    player.stats.w = goalie.w
    player.stats.s = goalie.s
  })

  for (let name in picks) {
    totals[name] = { total: 0 }
    const dataset = {label: name, data: new Array(json.dates.length).fill(0)}

    picks[name].skaters.forEach(id => {
      const player = players.find(p => p.id === id)
      player.record.forEach((p, i) => dataset.data[i] += p)
      totals[name].total += player.stats.g + player.stats.a
      totals[name][player.name] = player.stats
    })

    picks[name].goalies.forEach(id => {
      const player = players.find(p => p.id === id)
      totals[name].total += player.stats.g + player.stats.a + player.stats.w + player.stats.s * 2
      totals[name][player.name] = player.stats
    })


    for (let i = 1; i < dataset.data.length; i++) {
      dataset.data[i] += dataset.data[i - 1]
    }
    datasets.push(dataset)
  }

  console.log(totals)
  console.log(players)

  // datasets: [{ label: 'name', data: [65, 59, 80, 81, 56, 55, 40] }]

  new Chart(document.getElementById('chart'), {
    type: 'line',
    data: { labels, datasets },
  })
}

main()
