const picks = {
  Todd: { skaters: [8477492, 8478483, 8478864, 8478427, 8470613, 8475166, 8474563, 8481557, 8471685, 8476882, 8480817, 8476869], goalies: [8480382, 8477293] },
  Winston: { skaters: [8477934, 8476453, 8480027, 8481559, 8478010, 8479314, 8475167, 8478414, 8474564, 8476462, 8477504, 8477986], goalies: [8476883, 8475883] },
  Will: { skaters: [8478402, 8476459, 8477939, 8470638, 8475158, 8473994, 8470794, 8479325, 8479323, 8474565, 8480803, 8475913], goalies: [8479979, 8479406] },
  Logan: { skaters: [8478420, 8473419, 8478550, 8478403, 8477479, 8471276, 8476389, 8475184, 8480069, 8475200, 8479398, 8477447], goalies: [8478048, 8476316] },
  Tim: { skaters: [8477956, 8479318, 8480039, 8475765, 8474141, 8475169, 8477493, 8478449, 8476854, 8480036, 8481524, 8476853], goalies: [8478492, 8477970] },
  Adam: { skaters: [8476454, 8475786, 8477501, 8477476, 8478498, 8478401, 8477456, 8475745, 8478038, 8477498, 8476891, 8477365], goalies: [8476999, 8479973] },
}

const players = [
  { id: 8479325, team: 'BOS', type: 'Defenseman', name: 'Charlie McAvoy' },
  { id: 8477365, team: 'BOS', type: 'Defenseman', name: 'Connor Clifton' },
  { id: 8475200, team: 'BOS', type: 'Defenseman', name: 'Dmitry Orlov' },
  { id: 8476854, team: 'BOS', type: 'Defenseman', name: 'Hampus Lindholm' },
  { id: 8476891, team: 'BOS', type: 'Defenseman', name: 'Matt Grzelcyk' },
  { id: 8476869, team: 'CAR', type: 'Defenseman', name: 'Brady Skjei' },
  { id: 8470613, team: 'CAR', type: 'Defenseman', name: 'Brent Burns' },
  { id: 8481524, team: 'COL', type: 'Defenseman', name: 'Bowen Byram' },
  { id: 8480069, team: 'COL', type: 'Defenseman', name: 'Cale Makar' },
  { id: 8478038, team: 'COL', type: 'Defenseman', name: 'Devon Toews' },
  { id: 8479398, team: 'COL', type: 'Defenseman', name: 'Samuel Girard' },
  { id: 8480036, team: 'DAL', type: 'Defenseman', name: 'Miro Heiskanen' },
  { id: 8477498, team: 'EDM', type: 'Defenseman', name: 'Darnell Nurse' },
  { id: 8480803, team: 'EDM', type: 'Defenseman', name: 'Evan Bouchard' },
  { id: 8477986, team: 'FLA', type: 'Defenseman', name: 'Brandon Montour' },
  { id: 8474563, team: 'LAK', type: 'Defenseman', name: 'Drew Doughty' },
  { id: 8476462, team: 'NJD', type: 'Defenseman', name: 'Dougie Hamilton' },
  { id: 8479323, team: 'NYR', type: 'Defenseman', name: 'Adam Fox' },
  { id: 8480817, team: 'NYR', type: 'Defenseman', name: "K'Andre Miller" },
  { id: 8475167, team: 'TBL', type: 'Defenseman', name: 'Victor Hedman' },
  { id: 8476853, team: 'TOR', type: 'Defenseman', name: 'Morgan Rielly' },
  { id: 8474565, team: 'VGK', type: 'Defenseman', name: 'Alex Pietrangelo' },
  { id: 8477447, team: 'VGK', type: 'Defenseman', name: 'Shea Theodore' },
  { id: 8477504, team: 'WPG', type: 'Defenseman', name: 'Josh Morrissey' },
  { id: 8473419, team: 'BOS', type: 'Forward', name: 'Brad Marchand' },
  { id: 8475745, team: 'BOS', type: 'Forward', name: 'Charlie Coyle' },
  { id: 8471276, team: 'BOS', type: 'Forward', name: 'David Krejci' },
  { id: 8477956, team: 'BOS', type: 'Forward', name: 'David Pastrnak' },
  { id: 8478498, team: 'BOS', type: 'Forward', name: 'Jake DeBrusk' },
  { id: 8470638, team: 'BOS', type: 'Forward', name: 'Patrice Bergeron' },
  { id: 8478401, team: 'BOS', type: 'Forward', name: 'Pavel Zacha' },
  { id: 8477479, team: 'BOS', type: 'Forward', name: 'Tyler Bertuzzi' },
  { id: 8480039, team: 'CAR', type: 'Forward', name: 'Martin Necas' },
  { id: 8478427, team: 'CAR', type: 'Forward', name: 'Sebastian Aho' },
  { id: 8476882, team: 'CAR', type: 'Forward', name: 'Teuvo Teravainen' },
  { id: 8477476, team: 'COL', type: 'Forward', name: 'Artturi Lehkonen' },
  { id: 8477456, team: 'COL', type: 'Forward', name: 'J.T. Compher' },
  { id: 8478420, team: 'COL', type: 'Forward', name: 'Mikko Rantanen' },
  { id: 8477492, team: 'COL', type: 'Forward', name: 'Nathan MacKinnon' },
  { id: 8477501, team: 'COL', type: 'Forward', name: 'Valeri Nichushkin' },
  { id: 8473994, team: 'DAL', type: 'Forward', name: 'Jamie Benn' },
  { id: 8480027, team: 'DAL', type: 'Forward', name: 'Jason Robertson' },
  { id: 8470794, team: 'DAL', type: 'Forward', name: 'Joe Pavelski' },
  { id: 8478449, team: 'DAL', type: 'Forward', name: 'Roope Hintz' },
  { id: 8478402, team: 'EDM', type: 'Forward', name: 'Connor McDavid' },
  { id: 8475169, team: 'EDM', type: 'Forward', name: 'Evander Kane' },
  { id: 8477934, team: 'EDM', type: 'Forward', name: 'Leon Draisaitl' },
  { id: 8476454, team: 'EDM', type: 'Forward', name: 'Ryan Nugent-Hopkins' },
  { id: 8475786, team: 'EDM', type: 'Forward', name: 'Zach Hyman' },
  { id: 8477493, team: 'FLA', type: 'Forward', name: 'Aleksander Barkov' },
  { id: 8479314, team: 'FLA', type: 'Forward', name: 'Matthew Tkachuk' },
  { id: 8471685, team: 'LAK', type: 'Forward', name: 'Anze Kopitar' },
  { id: 8478864, team: 'MIN', type: 'Forward', name: 'Kirill Kaprizov' },
  { id: 8481557, team: 'MIN', type: 'Forward', name: 'Matt Boldy' },
  { id: 8481559, team: 'NJD', type: 'Forward', name: 'Jack Hughes' },
  { id: 8478414, team: 'NJD', type: 'Forward', name: 'Timo Meier' },
  { id: 8478550, team: 'NYR', type: 'Forward', name: 'Artemi Panarin' },
  { id: 8475184, team: 'NYR', type: 'Forward', name: 'Chris Kreider' },
  { id: 8476459, team: 'NYR', type: 'Forward', name: 'Mika Zibanejad' },
  { id: 8474141, team: 'NYR', type: 'Forward', name: 'Patrick Kane' },
  { id: 8476389, team: 'NYR', type: 'Forward', name: 'Vincent Trocheck' },
  { id: 8475765, team: 'NYR', type: 'Forward', name: 'Vladimir Tarasenko' },
  { id: 8478010, team: 'TBL', type: 'Forward', name: 'Brayden Point' },
  { id: 8476453, team: 'TBL', type: 'Forward', name: 'Nikita Kucherov' },
  { id: 8474564, team: 'TBL', type: 'Forward', name: 'Steven Stamkos' },
  { id: 8479318, team: 'TOR', type: 'Forward', name: 'Auston Matthews' },
  { id: 8475166, team: 'TOR', type: 'Forward', name: 'John Tavares' },
  { id: 8478483, team: 'TOR', type: 'Forward', name: 'Mitchell Marner' },
  { id: 8475158, team: 'TOR', type: 'Forward', name: "Ryan O'Reilly" },
  { id: 8477939, team: 'TOR', type: 'Forward', name: 'William Nylander' },
  { id: 8478403, team: 'VGK', type: 'Forward', name: 'Jack Eichel' },
  { id: 8475913, team: 'VGK', type: 'Forward', name: 'Mark Stone' },
  { id: 8476999, team: 'BOS', type: 'Goalie', name: 'Linus Ullmark' },
  { id: 8477293, team: 'CAR', type: 'Goalie', name: 'Antti Raanta' },
  { id: 8475883, team: 'CAR', type: 'Goalie', name: 'Frederik Andersen' },
  { id: 8480382, team: 'COL', type: 'Goalie', name: 'Alexandar Georgiev' },
  { id: 8479979, team: 'DAL', type: 'Goalie', name: 'Jake Oettinger' },
  { id: 8479973, team: 'EDM', type: 'Goalie', name: 'Stuart Skinner' },
  { id: 8479406, team: 'MIN', type: 'Goalie', name: 'Filip Gustavsson' },
  { id: 8477970, team: 'NJD', type: 'Goalie', name: 'Vitek Vanecek' },
  { id: 8478048, team: 'NYR', type: 'Goalie', name: 'Igor Shesterkin' },
  { id: 8476883, team: 'TBL', type: 'Goalie', name: 'Andrei Vasilevskiy' },
  { id: 8478492, team: 'TOR', type: 'Goalie', name: 'Ilya Samsonov' },
  { id: 8476316, team: 'VGK', type: 'Goalie', name: 'Laurent Brossoit' },
]

const getGoalieStats = async id => {
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=playoffGameLog`)
  const json = await res.json()

  let w = 0
  let s = 0

  json.stats[0].splits.forEach(game => {
    if (game.isWin) w += 1
    s += game.stat.shutouts
  })

  return { id, w, s }
}

const main = async () => {
  const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-04-17&endDate=2023-04-27&expand=schedule.scoringplays')
  const json = await res.json()

  console.log(json)

  players.forEach(p => {
    p.stats = { g: 0, a: 0 }
  })

  const addPoint = (id, type) => {
    const player = players.find(p => p.id === id)
    if (player) {
      player.stats[type] += 1
    }
  }

  json.dates.forEach(info => {
    const { date, games } = info
    games.forEach(game => {
      game.scoringPlays.forEach(play => {
        play.players.forEach(player => {
          if (player.playerType === 'Scorer') {
            addPoint(player.player.id, 'g')
          } else if (player.playerType === 'Assist') {
            addPoint(player.player.id, 'a')
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

    picks[name].skaters.forEach(id => {
      const player = players.find(p => p.id === id)
      totals[name].total += player.stats.g + player.stats.a
      totals[name][player.name] = player.stats
    })

    picks[name].goalies.forEach(id => {
      const player = players.find(p => p.id === id)
      totals[name].total += player.stats.g + player.stats.a + player.stats.w + player.stats.s * 2
      totals[name][player.name] = player.stats
    })
  }

  console.log(totals)
}

main()
