export const schedule = {
  copyright: 'NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.',
  totalItems: 44,
  totalEvents: 0,
  totalGames: 44,
  totalMatches: 0,
  metaData: {
    timeStamp: '20230428_130740',
  },
  wait: 10,
  dates: [
    {
      date: '2023-04-17',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030131,
          link: '/api/v1/game/2022030131/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-17T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 0,
                losses: 1,
                type: 'league',
              },
              score: 1,
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 0,
                type: 'league',
              },
              score: 2,
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478427,
                    fullName: 'Sebastian Aho',
                    link: '/api/v1/people/8478427',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470613,
                    fullName: 'Brent Burns',
                    link: '/api/v1/people/8470613',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480039,
                    fullName: 'Martin Necas',
                    link: '/api/v1/people/8480039',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR14',
                eventTypeId: 'GOAL',
                description: 'Sebastian Aho (1) Slap Shot, assists: Brent Burns (1), Martin Necas (1)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 35,
                eventId: 14,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '03:47',
                periodTimeRemaining: '16:13',
                dateTime: '2023-04-17T23:17:34Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -71,
                y: 16,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476474,
                    fullName: 'Stefan Noesen',
                    link: '/api/v1/people/8476474',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470613,
                    fullName: 'Brent Burns',
                    link: '/api/v1/people/8470613',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480039,
                    fullName: 'Martin Necas',
                    link: '/api/v1/people/8480039',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR408',
                eventTypeId: 'GOAL',
                description: 'Stefan Noesen (1) Tip-In, assists: Brent Burns (2), Martin Necas (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 167,
                eventId: 408,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '02:27',
                periodTimeRemaining: '17:33',
                dateTime: '2023-04-18T00:15:10Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 80,
                y: 2,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477506,
                    fullName: 'Ryan Pulock',
                    link: '/api/v1/people/8477506',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR409',
                eventTypeId: 'GOAL',
                description: 'Ryan Pulock (1) Wrist Shot, assists: none',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 171,
                eventId: 409,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '02:51',
                periodTimeRemaining: '17:09',
                dateTime: '2023-04-18T00:16:57Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: -76,
                y: 22,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
          ],
          venue: {
            id: 5066,
            name: 'PNC Arena',
            link: '/api/v1/venues/5066',
          },
          content: {
            link: '/api/v1/game/2022030131/content',
          },
        },
        {
          gamePk: 2022030111,
          link: '/api/v1/game/2022030111/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-17T23:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 0,
                losses: 1,
                type: 'league',
              },
              score: 1,
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 0,
                type: 'league',
              },
              score: 3,
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8477956,
                    fullName: 'David Pastrnak',
                    link: '/api/v1/people/8477956',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477479,
                    fullName: 'Tyler Bertuzzi',
                    link: '/api/v1/people/8477479',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8471276,
                    fullName: 'David Krejci',
                    link: '/api/v1/people/8471276',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS163',
                eventTypeId: 'GOAL',
                description: 'David Pastrnak (1) Wrist Shot, assists: Tyler Bertuzzi (1), David Krejci (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 37,
                eventId: 163,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '05:58',
                periodTimeRemaining: '14:02',
                dateTime: '2023-04-17T23:51:22Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 78,
                y: -9,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8473419,
                    fullName: 'Brad Marchand',
                    link: '/api/v1/people/8473419',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479325,
                    fullName: 'Charlie McAvoy',
                    link: '/api/v1/people/8479325',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475200,
                    fullName: 'Dmitry Orlov',
                    link: '/api/v1/people/8475200',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS404',
                eventTypeId: 'GOAL',
                description: 'Brad Marchand (1) Wrist Shot, assists: Charlie McAvoy (1), Dmitry Orlov (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 174,
                eventId: 404,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '03:41',
                periodTimeRemaining: '16:19',
                dateTime: '2023-04-18T00:48:06Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: -55,
                y: -18,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479314,
                    fullName: 'Matthew Tkachuk',
                    link: '/api/v1/people/8479314',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS408',
                eventTypeId: 'GOAL',
                description: 'Matthew Tkachuk (1) Wrist Shot, assists: none',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 193,
                eventId: 408,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '06:34',
                periodTimeRemaining: '13:26',
                dateTime: '2023-04-18T00:53:03Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: 77,
                y: -3,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478498,
                    fullName: 'Jake DeBrusk',
                    link: '/api/v1/people/8478498',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477479,
                    fullName: 'Tyler Bertuzzi',
                    link: '/api/v1/people/8477479',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478401,
                    fullName: 'Pavel Zacha',
                    link: '/api/v1/people/8478401',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS432',
                eventTypeId: 'GOAL',
                description: 'Jake DeBrusk (1) Poke, assists: Tyler Bertuzzi (2), Pavel Zacha (1)',
                secondaryType: 'Poke',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 269,
                eventId: 432,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '17:32',
                periodTimeRemaining: '02:28',
                dateTime: '2023-04-18T01:16:56Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: -77,
                y: 3,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
          ],
          venue: {
            id: 5085,
            name: 'TD Garden',
            link: '/api/v1/venues/5085',
          },
          content: {
            link: '/api/v1/game/2022030111/content',
          },
        },
        {
          gamePk: 2022030161,
          link: '/api/v1/game/2022030161/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-18T01:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 0,
                type: 'league',
              },
              score: 3,
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 1,
                type: 'league',
              },
              score: 2,
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478864,
                    fullName: 'Kirill Kaprizov',
                    link: '/api/v1/people/8478864',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474716,
                    fullName: 'Jared Spurgeon',
                    link: '/api/v1/people/8474716',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475692,
                    fullName: 'Mats Zuccarello',
                    link: '/api/v1/people/8475692',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL180',
                eventTypeId: 'GOAL',
                description: 'Kirill Kaprizov (1) Tip-In, assists: Jared Spurgeon (1), Mats Zuccarello (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 104,
                eventId: 180,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '19:12',
                periodTimeRemaining: '00:48',
                dateTime: '2023-04-18T02:22:40Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 79,
                y: 1,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473994,
                    fullName: 'Jamie Benn',
                    link: '/api/v1/people/8473994',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL190',
                eventTypeId: 'GOAL',
                description: 'Roope Hintz (1) Wrist Shot, assists: Jamie Benn (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 131,
                eventId: 190,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '02:08',
                periodTimeRemaining: '17:52',
                dateTime: '2023-04-18T02:47:55Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: 51,
                y: 9,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480027,
                    fullName: 'Jason Robertson',
                    link: '/api/v1/people/8480027',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480036,
                    fullName: 'Miro Heiskanen',
                    link: '/api/v1/people/8480036',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470794,
                    fullName: 'Joe Pavelski',
                    link: '/api/v1/people/8470794',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL193',
                eventTypeId: 'GOAL',
                description: 'Jason Robertson (1) Wrist Shot, assists: Miro Heiskanen (1), Joe Pavelski (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 147,
                eventId: 193,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '04:13',
                periodTimeRemaining: '15:47',
                dateTime: '2023-04-18T02:53:31Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: 47,
                y: -24,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479351,
                    fullName: 'Sam Steel',
                    link: '/api/v1/people/8479351',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474679,
                    fullName: 'Gustav Nyquist',
                    link: '/api/v1/people/8474679',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL522',
                eventTypeId: 'GOAL',
                description: 'Sam Steel (1) Wrist Shot, assists: Gustav Nyquist (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 215,
                eventId: 522,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '14:25',
                periodTimeRemaining: '05:35',
                dateTime: '2023-04-18T03:24:29Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: -76,
                y: -1,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477451,
                    fullName: 'Ryan Hartman',
                    link: '/api/v1/people/8477451',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479351,
                    fullName: 'Sam Steel',
                    link: '/api/v1/people/8479351',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL1651',
                eventTypeId: 'GOAL',
                description: 'Ryan Hartman (1) Wrist Shot, assists: Sam Steel (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 566,
                eventId: 1651,
                period: 5,
                periodType: 'OVERTIME',
                ordinalNum: '2OT',
                periodTime: '12:20',
                periodTimeRemaining: '07:40',
                dateTime: '2023-04-18T06:00:09Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: 80,
                y: -3,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
          ],
          venue: {
            id: 5019,
            name: 'American Airlines Center',
            link: '/api/v1/venues/5019',
          },
          content: {
            link: '/api/v1/game/2022030161/content',
          },
        },
        {
          gamePk: 2022030181,
          link: '/api/v1/game/2022030181/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-18T02:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 0,
                type: 'league',
              },
              score: 4,
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 1,
                type: 'league',
              },
              score: 3,
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477406,
                    fullName: 'Mattias Janmark',
                    link: '/api/v1/people/8477406',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM161',
                eventTypeId: 'GOAL',
                description: 'Leon Draisaitl (1) Snap Shot, assists: Mattias Janmark (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 52,
                eventId: 161,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '06:57',
                periodTimeRemaining: '13:03',
                dateTime: '2023-04-18T02:32:53Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 65,
                y: 15,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480803,
                    fullName: 'Evan Bouchard',
                    link: '/api/v1/people/8480803',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476454,
                    fullName: 'Ryan Nugent-Hopkins',
                    link: '/api/v1/people/8476454',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475786,
                    fullName: 'Zach Hyman',
                    link: '/api/v1/people/8475786',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM172',
                eventTypeId: 'GOAL',
                description: 'Evan Bouchard (1) Snap Shot, assists: Ryan Nugent-Hopkins (1), Zach Hyman (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 87,
                eventId: 172,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '12:31',
                periodTimeRemaining: '07:29',
                dateTime: '2023-04-18T02:46:36Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 60,
                y: -13,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477960,
                    fullName: 'Adrian Kempe',
                    link: '/api/v1/people/8477960',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478911,
                    fullName: 'Matt Roy',
                    link: '/api/v1/people/8478911',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8471685,
                    fullName: 'Anze Kopitar',
                    link: '/api/v1/people/8471685',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM488',
                eventTypeId: 'GOAL',
                description: 'Adrian Kempe (1) Backhand, assists: Matt Roy (1), Anze Kopitar (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 268,
                eventId: 488,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '00:52',
                periodTimeRemaining: '19:08',
                dateTime: '2023-04-18T04:15:10Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: -61,
                y: 8,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475169,
                    fullName: 'Evander Kane',
                    link: '/api/v1/people/8475169',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM852',
                eventTypeId: 'GOAL',
                description: 'Leon Draisaitl (2) Snap Shot, assists: Evander Kane (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 312,
                eventId: 852,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '08:46',
                periodTimeRemaining: '11:14',
                dateTime: '2023-04-18T04:29:05Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: 74,
                y: -6,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477960,
                    fullName: 'Adrian Kempe',
                    link: '/api/v1/people/8477960',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8482124,
                    fullName: 'Quinton Byfield',
                    link: '/api/v1/people/8482124',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8471685,
                    fullName: 'Anze Kopitar',
                    link: '/api/v1/people/8471685',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM857',
                eventTypeId: 'GOAL',
                description: 'Adrian Kempe (2) Snap Shot, assists: Quinton Byfield (1), Anze Kopitar (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 329,
                eventId: 857,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '11:23',
                periodTimeRemaining: '08:37',
                dateTime: '2023-04-18T04:36:34Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: -59,
                y: 16,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8471685,
                    fullName: 'Anze Kopitar',
                    link: '/api/v1/people/8471685',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476479,
                    fullName: 'Phillip Danault',
                    link: '/api/v1/people/8476479',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478042,
                    fullName: 'Viktor Arvidsson',
                    link: '/api/v1/people/8478042',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM870',
                eventTypeId: 'GOAL',
                description: 'Anze Kopitar (1) Backhand, assists: Phillip Danault (1), Viktor Arvidsson (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 370,
                eventId: 870,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:43',
                periodTimeRemaining: '00:17',
                dateTime: '2023-04-18T04:52:42Z',
                goals: {
                  away: 3,
                  home: 3,
                },
              },
              coordinates: {
                x: -83,
                y: 0,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480113,
                    fullName: 'Alex Iafallo',
                    link: '/api/v1/people/8480113',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478042,
                    fullName: 'Viktor Arvidsson',
                    link: '/api/v1/people/8478042',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8471685,
                    fullName: 'Anze Kopitar',
                    link: '/api/v1/people/8471685',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM894',
                eventTypeId: 'GOAL',
                description: 'Alex Iafallo (1) Snap Shot, assists: Viktor Arvidsson (2), Anze Kopitar (3)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 445,
                eventId: 894,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '09:19',
                periodTimeRemaining: '10:41',
                dateTime: '2023-04-18T05:30:00Z',
                goals: {
                  away: 4,
                  home: 3,
                },
              },
              coordinates: {
                x: 67,
                y: 4,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
          ],
          venue: {
            id: 5100,
            name: 'Rogers Place',
            link: '/api/v1/venues/5100',
          },
          content: {
            link: '/api/v1/game/2022030181/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-18',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030141,
          link: '/api/v1/game/2022030141/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-18T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 0,
                type: 'league',
              },
              score: 5,
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 1,
                type: 'league',
              },
              score: 1,
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475765,
                    fullName: 'Vladimir Tarasenko',
                    link: '/api/v1/people/8475765',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480817,
                    fullName: "K'Andre Miller",
                    link: '/api/v1/people/8480817',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478550,
                    fullName: 'Artemi Panarin',
                    link: '/api/v1/people/8478550',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD17',
                eventTypeId: 'GOAL',
                description: "Vladimir Tarasenko (1) Wrist Shot, assists: K'Andre Miller (1), Artemi Panarin (1)",
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 31,
                eventId: 17,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '04:58',
                periodTimeRemaining: '15:02',
                dateTime: '2023-04-18T23:16:09Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: -72,
                y: 3,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475184,
                    fullName: 'Chris Kreider',
                    link: '/api/v1/people/8475184',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479323,
                    fullName: 'Adam Fox',
                    link: '/api/v1/people/8479323',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478550,
                    fullName: 'Artemi Panarin',
                    link: '/api/v1/people/8478550',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD26',
                eventTypeId: 'GOAL',
                description: 'Chris Kreider (1) Tip-In, assists: Adam Fox (1), Artemi Panarin (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 54,
                eventId: 26,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '09:30',
                periodTimeRemaining: '10:30',
                dateTime: '2023-04-18T23:25:16Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: -82,
                y: 5,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479324,
                    fullName: 'Ryan Lindgren',
                    link: '/api/v1/people/8479324',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479323,
                    fullName: 'Adam Fox',
                    link: '/api/v1/people/8479323',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480078,
                    fullName: 'Filip Chytil',
                    link: '/api/v1/people/8480078',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD433',
                eventTypeId: 'GOAL',
                description: 'Ryan Lindgren (1) Wrist Shot, assists: Adam Fox (2), Filip Chytil (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 227,
                eventId: 433,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '16:57',
                periodTimeRemaining: '03:03',
                dateTime: '2023-04-19T00:43:09Z',
                goals: {
                  away: 3,
                  home: 0,
                },
              },
              coordinates: {
                x: 82,
                y: 10,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475184,
                    fullName: 'Chris Kreider',
                    link: '/api/v1/people/8475184',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479323,
                    fullName: 'Adam Fox',
                    link: '/api/v1/people/8479323',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8474141,
                    fullName: 'Patrick Kane',
                    link: '/api/v1/people/8474141',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD812',
                eventTypeId: 'GOAL',
                description: 'Chris Kreider (2) Tip-In, assists: Adam Fox (3), Patrick Kane (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 311,
                eventId: 812,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '11:07',
                periodTimeRemaining: '08:53',
                dateTime: '2023-04-19T01:30:44Z',
                goals: {
                  away: 4,
                  home: 0,
                },
              },
              coordinates: {
                x: -80,
                y: 3,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8481559,
                    fullName: 'Jack Hughes',
                    link: '/api/v1/people/8481559',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD821',
                eventTypeId: 'GOAL',
                description: 'Jack Hughes (1) Wrist Shot, assists: none',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 341,
                eventId: 821,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '17:14',
                periodTimeRemaining: '02:46',
                dateTime: '2023-04-19T01:41:19Z',
                goals: {
                  away: 4,
                  home: 1,
                },
              },
              coordinates: {
                x: 69,
                y: -3,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480078,
                    fullName: 'Filip Chytil',
                    link: '/api/v1/people/8480078',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8481554,
                    fullName: 'Kaapo Kakko',
                    link: '/api/v1/people/8481554',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479323,
                    fullName: 'Adam Fox',
                    link: '/api/v1/people/8479323',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD822',
                eventTypeId: 'GOAL',
                description: 'Filip Chytil (1) Wrist Shot, assists: Kaapo Kakko (1), Adam Fox (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 344,
                eventId: 822,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '18:02',
                periodTimeRemaining: '01:58',
                dateTime: '2023-04-19T01:43:27Z',
                goals: {
                  away: 5,
                  home: 1,
                },
              },
              coordinates: {
                x: -13,
                y: -31,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
          ],
          venue: {
            name: 'Prudential Center',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030141/content',
          },
        },
        {
          gamePk: 2022030121,
          link: '/api/v1/game/2022030121/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-18T23:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 0,
                type: 'league',
              },
              score: 7,
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 1,
                type: 'league',
              },
              score: 3,
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8477930,
                    fullName: 'Pierre-Edouard Bellemare',
                    link: '/api/v1/people/8477930',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470621,
                    fullName: 'Corey Perry',
                    link: '/api/v1/people/8470621',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR10',
                eventTypeId: 'GOAL',
                description: 'Pierre-Edouard Bellemare (1) Backhand, assists: Corey Perry (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 12,
                eventId: 10,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '01:18',
                periodTimeRemaining: '18:42',
                dateTime: '2023-04-18T23:42:44Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 81,
                y: 2,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478519,
                    fullName: 'Anthony Cirelli',
                    link: '/api/v1/people/8478519',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479542,
                    fullName: 'Brandon Hagel',
                    link: '/api/v1/people/8479542',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR26',
                eventTypeId: 'GOAL',
                description: 'Anthony Cirelli (1) Snap Shot, assists: Brandon Hagel (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 56,
                eventId: 26,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '07:18',
                periodTimeRemaining: '12:42',
                dateTime: '2023-04-18T23:52:43Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: 76,
                y: 4,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476453,
                    fullName: 'Nikita Kucherov',
                    link: '/api/v1/people/8476453',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479410,
                    fullName: 'Mikhail Sergachev',
                    link: '/api/v1/people/8479410',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473986,
                    fullName: 'Alex Killorn',
                    link: '/api/v1/people/8473986',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR50',
                eventTypeId: 'GOAL',
                description: 'Nikita Kucherov (1) Slap Shot, assists: Mikhail Sergachev (1), Alex Killorn (1)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 134,
                eventId: 50,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '19:56',
                periodTimeRemaining: '00:04',
                dateTime: '2023-04-19T00:19:57Z',
                goals: {
                  away: 3,
                  home: 0,
                },
              },
              coordinates: {
                x: 64,
                y: -29,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475158,
                    fullName: "Ryan O'Reilly",
                    link: '/api/v1/people/8475158',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475166,
                    fullName: 'John Tavares',
                    link: '/api/v1/people/8475166',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR319',
                eventTypeId: 'GOAL',
                description: "Ryan O'Reilly (1) Snap Shot, assists: John Tavares (1), Mitchell Marner (1)",
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 183,
                eventId: 319,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '08:06',
                periodTimeRemaining: '11:54',
                dateTime: '2023-04-19T00:53:29Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 68,
                y: -3,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477939,
                    fullName: 'William Nylander',
                    link: '/api/v1/people/8477939',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479318,
                    fullName: 'Auston Matthews',
                    link: '/api/v1/people/8479318',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR335',
                eventTypeId: 'GOAL',
                description: 'William Nylander (1) Wrist Shot, assists: Auston Matthews (1), Mitchell Marner (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 220,
                eventId: 335,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '13:11',
                periodTimeRemaining: '06:49',
                dateTime: '2023-04-19T01:04:35Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: 51,
                y: -13,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478010,
                    fullName: 'Brayden Point',
                    link: '/api/v1/people/8478010',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476453,
                    fullName: 'Nikita Kucherov',
                    link: '/api/v1/people/8476453',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478519,
                    fullName: 'Anthony Cirelli',
                    link: '/api/v1/people/8478519',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR339',
                eventTypeId: 'GOAL',
                description: 'Brayden Point (1) Wrist Shot, assists: Nikita Kucherov (1), Anthony Cirelli (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 233,
                eventId: 339,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '14:29',
                periodTimeRemaining: '05:31',
                dateTime: '2023-04-19T01:08:28Z',
                goals: {
                  away: 4,
                  home: 2,
                },
              },
              coordinates: {
                x: -84,
                y: 8,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8470621,
                    fullName: 'Corey Perry',
                    link: '/api/v1/people/8470621',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479525,
                    fullName: 'Ross Colton',
                    link: '/api/v1/people/8479525',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR344',
                eventTypeId: 'GOAL',
                description: 'Corey Perry (1) Poke, assists: Ross Colton (1)',
                secondaryType: 'Poke',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 254,
                eventId: 344,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '17:54',
                periodTimeRemaining: '02:06',
                dateTime: '2023-04-19T01:18:54Z',
                goals: {
                  away: 5,
                  home: 2,
                },
              },
              coordinates: {
                x: -83,
                y: 4,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478010,
                    fullName: 'Brayden Point',
                    link: '/api/v1/people/8478010',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8470621,
                    fullName: 'Corey Perry',
                    link: '/api/v1/people/8470621',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476453,
                    fullName: 'Nikita Kucherov',
                    link: '/api/v1/people/8476453',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR801',
                eventTypeId: 'GOAL',
                description: 'Brayden Point (2) Backhand, assists: Corey Perry (2), Nikita Kucherov (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 267,
                eventId: 801,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '19:58',
                periodTimeRemaining: '00:02',
                dateTime: '2023-04-19T01:26:21Z',
                goals: {
                  away: 6,
                  home: 2,
                },
              },
              coordinates: {
                x: -74,
                y: -1,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479525,
                    fullName: 'Ross Colton',
                    link: '/api/v1/people/8479525',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480246,
                    fullName: 'Nick Perbix',
                    link: '/api/v1/people/8480246',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474013,
                    fullName: 'Ian Cole',
                    link: '/api/v1/people/8474013',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479361,
                    fullName: 'Joseph Woll',
                    link: '/api/v1/people/8479361',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR818',
                eventTypeId: 'GOAL',
                description: 'Ross Colton (1) Wrist Shot, assists: Nick Perbix (1), Ian Cole (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 309,
                eventId: 818,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '06:59',
                periodTimeRemaining: '13:01',
                dateTime: '2023-04-19T01:56:26Z',
                goals: {
                  away: 7,
                  home: 2,
                },
              },
              coordinates: {
                x: 65,
                y: 0,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475714,
                    fullName: 'Calle Jarnkrok',
                    link: '/api/v1/people/8475714',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479318,
                    fullName: 'Auston Matthews',
                    link: '/api/v1/people/8479318',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR820',
                eventTypeId: 'GOAL',
                description: 'Calle Jarnkrok (1) Backhand, assists: Mitchell Marner (3), Auston Matthews (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 316,
                eventId: 820,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '08:06',
                periodTimeRemaining: '11:54',
                dateTime: '2023-04-19T01:57:32Z',
                goals: {
                  away: 7,
                  home: 3,
                },
              },
              coordinates: {
                x: -85,
                y: -3,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
          ],
          venue: {
            name: 'Scotiabank Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030121/content',
          },
        },
        {
          gamePk: 2022030171,
          link: '/api/v1/game/2022030171/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-19T01:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 0,
                type: 'league',
              },
              score: 5,
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 1,
                type: 'league',
              },
              score: 1,
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478398,
                    fullName: 'Kyle Connor',
                    link: '/api/v1/people/8478398',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479400,
                    fullName: 'Pierre-Luc Dubois',
                    link: '/api/v1/people/8479400',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477504,
                    fullName: 'Josh Morrissey',
                    link: '/api/v1/people/8477504',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK277',
                eventTypeId: 'GOAL',
                description: 'Kyle Connor (1) Snap Shot, assists: Pierre-Luc Dubois (1), Josh Morrissey (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 159,
                eventId: 277,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '01:24',
                periodTimeRemaining: '18:36',
                dateTime: '2023-04-19T02:40:39Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: -59,
                y: -2,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479400,
                    fullName: 'Pierre-Luc Dubois',
                    link: '/api/v1/people/8479400',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8471218,
                    fullName: 'Blake Wheeler',
                    link: '/api/v1/people/8471218',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK278',
                eventTypeId: 'GOAL',
                description: 'Pierre-Luc Dubois (1) Wrist Shot, assists: Blake Wheeler (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 163,
                eventId: 278,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '02:26',
                periodTimeRemaining: '17:34',
                dateTime: '2023-04-19T02:42:30Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: -61,
                y: -16,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476448,
                    fullName: 'William Karlsson',
                    link: '/api/v1/people/8476448',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477964,
                    fullName: 'Ivan Barbashev',
                    link: '/api/v1/people/8477964',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476539,
                    fullName: 'Jonathan Marchessault',
                    link: '/api/v1/people/8476539',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK611',
                eventTypeId: 'GOAL',
                description: 'William Karlsson (1) Wrist Shot, assists: Ivan Barbashev (1), Jonathan Marchessault (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 239,
                eventId: 611,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '15:49',
                periodTimeRemaining: '04:11',
                dateTime: '2023-04-19T03:05:57Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: 69,
                y: 12,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8471218,
                    fullName: 'Blake Wheeler',
                    link: '/api/v1/people/8471218',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475799,
                    fullName: 'Nino Niederreiter',
                    link: '/api/v1/people/8475799',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477220,
                    fullName: 'Nate Schmidt',
                    link: '/api/v1/people/8477220',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK628',
                eventTypeId: 'GOAL',
                description: 'Blake Wheeler (1) Backhand, assists: Nino Niederreiter (1), Nate Schmidt (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 282,
                eventId: 628,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '03:53',
                periodTimeRemaining: '16:07',
                dateTime: '2023-04-19T03:37:48Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 64,
                y: 2,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476392,
                    fullName: 'Adam Lowry',
                    link: '/api/v1/people/8476392',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8471218,
                    fullName: 'Blake Wheeler',
                    link: '/api/v1/people/8471218',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480145,
                    fullName: 'Neal Pionk',
                    link: '/api/v1/people/8480145',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK914',
                eventTypeId: 'GOAL',
                description: 'Adam Lowry (1) Wrist Shot, assists: Blake Wheeler (2), Neal Pionk (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 365,
                eventId: 914,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '18:39',
                periodTimeRemaining: '01:21',
                dateTime: '2023-04-19T04:05:27Z',
                goals: {
                  away: 4,
                  home: 1,
                },
              },
              coordinates: {
                x: 84,
                y: 0,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476392,
                    fullName: 'Adam Lowry',
                    link: '/api/v1/people/8476392',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475799,
                    fullName: 'Nino Niederreiter',
                    link: '/api/v1/people/8475799',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476480,
                    fullName: 'Vladislav Namestnikov',
                    link: '/api/v1/people/8476480',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK916',
                eventTypeId: 'GOAL',
                description: 'Adam Lowry (2) Snap Shot, assists: Nino Niederreiter (2), Vladislav Namestnikov (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 371,
                eventId: 916,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:41',
                periodTimeRemaining: '00:19',
                dateTime: '2023-04-19T04:08:46Z',
                goals: {
                  away: 5,
                  home: 1,
                },
              },
              coordinates: {
                x: 84,
                y: 5,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
          ],
          venue: {
            id: 5178,
            name: 'T-Mobile Arena',
            link: '/api/v1/venues/5178',
          },
          content: {
            link: '/api/v1/game/2022030171/content',
          },
        },
        {
          gamePk: 2022030151,
          link: '/api/v1/game/2022030151/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-19T02:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 0,
                type: 'league',
              },
              score: 3,
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 1,
                type: 'league',
              },
              score: 1,
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8480009,
                    fullName: 'Eeli Tolvanen',
                    link: '/api/v1/people/8480009',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL109',
                eventTypeId: 'GOAL',
                description: 'Eeli Tolvanen (1) Snap Shot, assists: none',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 21,
                eventId: 109,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '03:26',
                periodTimeRemaining: '16:34',
                dateTime: '2023-04-19T02:24:31Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 71,
                y: 3,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478420,
                    fullName: 'Mikko Rantanen',
                    link: '/api/v1/people/8478420',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477492,
                    fullName: 'Nathan MacKinnon',
                    link: '/api/v1/people/8477492',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8481524,
                    fullName: 'Bowen Byram',
                    link: '/api/v1/people/8481524',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL132',
                eventTypeId: 'GOAL',
                description: 'Mikko Rantanen (1) Tip-In, assists: Nathan MacKinnon (1), Bowen Byram (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 77,
                eventId: 132,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '12:35',
                periodTimeRemaining: '07:25',
                dateTime: '2023-04-19T02:41:02Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: -82,
                y: 3,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477505,
                    fullName: 'Alex Wennberg',
                    link: '/api/v1/people/8477505',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475768,
                    fullName: 'Jaden Schwartz',
                    link: '/api/v1/people/8475768',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476467,
                    fullName: 'Jamie Oleksiak',
                    link: '/api/v1/people/8476467',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL357',
                eventTypeId: 'GOAL',
                description: 'Alex Wennberg (1) Wrist Shot, assists: Jaden Schwartz (1), Jamie Oleksiak (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 131,
                eventId: 357,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '01:20',
                periodTimeRemaining: '18:40',
                dateTime: '2023-04-19T03:15:16Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -56,
                y: 19,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479987,
                    fullName: 'Morgan Geekie',
                    link: '/api/v1/people/8479987',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477505,
                    fullName: 'Alex Wennberg',
                    link: '/api/v1/people/8477505',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474602,
                    fullName: 'Justin Schultz',
                    link: '/api/v1/people/8474602',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL719',
                eventTypeId: 'GOAL',
                description: 'Morgan Geekie (1) Wrist Shot, assists: Alex Wennberg (1), Justin Schultz (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 261,
                eventId: 719,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '04:03',
                periodTimeRemaining: '15:57',
                dateTime: '2023-04-19T04:11:05Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 65,
                y: -4,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
          ],
          venue: {
            id: 5064,
            name: 'Ball Arena',
            link: '/api/v1/venues/5064',
          },
          content: {
            link: '/api/v1/game/2022030151/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-19',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030132,
          link: '/api/v1/game/2022030132/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-19T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 0,
                losses: 2,
                type: 'league',
              },
              score: 3,
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 0,
                type: 'league',
              },
              score: 4,
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8471669,
                    fullName: 'Paul Stastny',
                    link: '/api/v1/people/8471669',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476958,
                    fullName: 'Jaccob Slavin',
                    link: '/api/v1/people/8476958',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8482093,
                    fullName: 'Seth Jarvis',
                    link: '/api/v1/people/8482093',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR18',
                eventTypeId: 'GOAL',
                description: 'Paul Stastny (1) Tip-In, assists: Jaccob Slavin (1), Seth Jarvis (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 38,
                eventId: 18,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '05:49',
                periodTimeRemaining: '14:11',
                dateTime: '2023-04-19T23:17:25Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -82,
                y: 1,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476474,
                    fullName: 'Stefan Noesen',
                    link: '/api/v1/people/8476474',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR467',
                eventTypeId: 'GOAL',
                description: 'Stefan Noesen (2) , assists: none',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 153,
                eventId: 467,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '07:19',
                periodTimeRemaining: '12:41',
                dateTime: '2023-04-20T00:16:55Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 42,
                y: -33,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475151,
                    fullName: 'Kyle Palmieri',
                    link: '/api/v1/people/8475151',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480865,
                    fullName: 'Noah Dobson',
                    link: '/api/v1/people/8480865',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475754,
                    fullName: 'Brock Nelson',
                    link: '/api/v1/people/8475754',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR474',
                eventTypeId: 'GOAL',
                description: 'Kyle Palmieri (1) Backhand, assists: Noah Dobson (1), Brock Nelson (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 173,
                eventId: 474,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '10:48',
                periodTimeRemaining: '09:12',
                dateTime: '2023-04-20T00:24:18Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: -80,
                y: 12,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478445,
                    fullName: 'Mathew Barzal',
                    link: '/api/v1/people/8478445',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476917,
                    fullName: 'Adam Pelech',
                    link: '/api/v1/people/8476917',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR478',
                eventTypeId: 'GOAL',
                description: 'Mathew Barzal (1) Wrist Shot, assists: Adam Pelech (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 218,
                eventId: 478,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '19:39',
                periodTimeRemaining: '00:21',
                dateTime: '2023-04-20T00:37:14Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: -71,
                y: 2,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475754,
                    fullName: 'Brock Nelson',
                    link: '/api/v1/people/8475754',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475151,
                    fullName: 'Kyle Palmieri',
                    link: '/api/v1/people/8475151',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480865,
                    fullName: 'Noah Dobson',
                    link: '/api/v1/people/8480865',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR498',
                eventTypeId: 'GOAL',
                description: 'Brock Nelson (1) Wrist Shot, assists: Kyle Palmieri (1), Noah Dobson (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 275,
                eventId: 498,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '09:18',
                periodTimeRemaining: '10:42',
                dateTime: '2023-04-20T01:16:31Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: 67,
                y: 14,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476958,
                    fullName: 'Jaccob Slavin',
                    link: '/api/v1/people/8476958',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478427,
                    fullName: 'Sebastian Aho',
                    link: '/api/v1/people/8478427',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470613,
                    fullName: 'Brent Burns',
                    link: '/api/v1/people/8470613',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR754',
                eventTypeId: 'GOAL',
                description: 'Jaccob Slavin (1) Wrist Shot, assists: Sebastian Aho (1), Brent Burns (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 292,
                eventId: 754,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '12:19',
                periodTimeRemaining: '07:41',
                dateTime: '2023-04-20T01:23:04Z',
                goals: {
                  away: 3,
                  home: 3,
                },
              },
              coordinates: {
                x: -91,
                y: -14,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475855,
                    fullName: 'Jesper Fast',
                    link: '/api/v1/people/8475855',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473533,
                    fullName: 'Jordan Staal',
                    link: '/api/v1/people/8473533',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470613,
                    fullName: 'Brent Burns',
                    link: '/api/v1/people/8470613',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR782',
                eventTypeId: 'GOAL',
                description: 'Jesper Fast (1) Wrist Shot, assists: Jordan Staal (1), Brent Burns (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 372,
                eventId: 782,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '05:03',
                periodTimeRemaining: '14:57',
                dateTime: '2023-04-20T02:02:36Z',
                goals: {
                  away: 3,
                  home: 4,
                },
              },
              coordinates: {
                x: 80,
                y: -21,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
          ],
          venue: {
            id: 5066,
            name: 'PNC Arena',
            link: '/api/v1/venues/5066',
          },
          content: {
            link: '/api/v1/game/2022030132/content',
          },
        },
        {
          gamePk: 2022030112,
          link: '/api/v1/game/2022030112/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-19T23:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 6,
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 3,
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8477935,
                    fullName: 'Sam Bennett',
                    link: '/api/v1/people/8477935',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479314,
                    fullName: 'Matthew Tkachuk',
                    link: '/api/v1/people/8479314',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS188',
                eventTypeId: 'GOAL',
                description: 'Sam Bennett (1) Wrist Shot, assists: Matthew Tkachuk (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 146,
                eventId: 188,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '01:42',
                periodTimeRemaining: '18:18',
                dateTime: '2023-04-20T00:43:07Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 74,
                y: 1,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8473419,
                    fullName: 'Brad Marchand',
                    link: '/api/v1/people/8473419',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477931,
                    fullName: 'Tomas Nosek',
                    link: '/api/v1/people/8477931',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS462',
                eventTypeId: 'GOAL',
                description: 'Brad Marchand (2) Wrist Shot, assists: Tomas Nosek (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'SHG',
                  name: 'Short Handed',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 215,
                eventId: 462,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '12:13',
                periodTimeRemaining: '07:47',
                dateTime: '2023-04-20T01:08:17Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: -46,
                y: 1,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8470595,
                    fullName: 'Eric Staal',
                    link: '/api/v1/people/8470595',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476393,
                    fullName: 'Nick Cousins',
                    link: '/api/v1/people/8476393',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS468',
                eventTypeId: 'GOAL',
                description: 'Eric Staal (1) Wrist Shot, assists: Nick Cousins (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 225,
                eventId: 468,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '14:18',
                periodTimeRemaining: '05:42',
                dateTime: '2023-04-20T01:13:39Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: 53,
                y: 0,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477479,
                    fullName: 'Tyler Bertuzzi',
                    link: '/api/v1/people/8477479',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478401,
                    fullName: 'Pavel Zacha',
                    link: '/api/v1/people/8478401',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475200,
                    fullName: 'Dmitry Orlov',
                    link: '/api/v1/people/8475200',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS470',
                eventTypeId: 'GOAL',
                description: 'Tyler Bertuzzi (1) Deflected, assists: Pavel Zacha (2), Dmitry Orlov (2)',
                secondaryType: 'Deflected',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 233,
                eventId: 470,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '17:01',
                periodTimeRemaining: '02:59',
                dateTime: '2023-04-20T01:17:58Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: -81,
                y: -6,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477986,
                    fullName: 'Brandon Montour',
                    link: '/api/v1/people/8477986',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477933,
                    fullName: 'Sam Reinhart',
                    link: '/api/v1/people/8477933',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477493,
                    fullName: 'Aleksander Barkov',
                    link: '/api/v1/people/8477493',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS480',
                eventTypeId: 'GOAL',
                description: 'Brandon Montour (1) Wrist Shot, assists: Sam Reinhart (1), Aleksander Barkov (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 264,
                eventId: 480,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '00:22',
                periodTimeRemaining: '19:38',
                dateTime: '2023-04-20T01:45:43Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -37,
                y: 10,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477409,
                    fullName: 'Carter Verhaeghe',
                    link: '/api/v1/people/8477409',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479314,
                    fullName: 'Matthew Tkachuk',
                    link: '/api/v1/people/8479314',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS493',
                eventTypeId: 'GOAL',
                description: 'Carter Verhaeghe (1) Wrist Shot, assists: Matthew Tkachuk (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 298,
                eventId: 493,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '07:00',
                periodTimeRemaining: '13:00',
                dateTime: '2023-04-20T01:57:26Z',
                goals: {
                  away: 4,
                  home: 2,
                },
              },
              coordinates: {
                x: -72,
                y: -11,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477986,
                    fullName: 'Brandon Montour',
                    link: '/api/v1/people/8477986',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476393,
                    fullName: 'Nick Cousins',
                    link: '/api/v1/people/8476393',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478400,
                    fullName: 'Colin White',
                    link: '/api/v1/people/8478400',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS802',
                eventTypeId: 'GOAL',
                description: 'Brandon Montour (2) Slap Shot, assists: Nick Cousins (2), Colin White (1)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 325,
                eventId: 802,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '12:30',
                periodTimeRemaining: '07:30',
                dateTime: '2023-04-20T02:09:37Z',
                goals: {
                  away: 5,
                  home: 2,
                },
              },
              coordinates: {
                x: -36,
                y: 3,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480185,
                    fullName: 'Eetu Luostarinen',
                    link: '/api/v1/people/8480185',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478055,
                    fullName: 'Gustav Forsling',
                    link: '/api/v1/people/8478055',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS807',
                eventTypeId: 'GOAL',
                description: 'Eetu Luostarinen (1) Wrist Shot, assists: Gustav Forsling (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 349,
                eventId: 807,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '17:35',
                periodTimeRemaining: '02:25',
                dateTime: '2023-04-20T02:21:45Z',
                goals: {
                  away: 6,
                  home: 2,
                },
              },
              coordinates: {
                x: -42,
                y: -31,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475791,
                    fullName: 'Taylor Hall',
                    link: '/api/v1/people/8475791',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473422,
                    fullName: 'Nick Foligno',
                    link: '/api/v1/people/8473422',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475762,
                    fullName: 'Derek Forbort',
                    link: '/api/v1/people/8475762',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS809',
                eventTypeId: 'GOAL',
                description: 'Taylor Hall (1) Wrist Shot, assists: Nick Foligno (1), Derek Forbort (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 362,
                eventId: 809,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '18:50',
                periodTimeRemaining: '01:10',
                dateTime: '2023-04-20T02:28:22Z',
                goals: {
                  away: 6,
                  home: 3,
                },
              },
              coordinates: {
                x: 71,
                y: 3,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
          ],
          venue: {
            id: 5085,
            name: 'TD Garden',
            link: '/api/v1/venues/5085',
          },
          content: {
            link: '/api/v1/game/2022030112/content',
          },
        },
        {
          gamePk: 2022030162,
          link: '/api/v1/game/2022030162/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-20T01:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 3,
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 7,
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8481641,
                    fullName: 'Joel Kiviranta',
                    link: '/api/v1/people/8481641',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470594,
                    fullName: 'Marc-Andre Fleury',
                    link: '/api/v1/people/8470594',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL162',
                eventTypeId: 'GOAL',
                description: 'Roope Hintz (2) Wrist Shot, assists: Joel Kiviranta (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'SHG',
                  name: 'Short Handed',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 31,
                eventId: 162,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '04:14',
                periodTimeRemaining: '15:46',
                dateTime: '2023-04-20T01:56:41Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -64,
                y: 1,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475794,
                    fullName: 'Tyler Seguin',
                    link: '/api/v1/people/8475794',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480027,
                    fullName: 'Jason Robertson',
                    link: '/api/v1/people/8480027',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480036,
                    fullName: 'Miro Heiskanen',
                    link: '/api/v1/people/8480036',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8470594,
                    fullName: 'Marc-Andre Fleury',
                    link: '/api/v1/people/8470594',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL174',
                eventTypeId: 'GOAL',
                description: 'Tyler Seguin (1) Tip-In, assists: Jason Robertson (1), Miro Heiskanen (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 66,
                eventId: 174,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '11:20',
                periodTimeRemaining: '08:40',
                dateTime: '2023-04-20T02:09:59Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: -79,
                y: 2,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476897,
                    fullName: 'Oskar Sundqvist',
                    link: '/api/v1/people/8476897',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474679,
                    fullName: 'Gustav Nyquist',
                    link: '/api/v1/people/8474679',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476856,
                    fullName: 'Matt Dumba',
                    link: '/api/v1/people/8476856',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL185',
                eventTypeId: 'GOAL',
                description: 'Oskar Sundqvist (1) Deflected, assists: Gustav Nyquist (2), Matt Dumba (1)',
                secondaryType: 'Deflected',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 108,
                eventId: 185,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '16:11',
                periodTimeRemaining: '03:49',
                dateTime: '2023-04-20T02:23:58Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: 81,
                y: -2,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8473994,
                    fullName: 'Jamie Benn',
                    link: '/api/v1/people/8473994',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480036,
                    fullName: 'Miro Heiskanen',
                    link: '/api/v1/people/8480036',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8470594,
                    fullName: 'Marc-Andre Fleury',
                    link: '/api/v1/people/8470594',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL401',
                eventTypeId: 'GOAL',
                description: 'Jamie Benn (1) Wrist Shot, assists: Roope Hintz (1), Miro Heiskanen (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 154,
                eventId: 401,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '04:07',
                periodTimeRemaining: '15:53',
                dateTime: '2023-04-20T02:55:22Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: 68,
                y: 18,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8474149,
                    fullName: 'Evgenii Dadonov',
                    link: '/api/v1/people/8474149',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8482740,
                    fullName: 'Wyatt Johnston',
                    link: '/api/v1/people/8482740',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473994,
                    fullName: 'Jamie Benn',
                    link: '/api/v1/people/8473994',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8470594,
                    fullName: 'Marc-Andre Fleury',
                    link: '/api/v1/people/8470594',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL404',
                eventTypeId: 'GOAL',
                description: 'Evgenii Dadonov (1) Backhand, assists: Wyatt Johnston (1), Jamie Benn (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 160,
                eventId: 404,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '05:34',
                periodTimeRemaining: '14:26',
                dateTime: '2023-04-20T02:57:34Z',
                goals: {
                  away: 1,
                  home: 4,
                },
              },
              coordinates: {
                x: 85,
                y: 7,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475149,
                    fullName: 'Marcus Johansson',
                    link: '/api/v1/people/8475149',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8481557,
                    fullName: 'Matt Boldy',
                    link: '/api/v1/people/8481557',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475692,
                    fullName: 'Mats Zuccarello',
                    link: '/api/v1/people/8475692',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL417',
                eventTypeId: 'GOAL',
                description: 'Marcus Johansson (1) Backhand, assists: Matt Boldy (1), Mats Zuccarello (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 188,
                eventId: 417,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '11:54',
                periodTimeRemaining: '08:06',
                dateTime: '2023-04-20T03:09:13Z',
                goals: {
                  away: 2,
                  home: 4,
                },
              },
              coordinates: {
                x: -82,
                y: 4,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477919,
                    fullName: 'Frederick Gaudreau',
                    link: '/api/v1/people/8477919',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474679,
                    fullName: 'Gustav Nyquist',
                    link: '/api/v1/people/8474679',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476856,
                    fullName: 'Matt Dumba',
                    link: '/api/v1/people/8476856',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL418',
                eventTypeId: 'GOAL',
                description: 'Frederick Gaudreau (1) Backhand, assists: Gustav Nyquist (3), Matt Dumba (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 191,
                eventId: 418,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '12:05',
                periodTimeRemaining: '07:55',
                dateTime: '2023-04-20T03:10:08Z',
                goals: {
                  away: 3,
                  home: 4,
                },
              },
              coordinates: {
                x: -82,
                y: -6,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8474149,
                    fullName: 'Evgenii Dadonov',
                    link: '/api/v1/people/8474149',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480036,
                    fullName: 'Miro Heiskanen',
                    link: '/api/v1/people/8480036',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8470594,
                    fullName: 'Marc-Andre Fleury',
                    link: '/api/v1/people/8470594',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL425',
                eventTypeId: 'GOAL',
                description: 'Evgenii Dadonov (2) Tip-In, assists: Miro Heiskanen (4)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 213,
                eventId: 425,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '16:08',
                periodTimeRemaining: '03:52',
                dateTime: '2023-04-20T03:19:10Z',
                goals: {
                  away: 3,
                  home: 5,
                },
              },
              coordinates: {
                x: 76,
                y: -12,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8470594,
                    fullName: 'Marc-Andre Fleury',
                    link: '/api/v1/people/8470594',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL426',
                eventTypeId: 'GOAL',
                description: 'Roope Hintz (3) Wrist Shot, assists: none',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 216,
                eventId: 426,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '16:56',
                periodTimeRemaining: '03:04',
                dateTime: '2023-04-20T03:21:12Z',
                goals: {
                  away: 3,
                  home: 6,
                },
              },
              coordinates: {
                x: 68,
                y: 6,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8480027,
                    fullName: 'Jason Robertson',
                    link: '/api/v1/people/8480027',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480036,
                    fullName: 'Miro Heiskanen',
                    link: '/api/v1/people/8480036',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8470594,
                    fullName: 'Marc-Andre Fleury',
                    link: '/api/v1/people/8470594',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL806',
                eventTypeId: 'GOAL',
                description: 'Roope Hintz (4) Tip-In, assists: Jason Robertson (2), Miro Heiskanen (5)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 303,
                eventId: 806,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '12:16',
                periodTimeRemaining: '07:44',
                dateTime: '2023-04-20T04:10:31Z',
                goals: {
                  away: 3,
                  home: 7,
                },
              },
              coordinates: {
                x: -83,
                y: -5,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
          ],
          venue: {
            id: 5019,
            name: 'American Airlines Center',
            link: '/api/v1/venues/5019',
          },
          content: {
            link: '/api/v1/game/2022030162/content',
          },
        },
        {
          gamePk: 2022030182,
          link: '/api/v1/game/2022030182/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-20T02:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 2,
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 4,
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478585,
                    fullName: 'Derek Ryan',
                    link: '/api/v1/people/8478585',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477498,
                    fullName: 'Darnell Nurse',
                    link: '/api/v1/people/8477498',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM153',
                eventTypeId: 'GOAL',
                description: 'Derek Ryan (1) Wrist Shot, assists: Leon Draisaitl (1), Darnell Nurse (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 22,
                eventId: 153,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '02:34',
                periodTimeRemaining: '17:26',
                dateTime: '2023-04-20T02:25:17Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 79,
                y: -3,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478402,
                    fullName: 'Connor McDavid',
                    link: '/api/v1/people/8478402',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480803,
                    fullName: 'Evan Bouchard',
                    link: '/api/v1/people/8480803',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM171',
                eventTypeId: 'GOAL',
                description: 'Leon Draisaitl (3) Snap Shot, assists: Connor McDavid (1), Evan Bouchard (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 85,
                eventId: 171,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '12:06',
                periodTimeRemaining: '07:54',
                dateTime: '2023-04-20T02:44:18Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 76,
                y: -23,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476479,
                    fullName: 'Phillip Danault',
                    link: '/api/v1/people/8476479',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477960,
                    fullName: 'Adrian Kempe',
                    link: '/api/v1/people/8477960',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479998,
                    fullName: 'Mikey Anderson',
                    link: '/api/v1/people/8479998',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM471',
                eventTypeId: 'GOAL',
                description: 'Phillip Danault (1) Backhand, assists: Adrian Kempe (1), Mikey Anderson (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 241,
                eventId: 471,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '14:38',
                periodTimeRemaining: '05:22',
                dateTime: '2023-04-20T03:42:44Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: 82,
                y: -4,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480014,
                    fullName: 'Gabriel Vilardi',
                    link: '/api/v1/people/8480014',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479675,
                    fullName: 'Trevor Moore',
                    link: '/api/v1/people/8479675',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478882,
                    fullName: 'Vladislav Gavrikov',
                    link: '/api/v1/people/8478882',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM481',
                eventTypeId: 'GOAL',
                description: 'Gabriel Vilardi (1) Wrist Shot, assists: Trevor Moore (1), Vladislav Gavrikov (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 266,
                eventId: 481,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '19:16',
                periodTimeRemaining: '00:44',
                dateTime: '2023-04-20T03:53:47Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: 84,
                y: 3,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480011,
                    fullName: 'Klim Kostin',
                    link: '/api/v1/people/8480011',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM492',
                eventTypeId: 'GOAL',
                description: 'Klim Kostin (1) Snap Shot, assists: none',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 290,
                eventId: 492,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '02:20',
                periodTimeRemaining: '17:40',
                dateTime: '2023-04-20T04:16:24Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: 60,
                y: 28,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475169,
                    fullName: 'Evander Kane',
                    link: '/api/v1/people/8475169',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM825',
                eventTypeId: 'GOAL',
                description: 'Evander Kane (1) Wrist Shot, assists: Leon Draisaitl (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 398,
                eventId: 825,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:37',
                periodTimeRemaining: '00:23',
                dateTime: '2023-04-20T04:49:41Z',
                goals: {
                  away: 2,
                  home: 4,
                },
              },
              coordinates: {
                x: 77,
                y: 1,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
          ],
          venue: {
            id: 5100,
            name: 'Rogers Place',
            link: '/api/v1/venues/5100',
          },
          content: {
            link: '/api/v1/game/2022030182/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-20',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030122,
          link: '/api/v1/game/2022030122/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-20T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 2,
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 7,
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476853,
                    fullName: 'Morgan Rielly',
                    link: '/api/v1/people/8476853',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479318,
                    fullName: 'Auston Matthews',
                    link: '/api/v1/people/8479318',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR8',
                eventTypeId: 'GOAL',
                description: 'Mitchell Marner (1) Slap Shot, assists: Morgan Rielly (1), Auston Matthews (3)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 9,
                eventId: 8,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '00:47',
                periodTimeRemaining: '19:13',
                dateTime: '2023-04-20T23:12:15Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -49,
                y: 28,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475166,
                    fullName: 'John Tavares',
                    link: '/api/v1/people/8475166',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476853,
                    fullName: 'Morgan Rielly',
                    link: '/api/v1/people/8476853',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR30',
                eventTypeId: 'GOAL',
                description: 'John Tavares (1) Wrist Shot, assists: Morgan Rielly (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 74,
                eventId: 30,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '12:45',
                periodTimeRemaining: '07:15',
                dateTime: '2023-04-20T23:38:48Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: -70,
                y: -4,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477939,
                    fullName: 'William Nylander',
                    link: '/api/v1/people/8477939',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476853,
                    fullName: 'Morgan Rielly',
                    link: '/api/v1/people/8476853',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479318,
                    fullName: 'Auston Matthews',
                    link: '/api/v1/people/8479318',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR37',
                eventTypeId: 'GOAL',
                description: 'William Nylander (2) Wrist Shot, assists: Morgan Rielly (3), Auston Matthews (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 96,
                eventId: 37,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '15:08',
                periodTimeRemaining: '04:52',
                dateTime: '2023-04-20T23:45:56Z',
                goals: {
                  away: 0,
                  home: 3,
                },
              },
              coordinates: {
                x: -61,
                y: -26,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8474013,
                    fullName: 'Ian Cole',
                    link: '/api/v1/people/8474013',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474564,
                    fullName: 'Steven Stamkos',
                    link: '/api/v1/people/8474564',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478010,
                    fullName: 'Brayden Point',
                    link: '/api/v1/people/8478010',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR471',
                eventTypeId: 'GOAL',
                description: 'Ian Cole (1) Backhand, assists: Steven Stamkos (1), Brayden Point (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 173,
                eventId: 471,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '08:58',
                periodTimeRemaining: '11:02',
                dateTime: '2023-04-21T00:23:50Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: -81,
                y: 4,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475166,
                    fullName: 'John Tavares',
                    link: '/api/v1/people/8475166',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476853,
                    fullName: 'Morgan Rielly',
                    link: '/api/v1/people/8476853',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8477939,
                    fullName: 'William Nylander',
                    link: '/api/v1/people/8477939',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR483',
                eventTypeId: 'GOAL',
                description: 'John Tavares (2) Backhand, assists: Morgan Rielly (4), William Nylander (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 205,
                eventId: 483,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '13:14',
                periodTimeRemaining: '06:46',
                dateTime: '2023-04-21T00:35:37Z',
                goals: {
                  away: 1,
                  home: 4,
                },
              },
              coordinates: {
                x: 81,
                y: -6,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479944,
                    fullName: 'Zach Aston-Reese',
                    link: '/api/v1/people/8479944',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480144,
                    fullName: 'David Kampf',
                    link: '/api/v1/people/8480144',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478043,
                    fullName: 'Sam Lafferty',
                    link: '/api/v1/people/8478043',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR491',
                eventTypeId: 'GOAL',
                description: 'Zach Aston-Reese (1) Wrist Shot, assists: David Kampf (1), Sam Lafferty (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 227,
                eventId: 491,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '15:52',
                periodTimeRemaining: '04:08',
                dateTime: '2023-04-21T00:43:15Z',
                goals: {
                  away: 1,
                  home: 5,
                },
              },
              coordinates: {
                x: 81,
                y: -1,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8474673,
                    fullName: 'TJ Brodie',
                    link: '/api/v1/people/8474673',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR492',
                eventTypeId: 'GOAL',
                description: 'Mitchell Marner (2) Tip-In, assists: TJ Brodie (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 234,
                eventId: 492,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '18:02',
                periodTimeRemaining: '01:58',
                dateTime: '2023-04-21T00:46:05Z',
                goals: {
                  away: 1,
                  home: 6,
                },
              },
              coordinates: {
                x: 49,
                y: -24,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8470621,
                    fullName: 'Corey Perry',
                    link: '/api/v1/people/8470621',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477930,
                    fullName: 'Pierre-Edouard Bellemare',
                    link: '/api/v1/people/8477930',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474034,
                    fullName: 'Pat Maroon',
                    link: '/api/v1/people/8474034',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR717',
                eventTypeId: 'GOAL',
                description: 'Corey Perry (2) Wrist Shot, assists: Pierre-Edouard Bellemare (1), Pat Maroon (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 325,
                eventId: 717,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '12:38',
                periodTimeRemaining: '07:22',
                dateTime: '2023-04-21T01:34:07Z',
                goals: {
                  away: 2,
                  home: 6,
                },
              },
              coordinates: {
                x: 82,
                y: -5,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475166,
                    fullName: 'John Tavares',
                    link: '/api/v1/people/8475166',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8475158,
                    fullName: "Ryan O'Reilly",
                    link: '/api/v1/people/8475158',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR721',
                eventTypeId: 'GOAL',
                description: "John Tavares (3) Wrist Shot, assists: Mitchell Marner (4), Ryan O'Reilly (1)",
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 344,
                eventId: 721,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '15:06',
                periodTimeRemaining: '04:54',
                dateTime: '2023-04-21T01:43:19Z',
                goals: {
                  away: 2,
                  home: 7,
                },
              },
              coordinates: {
                x: -86,
                y: 2,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
          ],
          venue: {
            name: 'Scotiabank Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030122/content',
          },
        },
        {
          gamePk: 2022030142,
          link: '/api/v1/game/2022030142/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-20T23:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 0,
                type: 'league',
              },
              score: 5,
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 2,
                type: 'league',
              },
              score: 1,
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475287,
                    fullName: 'Erik Haula',
                    link: '/api/v1/people/8475287',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479415,
                    fullName: 'Michael McLeod',
                    link: '/api/v1/people/8479415',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476292,
                    fullName: 'Ondrej Palat',
                    link: '/api/v1/people/8476292',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD33',
                eventTypeId: 'GOAL',
                description: 'Erik Haula (1) Backhand, assists: Michael McLeod (1), Ondrej Palat (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 92,
                eventId: 33,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '11:44',
                periodTimeRemaining: '08:16',
                dateTime: '2023-04-21T00:07:46Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 82,
                y: 6,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475765,
                    fullName: 'Vladimir Tarasenko',
                    link: '/api/v1/people/8475765',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479323,
                    fullName: 'Adam Fox',
                    link: '/api/v1/people/8479323',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8479324,
                    fullName: 'Ryan Lindgren',
                    link: '/api/v1/people/8479324',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD313',
                eventTypeId: 'GOAL',
                description: 'Vladimir Tarasenko (2) Wrist Shot, assists: Adam Fox (5), Ryan Lindgren (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 170,
                eventId: 313,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '05:53',
                periodTimeRemaining: '14:07',
                dateTime: '2023-04-21T00:48:37Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: 52,
                y: -2,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475184,
                    fullName: 'Chris Kreider',
                    link: '/api/v1/people/8475184',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8474141,
                    fullName: 'Patrick Kane',
                    link: '/api/v1/people/8474141',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476459,
                    fullName: 'Mika Zibanejad',
                    link: '/api/v1/people/8476459',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD323',
                eventTypeId: 'GOAL',
                description: 'Chris Kreider (3) Tip-In, assists: Patrick Kane (2), Mika Zibanejad (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 193,
                eventId: 323,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '09:57',
                periodTimeRemaining: '10:03',
                dateTime: '2023-04-21T00:57:49Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: 81,
                y: 2,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475184,
                    fullName: 'Chris Kreider',
                    link: '/api/v1/people/8475184',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8474141,
                    fullName: 'Patrick Kane',
                    link: '/api/v1/people/8474141',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479323,
                    fullName: 'Adam Fox',
                    link: '/api/v1/people/8479323',
                  },
                  playerType: 'Assist',
                  seasonTotal: 6,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD329',
                eventTypeId: 'GOAL',
                description: 'Chris Kreider (4) Tip-In, assists: Patrick Kane (3), Adam Fox (6)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 221,
                eventId: 329,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '16:00',
                periodTimeRemaining: '04:00',
                dateTime: '2023-04-21T01:12:59Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 83,
                y: -5,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8474141,
                    fullName: 'Patrick Kane',
                    link: '/api/v1/people/8474141',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD350',
                eventTypeId: 'GOAL',
                description: 'Patrick Kane (1) Backhand, assists: none',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 272,
                eventId: 350,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '06:34',
                periodTimeRemaining: '13:26',
                dateTime: '2023-04-21T01:44:48Z',
                goals: {
                  away: 4,
                  home: 1,
                },
              },
              coordinates: {
                x: -80,
                y: 1,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8481554,
                    fullName: 'Kaapo Kakko',
                    link: '/api/v1/people/8481554',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480078,
                    fullName: 'Filip Chytil',
                    link: '/api/v1/people/8480078',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478859,
                    fullName: 'Niko Mikkola',
                    link: '/api/v1/people/8478859',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477970,
                    fullName: 'Vitek Vanecek',
                    link: '/api/v1/people/8477970',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD761',
                eventTypeId: 'GOAL',
                description: 'Kaapo Kakko (1) Snap Shot, assists: Filip Chytil (2), Niko Mikkola (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 310,
                eventId: 761,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '13:05',
                periodTimeRemaining: '06:55',
                dateTime: '2023-04-21T01:59:54Z',
                goals: {
                  away: 5,
                  home: 1,
                },
              },
              coordinates: {
                x: -73,
                y: -1,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
          ],
          venue: {
            name: 'Prudential Center',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030142/content',
          },
        },
        {
          gamePk: 2022030152,
          link: '/api/v1/game/2022030152/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-21T01:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 2,
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 3,
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8474602,
                    fullName: 'Justin Schultz',
                    link: '/api/v1/people/8474602',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480009,
                    fullName: 'Eeli Tolvanen',
                    link: '/api/v1/people/8480009',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476826,
                    fullName: 'Yanni Gourde',
                    link: '/api/v1/people/8476826',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL10',
                eventTypeId: 'GOAL',
                description: 'Justin Schultz (1) Snap Shot, assists: Eeli Tolvanen (1), Yanni Gourde (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 25,
                eventId: 10,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '02:40',
                periodTimeRemaining: '17:20',
                dateTime: '2023-04-21T01:54:27Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 75,
                y: 1,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479293,
                    fullName: 'Brandon Tanev',
                    link: '/api/v1/people/8479293',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476826,
                    fullName: 'Yanni Gourde',
                    link: '/api/v1/people/8476826',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL31',
                eventTypeId: 'GOAL',
                description: 'Brandon Tanev (1) Wrist Shot, assists: Yanni Gourde (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'SHG',
                  name: 'Short Handed',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 70,
                eventId: 31,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '13:27',
                periodTimeRemaining: '06:33',
                dateTime: '2023-04-21T02:15:02Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: 61,
                y: 7,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477476,
                    fullName: 'Artturi Lehkonen',
                    link: '/api/v1/people/8477476',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480069,
                    fullName: 'Cale Makar',
                    link: '/api/v1/people/8480069',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8481524,
                    fullName: 'Bowen Byram',
                    link: '/api/v1/people/8481524',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL375',
                eventTypeId: 'GOAL',
                description: 'Artturi Lehkonen (1) Tip-In, assists: Cale Makar (1), Bowen Byram (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 159,
                eventId: 375,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '06:42',
                periodTimeRemaining: '13:18',
                dateTime: '2023-04-21T03:00:48Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: 70,
                y: -6,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477501,
                    fullName: 'Valeri Nichushkin',
                    link: '/api/v1/people/8477501',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478542,
                    fullName: 'Evan Rodrigues',
                    link: '/api/v1/people/8478542',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478038,
                    fullName: 'Devon Toews',
                    link: '/api/v1/people/8478038',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL378',
                eventTypeId: 'GOAL',
                description: 'Valeri Nichushkin (1) Backhand, assists: Evan Rodrigues (1), Devon Toews (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 166,
                eventId: 378,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '07:30',
                periodTimeRemaining: '12:30',
                dateTime: '2023-04-21T03:02:19Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: 79,
                y: -6,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478038,
                    fullName: 'Devon Toews',
                    link: '/api/v1/people/8478038',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477476,
                    fullName: 'Artturi Lehkonen',
                    link: '/api/v1/people/8477476',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479398,
                    fullName: 'Samuel Girard',
                    link: '/api/v1/people/8479398',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL698',
                eventTypeId: 'GOAL',
                description: 'Devon Toews (1) Wrist Shot, assists: Artturi Lehkonen (1), Samuel Girard (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 323,
                eventId: 698,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '12:59',
                periodTimeRemaining: '07:01',
                dateTime: '2023-04-21T04:08:39Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: -68,
                y: 18,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
          ],
          venue: {
            id: 5064,
            name: 'Ball Arena',
            link: '/api/v1/venues/5064',
          },
          content: {
            link: '/api/v1/game/2022030152/content',
          },
        },
        {
          gamePk: 2022030172,
          link: '/api/v1/game/2022030172/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-21T02:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 2,
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                type: 'league',
              },
              score: 5,
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8476392,
                    fullName: 'Adam Lowry',
                    link: '/api/v1/people/8476392',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8480145,
                    fullName: 'Neal Pionk',
                    link: '/api/v1/people/8480145',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477220,
                    fullName: 'Nate Schmidt',
                    link: '/api/v1/people/8477220',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK87',
                eventTypeId: 'GOAL',
                description: 'Adam Lowry (3) Tip-In, assists: Neal Pionk (2), Nate Schmidt (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 68,
                eventId: 87,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '09:18',
                periodTimeRemaining: '10:42',
                dateTime: '2023-04-21T02:39:38Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 69,
                y: 0,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476448,
                    fullName: 'William Karlsson',
                    link: '/api/v1/people/8476448',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8473548,
                    fullName: 'Phil Kessel',
                    link: '/api/v1/people/8473548',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475191,
                    fullName: 'Reilly Smith',
                    link: '/api/v1/people/8475191',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK296',
                eventTypeId: 'GOAL',
                description: 'William Karlsson (2) Wrist Shot, assists: Phil Kessel (1), Reilly Smith (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 188,
                eventId: 296,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '05:54',
                periodTimeRemaining: '14:06',
                dateTime: '2023-04-21T03:32:44Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: 68,
                y: 2,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478403,
                    fullName: 'Jack Eichel',
                    link: '/api/v1/people/8478403',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474565,
                    fullName: 'Alex Pietrangelo',
                    link: '/api/v1/people/8474565',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478020,
                    fullName: 'Michael Amadio',
                    link: '/api/v1/people/8478020',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK611',
                eventTypeId: 'GOAL',
                description: 'Jack Eichel (1) Tip-In, assists: Alex Pietrangelo (1), Michael Amadio (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 224,
                eventId: 611,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '10:25',
                periodTimeRemaining: '09:35',
                dateTime: '2023-04-21T03:44:07Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: 68,
                y: 3,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478831,
                    fullName: 'Kevin Stenlund',
                    link: '/api/v1/people/8478831',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477357,
                    fullName: 'Saku Maenalanen',
                    link: '/api/v1/people/8477357',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476331,
                    fullName: 'Dylan DeMelo',
                    link: '/api/v1/people/8476331',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK625',
                eventTypeId: 'GOAL',
                description: 'Kevin Stenlund (1) Tip-In, assists: Saku Maenalanen (1), Dylan DeMelo (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 263,
                eventId: 625,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '16:01',
                periodTimeRemaining: '03:59',
                dateTime: '2023-04-21T03:55:54Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: -78,
                y: 1,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476905,
                    fullName: 'Chandler Stephenson',
                    link: '/api/v1/people/8476905',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474565,
                    fullName: 'Alex Pietrangelo',
                    link: '/api/v1/people/8474565',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475913,
                    fullName: 'Mark Stone',
                    link: '/api/v1/people/8475913',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK657',
                eventTypeId: 'GOAL',
                description: 'Chandler Stephenson (1) Snap Shot, assists: Alex Pietrangelo (2), Mark Stone (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 334,
                eventId: 657,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '05:37',
                periodTimeRemaining: '14:23',
                dateTime: '2023-04-21T04:28:47Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: -72,
                y: 2,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475913,
                    fullName: 'Mark Stone',
                    link: '/api/v1/people/8475913',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476905,
                    fullName: 'Chandler Stephenson',
                    link: '/api/v1/people/8476905',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479353,
                    fullName: 'Brett Howden',
                    link: '/api/v1/people/8479353',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK677',
                eventTypeId: 'GOAL',
                description: 'Mark Stone (1) Tip-In, assists: Chandler Stephenson (1), Brett Howden (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 389,
                eventId: 677,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '13:01',
                periodTimeRemaining: '06:59',
                dateTime: '2023-04-21T04:45:30Z',
                goals: {
                  away: 2,
                  home: 4,
                },
              },
              coordinates: {
                x: -78,
                y: 7,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475913,
                    fullName: 'Mark Stone',
                    link: '/api/v1/people/8475913',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476448,
                    fullName: 'William Karlsson',
                    link: '/api/v1/people/8476448',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473548,
                    fullName: 'Phil Kessel',
                    link: '/api/v1/people/8473548',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK687',
                eventTypeId: 'GOAL',
                description: 'Mark Stone (2) Wrist Shot, assists: William Karlsson (1), Phil Kessel (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 414,
                eventId: 687,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '17:30',
                periodTimeRemaining: '02:30',
                dateTime: '2023-04-21T04:54:07Z',
                goals: {
                  away: 2,
                  home: 5,
                },
              },
              coordinates: {
                x: -54,
                y: 9,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
          ],
          venue: {
            id: 5178,
            name: 'T-Mobile Arena',
            link: '/api/v1/venues/5178',
          },
          content: {
            link: '/api/v1/game/2022030172/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-21',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030133,
          link: '/api/v1/game/2022030133/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-21T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                type: 'league',
              },
              score: 1,
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                type: 'league',
              },
              score: 5,
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475231,
                    fullName: 'Casey Cizikas',
                    link: '/api/v1/people/8475231',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477506,
                    fullName: 'Ryan Pulock',
                    link: '/api/v1/people/8477506',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI560',
                eventTypeId: 'GOAL',
                description: 'Casey Cizikas (1) Wrist Shot, assists: Ryan Pulock (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 203,
                eventId: 560,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '12:49',
                periodTimeRemaining: '07:11',
                dateTime: '2023-04-22T00:31:13Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -74,
                y: 15,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475855,
                    fullName: 'Jesper Fast',
                    link: '/api/v1/people/8475855',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8473533,
                    fullName: 'Jordan Staal',
                    link: '/api/v1/people/8473533',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI567',
                eventTypeId: 'GOAL',
                description: 'Jesper Fast (2) Tip-In, assists: Jordan Staal (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'SHG',
                  name: 'Short Handed',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 227,
                eventId: 567,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '16:56',
                periodTimeRemaining: '03:04',
                dateTime: '2023-04-22T00:39:33Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: 77,
                y: -2,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475151,
                    fullName: 'Kyle Palmieri',
                    link: '/api/v1/people/8475151',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480222,
                    fullName: 'Sebastian Aho',
                    link: '/api/v1/people/8480222',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476419,
                    fullName: 'Jean-Gabriel Pageau',
                    link: '/api/v1/people/8476419',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI902',
                eventTypeId: 'GOAL',
                description: 'Kyle Palmieri (2) Tip-In, assists: Sebastian Aho (1), Jean-Gabriel Pageau (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 335,
                eventId: 902,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:09',
                periodTimeRemaining: '03:51',
                dateTime: '2023-04-22T01:33:45Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: 80,
                y: -5,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8474709,
                    fullName: 'Matt Martin',
                    link: '/api/v1/people/8474709',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475151,
                    fullName: 'Kyle Palmieri',
                    link: '/api/v1/people/8475151',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476429,
                    fullName: 'Scott Mayfield',
                    link: '/api/v1/people/8476429',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI903',
                eventTypeId: 'GOAL',
                description: 'Matt Martin (1) Wrist Shot, assists: Kyle Palmieri (2), Scott Mayfield (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 339,
                eventId: 903,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:53',
                periodTimeRemaining: '03:07',
                dateTime: '2023-04-22T01:35:22Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: 76,
                y: 11,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476429,
                    fullName: 'Scott Mayfield',
                    link: '/api/v1/people/8476429',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI905',
                eventTypeId: 'GOAL',
                description: 'Scott Mayfield (1) Wrist Shot, assists: none',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 349,
                eventId: 905,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '18:11',
                periodTimeRemaining: '01:49',
                dateTime: '2023-04-22T01:40:45Z',
                goals: {
                  away: 1,
                  home: 4,
                },
              },
              coordinates: {
                x: -86,
                y: 18,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475314,
                    fullName: 'Anders Lee',
                    link: '/api/v1/people/8475314',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475231,
                    fullName: 'Casey Cizikas',
                    link: '/api/v1/people/8475231',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477506,
                    fullName: 'Ryan Pulock',
                    link: '/api/v1/people/8477506',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI906',
                eventTypeId: 'GOAL',
                description: 'Anders Lee (1) Deflected, assists: Casey Cizikas (1), Ryan Pulock (2)',
                secondaryType: 'Deflected',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 351,
                eventId: 906,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '18:27',
                periodTimeRemaining: '01:33',
                dateTime: '2023-04-22T01:41:39Z',
                goals: {
                  away: 1,
                  home: 5,
                },
              },
              coordinates: {
                x: 78,
                y: 0,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
          ],
          venue: {
            name: 'UBS Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030133/content',
          },
        },
        {
          gamePk: 2022030113,
          link: '/api/v1/game/2022030113/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-21T23:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                type: 'league',
              },
              score: 4,
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                type: 'league',
              },
              score: 2,
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475791,
                    fullName: 'Taylor Hall',
                    link: '/api/v1/people/8475791',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475200,
                    fullName: 'Dmitry Orlov',
                    link: '/api/v1/people/8475200',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA156',
                eventTypeId: 'GOAL',
                description: 'Taylor Hall (2) Snap Shot, assists: Dmitry Orlov (3)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 22,
                eventId: 156,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '02:26',
                periodTimeRemaining: '17:34',
                dateTime: '2023-04-21T23:44:37Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 35,
                y: -22,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475745,
                    fullName: 'Charlie Coyle',
                    link: '/api/v1/people/8475745',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473419,
                    fullName: 'Brad Marchand',
                    link: '/api/v1/people/8473419',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478498,
                    fullName: 'Jake DeBrusk',
                    link: '/api/v1/people/8478498',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA196',
                eventTypeId: 'GOAL',
                description: 'Charlie Coyle (1) Tip-In, assists: Brad Marchand (1), Jake DeBrusk (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 150,
                eventId: 196,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '06:00',
                periodTimeRemaining: '14:00',
                dateTime: '2023-04-22T00:44:10Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: -80,
                y: 6,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477956,
                    fullName: 'David Pastrnak',
                    link: '/api/v1/people/8477956',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475200,
                    fullName: 'Dmitry Orlov',
                    link: '/api/v1/people/8475200',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8477479,
                    fullName: 'Tyler Bertuzzi',
                    link: '/api/v1/people/8477479',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479312,
                    fullName: 'Alex Lyon',
                    link: '/api/v1/people/8479312',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA495',
                eventTypeId: 'GOAL',
                description: 'David Pastrnak (2) Snap Shot, assists: Dmitry Orlov (4), Tyler Bertuzzi (3)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 282,
                eventId: 495,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '08:32',
                periodTimeRemaining: '11:28',
                dateTime: '2023-04-22T01:43:53Z',
                goals: {
                  away: 3,
                  home: 0,
                },
              },
              coordinates: {
                x: 60,
                y: 19,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8473422,
                    fullName: 'Nick Foligno',
                    link: '/api/v1/people/8473422',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475791,
                    fullName: 'Taylor Hall',
                    link: '/api/v1/people/8475791',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478498,
                    fullName: 'Jake DeBrusk',
                    link: '/api/v1/people/8478498',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA853',
                eventTypeId: 'GOAL',
                description: 'Nick Foligno (1) Backhand, assists: Taylor Hall (1), Jake DeBrusk (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 304,
                eventId: 853,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '11:45',
                periodTimeRemaining: '08:15',
                dateTime: '2023-04-22T01:50:14Z',
                goals: {
                  away: 4,
                  home: 0,
                },
              },
              coordinates: {
                x: 80,
                y: -3,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478055,
                    fullName: 'Gustav Forsling',
                    link: '/api/v1/people/8478055',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480185,
                    fullName: 'Eetu Luostarinen',
                    link: '/api/v1/people/8480185',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470595,
                    fullName: 'Eric Staal',
                    link: '/api/v1/people/8470595',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA860',
                eventTypeId: 'GOAL',
                description: 'Gustav Forsling (1) Wrist Shot, assists: Eetu Luostarinen (1), Eric Staal (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'SHG',
                  name: 'Short Handed',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 329,
                eventId: 860,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '14:41',
                periodTimeRemaining: '05:19',
                dateTime: '2023-04-22T01:59:51Z',
                goals: {
                  away: 4,
                  home: 1,
                },
              },
              coordinates: {
                x: -78,
                y: -9,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477933,
                    fullName: 'Sam Reinhart',
                    link: '/api/v1/people/8477933',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477935,
                    fullName: 'Sam Bennett',
                    link: '/api/v1/people/8477935',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477493,
                    fullName: 'Aleksander Barkov',
                    link: '/api/v1/people/8477493',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA866',
                eventTypeId: 'GOAL',
                description: 'Sam Reinhart (1) Wrist Shot, assists: Sam Bennett (1), Aleksander Barkov (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 347,
                eventId: 866,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '15:59',
                periodTimeRemaining: '04:01',
                dateTime: '2023-04-22T02:04:58Z',
                goals: {
                  away: 4,
                  home: 2,
                },
              },
              coordinates: {
                x: -81,
                y: 7,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
          ],
          venue: {
            id: 5027,
            name: 'FLA Live Arena',
            link: '/api/v1/venues/5027',
          },
          content: {
            link: '/api/v1/game/2022030113/content',
          },
        },
        {
          gamePk: 2022030163,
          link: '/api/v1/game/2022030163/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-22T01:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                type: 'league',
              },
              score: 1,
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                type: 'league',
              },
              score: 5,
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475692,
                    fullName: 'Mats Zuccarello',
                    link: '/api/v1/people/8475692',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477451,
                    fullName: 'Ryan Hartman',
                    link: '/api/v1/people/8477451',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475906,
                    fullName: 'John Klingberg',
                    link: '/api/v1/people/8475906',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN40',
                eventTypeId: 'GOAL',
                description: 'Mats Zuccarello (1) Backhand, assists: Ryan Hartman (1), John Klingberg (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 71,
                eventId: 40,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '16:45',
                periodTimeRemaining: '03:15',
                dateTime: '2023-04-22T02:22:44Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -81,
                y: 1,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475149,
                    fullName: 'Marcus Johansson',
                    link: '/api/v1/people/8475149',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8481557,
                    fullName: 'Matt Boldy',
                    link: '/api/v1/people/8481557',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN129',
                eventTypeId: 'GOAL',
                description: 'Marcus Johansson (2) Snap Shot, assists: Matt Boldy (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 100,
                eventId: 129,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '02:14',
                periodTimeRemaining: '17:46',
                dateTime: '2023-04-22T02:50:31Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 76,
                y: -8,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476822,
                    fullName: 'Luke Glendening',
                    link: '/api/v1/people/8476822',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8481641,
                    fullName: 'Joel Kiviranta',
                    link: '/api/v1/people/8481641',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476889,
                    fullName: 'Radek Faksa',
                    link: '/api/v1/people/8476889',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN306',
                eventTypeId: 'GOAL',
                description: 'Luke Glendening (1) Deflected, assists: Joel Kiviranta (2), Radek Faksa (1)',
                secondaryType: 'Deflected',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 102,
                eventId: 306,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '02:25',
                periodTimeRemaining: '17:35',
                dateTime: '2023-04-22T02:51:28Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: -82,
                y: -5,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475220,
                    fullName: 'Marcus Foligno',
                    link: '/api/v1/people/8475220',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474679,
                    fullName: 'Gustav Nyquist',
                    link: '/api/v1/people/8474679',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8474716,
                    fullName: 'Jared Spurgeon',
                    link: '/api/v1/people/8474716',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN501',
                eventTypeId: 'GOAL',
                description: 'Marcus Foligno (1) Tip-In, assists: Gustav Nyquist (4), Jared Spurgeon (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 160,
                eventId: 501,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '11:24',
                periodTimeRemaining: '08:36',
                dateTime: '2023-04-22T03:12:53Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: 76,
                y: 1,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475692,
                    fullName: 'Mats Zuccarello',
                    link: '/api/v1/people/8475692',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477451,
                    fullName: 'Ryan Hartman',
                    link: '/api/v1/people/8477451',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475906,
                    fullName: 'John Klingberg',
                    link: '/api/v1/people/8475906',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN723',
                eventTypeId: 'GOAL',
                description: 'Mats Zuccarello (2) Snap Shot, assists: Ryan Hartman (2), John Klingberg (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 262,
                eventId: 723,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '14:07',
                periodTimeRemaining: '05:53',
                dateTime: '2023-04-22T04:14:50Z',
                goals: {
                  away: 1,
                  home: 4,
                },
              },
              coordinates: {
                x: -66,
                y: -15,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477451,
                    fullName: 'Ryan Hartman',
                    link: '/api/v1/people/8477451',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478136,
                    fullName: 'Jake Middleton',
                    link: '/api/v1/people/8478136',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN735',
                eventTypeId: 'GOAL',
                description: 'Ryan Hartman (2) Snap Shot, assists: Jake Middleton (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 290,
                eventId: 735,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '18:10',
                periodTimeRemaining: '01:50',
                dateTime: '2023-04-22T04:23:58Z',
                goals: {
                  away: 1,
                  home: 5,
                },
              },
              coordinates: {
                x: 67,
                y: 36,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
          ],
          venue: {
            id: 5098,
            name: 'Xcel Energy Center',
            link: '/api/v1/venues/5098',
          },
          content: {
            link: '/api/v1/game/2022030163/content',
          },
        },
        {
          gamePk: 2022030183,
          link: '/api/v1/game/2022030183/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-22T02:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                type: 'league',
              },
              score: 2,
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                type: 'league',
              },
              score: 3,
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8480113,
                    fullName: 'Alex Iafallo',
                    link: '/api/v1/people/8480113',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478911,
                    fullName: 'Matt Roy',
                    link: '/api/v1/people/8478911',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8471685,
                    fullName: 'Anze Kopitar',
                    link: '/api/v1/people/8471685',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK73',
                eventTypeId: 'GOAL',
                description: 'Alex Iafallo (2) Wrist Shot, assists: Matt Roy (2), Anze Kopitar (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 109,
                eventId: 73,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '19:27',
                periodTimeRemaining: '00:33',
                dateTime: '2023-04-22T02:57:32Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -80,
                y: 8,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478402,
                    fullName: 'Connor McDavid',
                    link: '/api/v1/people/8478402',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480803,
                    fullName: 'Evan Bouchard',
                    link: '/api/v1/people/8480803',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476454,
                    fullName: 'Ryan Nugent-Hopkins',
                    link: '/api/v1/people/8476454',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK243',
                eventTypeId: 'GOAL',
                description: 'Connor McDavid (1) Snap Shot, assists: Evan Bouchard (2), Ryan Nugent-Hopkins (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 165,
                eventId: 243,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '07:42',
                periodTimeRemaining: '12:18',
                dateTime: '2023-04-22T03:30:54Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: -67,
                y: -17,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478402,
                    fullName: 'Connor McDavid',
                    link: '/api/v1/people/8478402',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480803,
                    fullName: 'Evan Bouchard',
                    link: '/api/v1/people/8480803',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK246',
                eventTypeId: 'GOAL',
                description: 'Connor McDavid (2) Snap Shot, assists: Evan Bouchard (3), Leon Draisaitl (3)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 176,
                eventId: 246,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '09:22',
                periodTimeRemaining: '10:38',
                dateTime: '2023-04-22T03:34:10Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -65,
                y: -11,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477960,
                    fullName: 'Adrian Kempe',
                    link: '/api/v1/people/8477960',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478042,
                    fullName: 'Viktor Arvidsson',
                    link: '/api/v1/people/8478042',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8474563,
                    fullName: 'Drew Doughty',
                    link: '/api/v1/people/8474563',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK247',
                eventTypeId: 'GOAL',
                description: 'Adrian Kempe (3) Slap Shot, assists: Viktor Arvidsson (3), Drew Doughty (1)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 179,
                eventId: 247,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '09:40',
                periodTimeRemaining: '10:20',
                dateTime: '2023-04-22T03:35:48Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: 66,
                y: 11,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479675,
                    fullName: 'Trevor Moore',
                    link: '/api/v1/people/8479675',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480014,
                    fullName: 'Gabriel Vilardi',
                    link: '/api/v1/people/8480014',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8482124,
                    fullName: 'Quinton Byfield',
                    link: '/api/v1/people/8482124',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK866',
                eventTypeId: 'GOAL',
                description: 'Trevor Moore (1) Snap Shot, assists: Gabriel Vilardi (1), Quinton Byfield (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 394,
                eventId: 866,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '03:24',
                periodTimeRemaining: '16:36',
                dateTime: '2023-04-22T05:18:07Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: 79,
                y: -4,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
          ],
          venue: {
            name: 'Crypto.com Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030183/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-22',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030173,
          link: '/api/v1/game/2022030173/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-22T20:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                type: 'league',
              },
              score: 5,
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                type: 'league',
              },
              score: 4,
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8476905,
                    fullName: 'Chandler Stephenson',
                    link: '/api/v1/people/8476905',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475913,
                    fullName: 'Mark Stone',
                    link: '/api/v1/people/8475913',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477447,
                    fullName: 'Shea Theodore',
                    link: '/api/v1/people/8477447',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG154',
                eventTypeId: 'GOAL',
                description: 'Chandler Stephenson (2) Wrist Shot, assists: Mark Stone (2), Shea Theodore (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 31,
                eventId: 154,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '02:52',
                periodTimeRemaining: '17:08',
                dateTime: '2023-04-22T20:17:12Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 57,
                y: -20,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478403,
                    fullName: 'Jack Eichel',
                    link: '/api/v1/people/8478403',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476905,
                    fullName: 'Chandler Stephenson',
                    link: '/api/v1/people/8476905',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8474565,
                    fullName: 'Alex Pietrangelo',
                    link: '/api/v1/people/8474565',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG159',
                eventTypeId: 'GOAL',
                description: 'Jack Eichel (2) Slap Shot, assists: Chandler Stephenson (2), Alex Pietrangelo (3)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 50,
                eventId: 159,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '06:18',
                periodTimeRemaining: '13:42',
                dateTime: '2023-04-22T20:24:41Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: 72,
                y: 22,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478398,
                    fullName: 'Kyle Connor',
                    link: '/api/v1/people/8478398',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476331,
                    fullName: 'Dylan DeMelo',
                    link: '/api/v1/people/8476331',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475455,
                    fullName: 'Brenden Dillon',
                    link: '/api/v1/people/8475455',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG166',
                eventTypeId: 'GOAL',
                description: 'Kyle Connor (2) Tip-In, assists: Dylan DeMelo (2), Brenden Dillon (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 68,
                eventId: 166,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '09:07',
                periodTimeRemaining: '10:53',
                dateTime: '2023-04-22T20:30:33Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -74,
                y: -1,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478403,
                    fullName: 'Jack Eichel',
                    link: '/api/v1/people/8478403',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8474565,
                    fullName: 'Alex Pietrangelo',
                    link: '/api/v1/people/8474565',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8475191,
                    fullName: 'Reilly Smith',
                    link: '/api/v1/people/8475191',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG260',
                eventTypeId: 'GOAL',
                description: 'Jack Eichel (3) Slap Shot, assists: Alex Pietrangelo (4), Reilly Smith (2)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 205,
                eventId: 260,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '10:46',
                periodTimeRemaining: '09:14',
                dateTime: '2023-04-22T21:30:26Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: -60,
                y: -23,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478434,
                    fullName: 'Keegan Kolesar',
                    link: '/api/v1/people/8478434',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478403,
                    fullName: 'Jack Eichel',
                    link: '/api/v1/people/8478403',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478020,
                    fullName: 'Michael Amadio',
                    link: '/api/v1/people/8478020',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG264',
                eventTypeId: 'GOAL',
                description: 'Keegan Kolesar (1) Backhand, assists: Jack Eichel (1), Michael Amadio (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 242,
                eventId: 264,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '17:45',
                periodTimeRemaining: '02:15',
                dateTime: '2023-04-22T21:43:23Z',
                goals: {
                  away: 4,
                  home: 1,
                },
              },
              coordinates: {
                x: -80,
                y: -2,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475799,
                    fullName: 'Nino Niederreiter',
                    link: '/api/v1/people/8475799',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479400,
                    fullName: 'Pierre-Luc Dubois',
                    link: '/api/v1/people/8479400',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480145,
                    fullName: 'Neal Pionk',
                    link: '/api/v1/people/8480145',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG469',
                eventTypeId: 'GOAL',
                description: 'Nino Niederreiter (1) Wrist Shot, assists: Pierre-Luc Dubois (2), Neal Pionk (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 269,
                eventId: 469,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '02:04',
                periodTimeRemaining: '17:56',
                dateTime: '2023-04-22T22:09:54Z',
                goals: {
                  away: 4,
                  home: 2,
                },
              },
              coordinates: {
                x: -62,
                y: 20,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476460,
                    fullName: 'Mark Scheifele',
                    link: '/api/v1/people/8476460',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480145,
                    fullName: 'Neal Pionk',
                    link: '/api/v1/people/8480145',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8478398,
                    fullName: 'Kyle Connor',
                    link: '/api/v1/people/8478398',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG492',
                eventTypeId: 'GOAL',
                description: 'Mark Scheifele (1) Wrist Shot, assists: Neal Pionk (4), Kyle Connor (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 338,
                eventId: 492,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '14:08',
                periodTimeRemaining: '05:52',
                dateTime: '2023-04-22T22:32:47Z',
                goals: {
                  away: 4,
                  home: 3,
                },
              },
              coordinates: {
                x: -58,
                y: -24,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476392,
                    fullName: 'Adam Lowry',
                    link: '/api/v1/people/8476392',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8476480,
                    fullName: 'Vladislav Namestnikov',
                    link: '/api/v1/people/8476480',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480145,
                    fullName: 'Neal Pionk',
                    link: '/api/v1/people/8480145',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG500',
                eventTypeId: 'GOAL',
                description: 'Adam Lowry (4) Wrist Shot, assists: Vladislav Namestnikov (2), Neal Pionk (5)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 358,
                eventId: 500,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:38',
                periodTimeRemaining: '00:22',
                dateTime: '2023-04-22T22:40:41Z',
                goals: {
                  away: 4,
                  home: 4,
                },
              },
              coordinates: {
                x: -82,
                y: 0,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478020,
                    fullName: 'Michael Amadio',
                    link: '/api/v1/people/8478020',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477964,
                    fullName: 'Ivan Barbashev',
                    link: '/api/v1/people/8477964',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG1355',
                eventTypeId: 'GOAL',
                description: 'Michael Amadio (1) Snap Shot, assists: Ivan Barbashev (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 495,
                eventId: 1355,
                period: 5,
                periodType: 'OVERTIME',
                ordinalNum: '2OT',
                periodTime: '03:40',
                periodTimeRemaining: '16:20',
                dateTime: '2023-04-22T23:51:49Z',
                goals: {
                  away: 5,
                  home: 4,
                },
              },
              coordinates: {
                x: 60,
                y: -1,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
          ],
          venue: {
            id: 5058,
            name: 'Canada Life Centre',
            link: '/api/v1/venues/5058',
          },
          content: {
            link: '/api/v1/game/2022030173/content',
          },
        },
        {
          gamePk: 2022030123,
          link: '/api/v1/game/2022030123/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-22T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                type: 'league',
              },
              score: 4,
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                type: 'league',
              },
              score: 3,
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478569,
                    fullName: 'Noel Acciari',
                    link: '/api/v1/people/8478569',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8482720,
                    fullName: 'Matthew Knies',
                    link: '/api/v1/people/8482720',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475158,
                    fullName: "Ryan O'Reilly",
                    link: '/api/v1/people/8475158',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL103',
                eventTypeId: 'GOAL',
                description: "Noel Acciari (1) Wrist Shot, assists: Matthew Knies (1), Ryan O'Reilly (2)",
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 23,
                eventId: 103,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '03:24',
                periodTimeRemaining: '16:36',
                dateTime: '2023-04-22T23:22:12Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: -60,
                y: 0,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478519,
                    fullName: 'Anthony Cirelli',
                    link: '/api/v1/people/8478519',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8473986,
                    fullName: 'Alex Killorn',
                    link: '/api/v1/people/8473986',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479542,
                    fullName: 'Brandon Hagel',
                    link: '/api/v1/people/8479542',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL106',
                eventTypeId: 'GOAL',
                description: 'Anthony Cirelli (2) Wrist Shot, assists: Alex Killorn (2), Brandon Hagel (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 35,
                eventId: 106,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '04:50',
                periodTimeRemaining: '15:10',
                dateTime: '2023-04-22T23:25:16Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: 74,
                y: 9,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479318,
                    fullName: 'Auston Matthews',
                    link: '/api/v1/people/8479318',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8475714,
                    fullName: 'Calle Jarnkrok',
                    link: '/api/v1/people/8475714',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL118',
                eventTypeId: 'GOAL',
                description: 'Auston Matthews (1) Tip-In, assists: Mitchell Marner (5), Calle Jarnkrok (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 69,
                eventId: 118,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '11:10',
                periodTimeRemaining: '08:50',
                dateTime: '2023-04-22T23:35:53Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -75,
                y: 1,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479542,
                    fullName: 'Brandon Hagel',
                    link: '/api/v1/people/8479542',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470621,
                    fullName: 'Corey Perry',
                    link: '/api/v1/people/8470621',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479525,
                    fullName: 'Ross Colton',
                    link: '/api/v1/people/8479525',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL136',
                eventTypeId: 'GOAL',
                description: 'Brandon Hagel (1) Wrist Shot, assists: Corey Perry (3), Ross Colton (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 112,
                eventId: 136,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '19:28',
                periodTimeRemaining: '00:32',
                dateTime: '2023-04-22T23:52:33Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: 82,
                y: -21,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478178,
                    fullName: 'Darren Raddysh',
                    link: '/api/v1/people/8478178',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476453,
                    fullName: 'Nikita Kucherov',
                    link: '/api/v1/people/8476453',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8474564,
                    fullName: 'Steven Stamkos',
                    link: '/api/v1/people/8474564',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL520',
                eventTypeId: 'GOAL',
                description: 'Darren Raddysh (1) Wrist Shot, assists: Nikita Kucherov (3), Steven Stamkos (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 218,
                eventId: 520,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '13:34',
                periodTimeRemaining: '06:26',
                dateTime: '2023-04-23T00:40:55Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: -66,
                y: -14,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475158,
                    fullName: "Ryan O'Reilly",
                    link: '/api/v1/people/8475158',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477939,
                    fullName: 'William Nylander',
                    link: '/api/v1/people/8477939',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 6,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL861',
                eventTypeId: 'GOAL',
                description: "Ryan O'Reilly (2) Poke, assists: William Nylander (2), Mitchell Marner (6)",
                secondaryType: 'Poke',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 352,
                eventId: 861,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:00',
                periodTimeRemaining: '01:00',
                dateTime: '2023-04-23T01:50:40Z',
                goals: {
                  away: 3,
                  home: 3,
                },
              },
              coordinates: {
                x: -82,
                y: 0,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476853,
                    fullName: 'Morgan Rielly',
                    link: '/api/v1/people/8476853',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475158,
                    fullName: "Ryan O'Reilly",
                    link: '/api/v1/people/8475158',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL894',
                eventTypeId: 'GOAL',
                description: "Morgan Rielly (1) Wrist Shot, assists: Ryan O'Reilly (3)",
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 450,
                eventId: 894,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '19:15',
                periodTimeRemaining: '00:45',
                dateTime: '2023-04-23T02:38:39Z',
                goals: {
                  away: 4,
                  home: 3,
                },
              },
              coordinates: {
                x: 47,
                y: 36,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
          ],
          venue: {
            id: 5017,
            name: 'Amalie Arena',
            link: '/api/v1/venues/5017',
          },
          content: {
            link: '/api/v1/game/2022030123/content',
          },
        },
        {
          gamePk: 2022030143,
          link: '/api/v1/game/2022030143/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-23T00:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                type: 'league',
              },
              score: 2,
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                type: 'league',
              },
              score: 1,
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475184,
                    fullName: 'Chris Kreider',
                    link: '/api/v1/people/8475184',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8476459,
                    fullName: 'Mika Zibanejad',
                    link: '/api/v1/people/8476459',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8474141,
                    fullName: 'Patrick Kane',
                    link: '/api/v1/people/8474141',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8481033,
                    fullName: 'Akira Schmid',
                    link: '/api/v1/people/8481033',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYR198',
                eventTypeId: 'GOAL',
                description: 'Chris Kreider (5) Snap Shot, assists: Mika Zibanejad (2), Patrick Kane (4)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 145,
                eventId: 198,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '03:39',
                periodTimeRemaining: '16:21',
                dateTime: '2023-04-23T01:17:04Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 63,
                y: 10,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8481559,
                    fullName: 'Jack Hughes',
                    link: '/api/v1/people/8481559',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476462,
                    fullName: 'Dougie Hamilton',
                    link: '/api/v1/people/8476462',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479407,
                    fullName: 'Jesper Bratt',
                    link: '/api/v1/people/8479407',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYR311',
                eventTypeId: 'GOAL',
                description: 'Jack Hughes (2) Snap Shot, assists: Dougie Hamilton (1), Jesper Bratt (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 190,
                eventId: 311,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '10:37',
                periodTimeRemaining: '09:23',
                dateTime: '2023-04-23T01:36:09Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: -64,
                y: -22,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476462,
                    fullName: 'Dougie Hamilton',
                    link: '/api/v1/people/8476462',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479407,
                    fullName: 'Jesper Bratt',
                    link: '/api/v1/people/8479407',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480002,
                    fullName: 'Nico Hischier',
                    link: '/api/v1/people/8480002',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYR932',
                eventTypeId: 'GOAL',
                description: 'Dougie Hamilton (1) Snap Shot, assists: Jesper Bratt (2), Nico Hischier (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 378,
                eventId: 932,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '11:36',
                periodTimeRemaining: '08:24',
                dateTime: '2023-04-23T03:15:50Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -76,
                y: 19,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
          ],
          venue: {
            id: 5054,
            name: 'Madison Square Garden',
            link: '/api/v1/venues/5054',
          },
          content: {
            link: '/api/v1/game/2022030143/content',
          },
        },
        {
          gamePk: 2022030153,
          link: '/api/v1/game/2022030153/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-23T02:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                type: 'league',
              },
              score: 6,
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                type: 'league',
              },
              score: 4,
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475768,
                    fullName: 'Jaden Schwartz',
                    link: '/api/v1/people/8475768',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474602,
                    fullName: 'Justin Schultz',
                    link: '/api/v1/people/8474602',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477505,
                    fullName: 'Alex Wennberg',
                    link: '/api/v1/people/8477505',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA158',
                eventTypeId: 'GOAL',
                description: 'Jaden Schwartz (1) Tip-In, assists: Justin Schultz (2), Alex Wennberg (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 33,
                eventId: 158,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '06:08',
                periodTimeRemaining: '13:52',
                dateTime: '2023-04-23T02:19:11Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 78,
                y: 0,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477456,
                    fullName: 'J.T. Compher',
                    link: '/api/v1/people/8477456',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480069,
                    fullName: 'Cale Makar',
                    link: '/api/v1/people/8480069',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477476,
                    fullName: 'Artturi Lehkonen',
                    link: '/api/v1/people/8477476',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA35',
                eventTypeId: 'GOAL',
                description: 'J.T. Compher (1) Backhand, assists: Cale Makar (2), Artturi Lehkonen (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'SHG',
                  name: 'Short Handed',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 100,
                eventId: 35,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '16:07',
                periodTimeRemaining: '03:53',
                dateTime: '2023-04-23T02:42:13Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: -79,
                y: -1,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477492,
                    fullName: 'Nathan MacKinnon',
                    link: '/api/v1/people/8477492',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478420,
                    fullName: 'Mikko Rantanen',
                    link: '/api/v1/people/8478420',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478038,
                    fullName: 'Devon Toews',
                    link: '/api/v1/people/8478038',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA39',
                eventTypeId: 'GOAL',
                description: 'Nathan MacKinnon (1) Wrist Shot, assists: Mikko Rantanen (1), Devon Toews (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 118,
                eventId: 39,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '19:15',
                periodTimeRemaining: '00:45',
                dateTime: '2023-04-23T02:48:52Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -74,
                y: 4,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480069,
                    fullName: 'Cale Makar',
                    link: '/api/v1/people/8480069',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8481618,
                    fullName: 'Alex Newhook',
                    link: '/api/v1/people/8481618',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA192',
                eventTypeId: 'GOAL',
                description: 'Cale Makar (1) Slap Shot, assists: Alex Newhook (1)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 150,
                eventId: 192,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '04:33',
                periodTimeRemaining: '15:27',
                dateTime: '2023-04-23T03:15:48Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 52,
                y: -22,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476467,
                    fullName: 'Jamie Oleksiak',
                    link: '/api/v1/people/8476467',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476826,
                    fullName: 'Yanni Gourde',
                    link: '/api/v1/people/8476826',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477416,
                    fullName: 'Oliver Bjorkstrand',
                    link: '/api/v1/people/8477416',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA512',
                eventTypeId: 'GOAL',
                description: 'Jamie Oleksiak (1) Backhand, assists: Yanni Gourde (3), Oliver Bjorkstrand (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 204,
                eventId: 512,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '12:51',
                periodTimeRemaining: '07:09',
                dateTime: '2023-04-23T03:34:46Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -71,
                y: -3,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8482665,
                    fullName: 'Matty Beniers',
                    link: '/api/v1/people/8482665',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477955,
                    fullName: 'Jared McCann',
                    link: '/api/v1/people/8477955',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474586,
                    fullName: 'Jordan Eberle',
                    link: '/api/v1/people/8474586',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA513',
                eventTypeId: 'GOAL',
                description: 'Matty Beniers (1) Snap Shot, assists: Jared McCann (1), Jordan Eberle (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 207,
                eventId: 513,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '13:10',
                periodTimeRemaining: '06:50',
                dateTime: '2023-04-23T03:35:54Z',
                goals: {
                  away: 3,
                  home: 3,
                },
              },
              coordinates: {
                x: -81,
                y: 2,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478420,
                    fullName: 'Mikko Rantanen',
                    link: '/api/v1/people/8478420',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478038,
                    fullName: 'Devon Toews',
                    link: '/api/v1/people/8478038',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA523',
                eventTypeId: 'GOAL',
                description: 'Mikko Rantanen (2) Snap Shot, assists: Devon Toews (3)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 245,
                eventId: 523,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '03:01',
                periodTimeRemaining: '16:59',
                dateTime: '2023-04-23T04:09:20Z',
                goals: {
                  away: 4,
                  home: 3,
                },
              },
              coordinates: {
                x: -71,
                y: 0,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477492,
                    fullName: 'Nathan MacKinnon',
                    link: '/api/v1/people/8477492',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8481524,
                    fullName: 'Bowen Byram',
                    link: '/api/v1/people/8481524',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478542,
                    fullName: 'Evan Rodrigues',
                    link: '/api/v1/people/8478542',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA526',
                eventTypeId: 'GOAL',
                description: 'Nathan MacKinnon (2) Wrist Shot, assists: Bowen Byram (3), Evan Rodrigues (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 256,
                eventId: 526,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '04:29',
                periodTimeRemaining: '15:31',
                dateTime: '2023-04-23T04:11:36Z',
                goals: {
                  away: 5,
                  home: 3,
                },
              },
              coordinates: {
                x: -72,
                y: 21,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478420,
                    fullName: 'Mikko Rantanen',
                    link: '/api/v1/people/8478420',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477476,
                    fullName: 'Artturi Lehkonen',
                    link: '/api/v1/people/8477476',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA549',
                eventTypeId: 'GOAL',
                description: 'Mikko Rantanen (3) Wrist Shot, assists: Artturi Lehkonen (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 323,
                eventId: 549,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '17:46',
                periodTimeRemaining: '02:14',
                dateTime: '2023-04-23T04:38:24Z',
                goals: {
                  away: 6,
                  home: 3,
                },
              },
              coordinates: {
                x: -37,
                y: 1,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475768,
                    fullName: 'Jaden Schwartz',
                    link: '/api/v1/people/8475768',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8474602,
                    fullName: 'Justin Schultz',
                    link: '/api/v1/people/8474602',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA903',
                eventTypeId: 'GOAL',
                description: 'Jaden Schwartz (2) Tip-In, assists: Justin Schultz (3)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 336,
                eventId: 903,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:20',
                periodTimeRemaining: '00:40',
                dateTime: '2023-04-23T04:42:12Z',
                goals: {
                  away: 6,
                  home: 4,
                },
              },
              coordinates: {
                x: 81,
                y: 1,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
          ],
          venue: {
            name: 'Climate Pledge Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030153/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-23',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030134,
          link: '/api/v1/game/2022030134/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-23T17:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 1,
                type: 'league',
              },
              score: 5,
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 3,
                type: 'league',
              },
              score: 2,
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8482093,
                    fullName: 'Seth Jarvis',
                    link: '/api/v1/people/8482093',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476474,
                    fullName: 'Stefan Noesen',
                    link: '/api/v1/people/8476474',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470613,
                    fullName: 'Brent Burns',
                    link: '/api/v1/people/8470613',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI159',
                eventTypeId: 'GOAL',
                description: 'Seth Jarvis (1) Snap Shot, assists: Stefan Noesen (1), Brent Burns (5)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 39,
                eventId: 159,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '04:05',
                periodTimeRemaining: '15:55',
                dateTime: '2023-04-23T17:20:57Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: -86,
                y: -7,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480039,
                    fullName: 'Martin Necas',
                    link: '/api/v1/people/8480039',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476474,
                    fullName: 'Stefan Noesen',
                    link: '/api/v1/people/8476474',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478427,
                    fullName: 'Sebastian Aho',
                    link: '/api/v1/people/8478427',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI179',
                eventTypeId: 'GOAL',
                description: 'Martin Necas (1) Snap Shot, assists: Stefan Noesen (2), Sebastian Aho (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 130,
                eventId: 179,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '01:15',
                periodTimeRemaining: '18:45',
                dateTime: '2023-04-23T18:12:53Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: 83,
                y: -4,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478427,
                    fullName: 'Sebastian Aho',
                    link: '/api/v1/people/8478427',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476907,
                    fullName: 'Mackenzie MacEachern',
                    link: '/api/v1/people/8476907',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI197',
                eventTypeId: 'GOAL',
                description: 'Sebastian Aho (2) Wrist Shot, assists: Mackenzie MacEachern (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 198,
                eventId: 197,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '13:30',
                periodTimeRemaining: '06:30',
                dateTime: '2023-04-23T18:36:31Z',
                goals: {
                  away: 3,
                  home: 0,
                },
              },
              coordinates: {
                x: 76,
                y: 4,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8482093,
                    fullName: 'Seth Jarvis',
                    link: '/api/v1/people/8482093',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478427,
                    fullName: 'Sebastian Aho',
                    link: '/api/v1/people/8478427',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477488,
                    fullName: 'Brett Pesce',
                    link: '/api/v1/people/8477488',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI514',
                eventTypeId: 'GOAL',
                description: 'Seth Jarvis (2) Wrist Shot, assists: Sebastian Aho (3), Brett Pesce (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 244,
                eventId: 514,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '01:20',
                periodTimeRemaining: '18:40',
                dateTime: '2023-04-23T19:09:07Z',
                goals: {
                  away: 4,
                  home: 0,
                },
              },
              coordinates: {
                x: -78,
                y: 1,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476917,
                    fullName: 'Adam Pelech',
                    link: '/api/v1/people/8476917',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475754,
                    fullName: 'Brock Nelson',
                    link: '/api/v1/people/8475754',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI517',
                eventTypeId: 'GOAL',
                description: 'Adam Pelech (1) Wrist Shot, assists: Brock Nelson (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 256,
                eventId: 517,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '03:14',
                periodTimeRemaining: '16:46',
                dateTime: '2023-04-23T19:12:45Z',
                goals: {
                  away: 4,
                  home: 1,
                },
              },
              coordinates: {
                x: 72,
                y: 2,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476907,
                    fullName: 'Mackenzie MacEachern',
                    link: '/api/v1/people/8476907',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476869,
                    fullName: 'Brady Skjei',
                    link: '/api/v1/people/8476869',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI537',
                eventTypeId: 'GOAL',
                description: 'Mackenzie MacEachern (1) Wrist Shot, assists: Brady Skjei (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 319,
                eventId: 537,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '14:01',
                periodTimeRemaining: '05:59',
                dateTime: '2023-04-23T19:32:58Z',
                goals: {
                  away: 5,
                  home: 1,
                },
              },
              coordinates: {
                x: -61,
                y: -1,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477500,
                    fullName: 'Bo Horvat',
                    link: '/api/v1/people/8477500',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476429,
                    fullName: 'Scott Mayfield',
                    link: '/api/v1/people/8476429',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYI544',
                eventTypeId: 'GOAL',
                description: 'Bo Horvat (1) Wrist Shot, assists: Scott Mayfield (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'SHG',
                  name: 'Short Handed',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 340,
                eventId: 544,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '17:57',
                periodTimeRemaining: '02:03',
                dateTime: '2023-04-23T19:41:44Z',
                goals: {
                  away: 5,
                  home: 2,
                },
              },
              coordinates: {
                x: 71,
                y: 1,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
          ],
          venue: {
            name: 'UBS Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030134/content',
          },
        },
        {
          gamePk: 2022030114,
          link: '/api/v1/game/2022030114/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-23T19:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 1,
                type: 'league',
              },
              score: 6,
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 3,
                type: 'league',
              },
              score: 2,
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8473419,
                    fullName: 'Brad Marchand',
                    link: '/api/v1/people/8473419',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478401,
                    fullName: 'Pavel Zacha',
                    link: '/api/v1/people/8478401',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477479,
                    fullName: 'Tyler Bertuzzi',
                    link: '/api/v1/people/8477479',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA176',
                eventTypeId: 'GOAL',
                description: 'Brad Marchand (3) Wrist Shot, assists: Pavel Zacha (3), Tyler Bertuzzi (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 67,
                eventId: 176,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '09:45',
                periodTimeRemaining: '10:15',
                dateTime: '2023-04-23T20:09:13Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 85,
                y: 0,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478498,
                    fullName: 'Jake DeBrusk',
                    link: '/api/v1/people/8478498',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475200,
                    fullName: 'Dmitry Orlov',
                    link: '/api/v1/people/8475200',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8475791,
                    fullName: 'Taylor Hall',
                    link: '/api/v1/people/8475791',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA196',
                eventTypeId: 'GOAL',
                description: 'Jake DeBrusk (2) Tip-In, assists: Dmitry Orlov (5), Taylor Hall (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 122,
                eventId: 196,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '01:52',
                periodTimeRemaining: '18:08',
                dateTime: '2023-04-23T20:51:23Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: -85,
                y: -5,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479314,
                    fullName: 'Matthew Tkachuk',
                    link: '/api/v1/people/8479314',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477409,
                    fullName: 'Carter Verhaeghe',
                    link: '/api/v1/people/8477409',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477986,
                    fullName: 'Brandon Montour',
                    link: '/api/v1/people/8477986',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA472',
                eventTypeId: 'GOAL',
                description: 'Matthew Tkachuk (2) Between Legs, assists: Carter Verhaeghe (1), Brandon Montour (1)',
                secondaryType: 'Between Legs',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 213,
                eventId: 472,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '16:00',
                periodTimeRemaining: '04:00',
                dateTime: '2023-04-23T21:21:30Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: 88,
                y: -4,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477479,
                    fullName: 'Tyler Bertuzzi',
                    link: '/api/v1/people/8477479',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478443,
                    fullName: 'Brandon Carlo',
                    link: '/api/v1/people/8478443',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473422,
                    fullName: 'Nick Foligno',
                    link: '/api/v1/people/8473422',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA483',
                eventTypeId: 'GOAL',
                description: 'Tyler Bertuzzi (2) Tip-In, assists: Brandon Carlo (1), Nick Foligno (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 249,
                eventId: 483,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '02:26',
                periodTimeRemaining: '17:34',
                dateTime: '2023-04-23T21:54:46Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 67,
                y: -10,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477935,
                    fullName: 'Sam Bennett',
                    link: '/api/v1/people/8477935',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477986,
                    fullName: 'Brandon Montour',
                    link: '/api/v1/people/8477986',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479314,
                    fullName: 'Matthew Tkachuk',
                    link: '/api/v1/people/8479314',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA493',
                eventTypeId: 'GOAL',
                description: 'Sam Bennett (2) Wrist Shot, assists: Brandon Montour (2), Matthew Tkachuk (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 273,
                eventId: 493,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '06:11',
                periodTimeRemaining: '13:49',
                dateTime: '2023-04-23T22:00:39Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -83,
                y: -3,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478498,
                    fullName: 'Jake DeBrusk',
                    link: '/api/v1/people/8478498',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478401,
                    fullName: 'Pavel Zacha',
                    link: '/api/v1/people/8478401',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8475791,
                    fullName: 'Taylor Hall',
                    link: '/api/v1/people/8475791',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA801',
                eventTypeId: 'GOAL',
                description: 'Jake DeBrusk (3) Wrist Shot, assists: Pavel Zacha (4), Taylor Hall (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 292,
                eventId: 801,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '08:05',
                periodTimeRemaining: '11:55',
                dateTime: '2023-04-23T22:07:08Z',
                goals: {
                  away: 4,
                  home: 2,
                },
              },
              coordinates: {
                x: 80,
                y: -4,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475791,
                    fullName: 'Taylor Hall',
                    link: '/api/v1/people/8475791',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477931,
                    fullName: 'Tomas Nosek',
                    link: '/api/v1/people/8477931',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA818',
                eventTypeId: 'GOAL',
                description: 'Taylor Hall (3) Wrist Shot, assists: Tomas Nosek (2), Linus Ullmark (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 338,
                eventId: 818,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:24',
                periodTimeRemaining: '03:36',
                dateTime: '2023-04-23T22:25:48Z',
                goals: {
                  away: 5,
                  home: 2,
                },
              },
              coordinates: {
                x: 84,
                y: 5,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475791,
                    fullName: 'Taylor Hall',
                    link: '/api/v1/people/8475791',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8480880,
                    fullName: 'Jakub Lauko',
                    link: '/api/v1/people/8480880',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477903,
                    fullName: 'Garnet Hathaway',
                    link: '/api/v1/people/8477903',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'FLA828',
                eventTypeId: 'GOAL',
                description: 'Taylor Hall (4) Wrist Shot, assists: Jakub Lauko (1), Garnet Hathaway (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 361,
                eventId: 828,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:31',
                periodTimeRemaining: '00:29',
                dateTime: '2023-04-23T22:37:15Z',
                goals: {
                  away: 6,
                  home: 2,
                },
              },
              coordinates: {
                x: 57,
                y: 12,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
          ],
          venue: {
            id: 5027,
            name: 'FLA Live Arena',
            link: '/api/v1/venues/5027',
          },
          content: {
            link: '/api/v1/game/2022030114/content',
          },
        },
        {
          gamePk: 2022030164,
          link: '/api/v1/game/2022030164/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-23T22:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 2,
                type: 'league',
              },
              score: 3,
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 2,
                type: 'league',
              },
              score: 2,
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475794,
                    fullName: 'Tyler Seguin',
                    link: '/api/v1/people/8475794',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480027,
                    fullName: 'Jason Robertson',
                    link: '/api/v1/people/8480027',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN467',
                eventTypeId: 'GOAL',
                description: 'Tyler Seguin (2) Deflected, assists: Roope Hintz (2), Jason Robertson (3)',
                secondaryType: 'Deflected',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 197,
                eventId: 467,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '15:42',
                periodTimeRemaining: '04:18',
                dateTime: '2023-04-24T00:01:47Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: -84,
                y: 3,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8474149,
                    fullName: 'Evgenii Dadonov',
                    link: '/api/v1/people/8474149',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476902,
                    fullName: 'Esa Lindell',
                    link: '/api/v1/people/8476902',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN566',
                eventTypeId: 'GOAL',
                description: 'Evgenii Dadonov (3) Wrist Shot, assists: Roope Hintz (3), Esa Lindell (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 237,
                eventId: 566,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '03:05',
                periodTimeRemaining: '16:55',
                dateTime: '2023-04-24T00:31:56Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: 58,
                y: -3,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475906,
                    fullName: 'John Klingberg',
                    link: '/api/v1/people/8475906',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475692,
                    fullName: 'Mats Zuccarello',
                    link: '/api/v1/people/8475692',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477451,
                    fullName: 'Ryan Hartman',
                    link: '/api/v1/people/8477451',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN495',
                eventTypeId: 'GOAL',
                description: 'John Klingberg (1) Snap Shot, assists: Mats Zuccarello (3), Ryan Hartman (3)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 251,
                eventId: 495,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '05:58',
                periodTimeRemaining: '14:02',
                dateTime: '2023-04-24T00:36:27Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -52,
                y: 11,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475794,
                    fullName: 'Tyler Seguin',
                    link: '/api/v1/people/8475794',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8473994,
                    fullName: 'Jamie Benn',
                    link: '/api/v1/people/8473994',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN581',
                eventTypeId: 'GOAL',
                description: 'Tyler Seguin (3) Wrist Shot, assists: Jamie Benn (3), Roope Hintz (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 290,
                eventId: 581,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:29',
                periodTimeRemaining: '03:31',
                dateTime: '2023-04-24T00:58:26Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 65,
                y: -4,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477919,
                    fullName: 'Frederick Gaudreau',
                    link: '/api/v1/people/8477919',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8481557,
                    fullName: 'Matt Boldy',
                    link: '/api/v1/people/8481557',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475906,
                    fullName: 'John Klingberg',
                    link: '/api/v1/people/8475906',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479979,
                    fullName: 'Jake Oettinger',
                    link: '/api/v1/people/8479979',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'MIN877',
                eventTypeId: 'GOAL',
                description: 'Frederick Gaudreau (2) Wrist Shot, assists: Matt Boldy (3), John Klingberg (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 313,
                eventId: 877,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '18:40',
                periodTimeRemaining: '01:20',
                dateTime: '2023-04-24T01:05:36Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -85,
                y: -16,
              },
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
          ],
          venue: {
            id: 5098,
            name: 'Xcel Energy Center',
            link: '/api/v1/venues/5098',
          },
          content: {
            link: '/api/v1/game/2022030164/content',
          },
        },
        {
          gamePk: 2022030184,
          link: '/api/v1/game/2022030184/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-24T01:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 2,
                type: 'league',
              },
              score: 5,
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 2,
                type: 'league',
              },
              score: 4,
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8480014,
                    fullName: 'Gabriel Vilardi',
                    link: '/api/v1/people/8480014',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477942,
                    fullName: 'Kevin Fiala',
                    link: '/api/v1/people/8477942',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480113,
                    fullName: 'Alex Iafallo',
                    link: '/api/v1/people/8480113',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK17',
                eventTypeId: 'GOAL',
                description: 'Gabriel Vilardi (2) Backhand, assists: Kevin Fiala (1), Alex Iafallo (1)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 55,
                eventId: 17,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '09:25',
                periodTimeRemaining: '10:35',
                dateTime: '2023-04-24T01:36:20Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -81,
                y: 2,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478042,
                    fullName: 'Viktor Arvidsson',
                    link: '/api/v1/people/8478042',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479675,
                    fullName: 'Trevor Moore',
                    link: '/api/v1/people/8479675',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476479,
                    fullName: 'Phillip Danault',
                    link: '/api/v1/people/8476479',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK29',
                eventTypeId: 'GOAL',
                description: 'Viktor Arvidsson (1) Snap Shot, assists: Trevor Moore (2), Phillip Danault (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 90,
                eventId: 29,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '16:48',
                periodTimeRemaining: '03:12',
                dateTime: '2023-04-24T01:51:27Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: -75,
                y: -16,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8471685,
                    fullName: 'Anze Kopitar',
                    link: '/api/v1/people/8471685',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477942,
                    fullName: 'Kevin Fiala',
                    link: '/api/v1/people/8477942',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477960,
                    fullName: 'Adrian Kempe',
                    link: '/api/v1/people/8477960',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK32',
                eventTypeId: 'GOAL',
                description: 'Anze Kopitar (2) Backhand, assists: Kevin Fiala (2), Adrian Kempe (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 96,
                eventId: 32,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '18:11',
                periodTimeRemaining: '01:49',
                dateTime: '2023-04-24T01:54:55Z',
                goals: {
                  away: 0,
                  home: 3,
                },
              },
              coordinates: {
                x: -84,
                y: 4,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480803,
                    fullName: 'Evan Bouchard',
                    link: '/api/v1/people/8480803',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8478402,
                    fullName: 'Connor McDavid',
                    link: '/api/v1/people/8478402',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK44',
                eventTypeId: 'GOAL',
                description: 'Evan Bouchard (2) Slap Shot, assists: Leon Draisaitl (4), Connor McDavid (2)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 131,
                eventId: 44,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '04:55',
                periodTimeRemaining: '15:05',
                dateTime: '2023-04-24T02:23:52Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: -52,
                y: 4,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8478402,
                    fullName: 'Connor McDavid',
                    link: '/api/v1/people/8478402',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475786,
                    fullName: 'Zach Hyman',
                    link: '/api/v1/people/8475786',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK409',
                eventTypeId: 'GOAL',
                description: 'Leon Draisaitl (4) Wrist Shot, assists: Connor McDavid (3), Zach Hyman (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 164,
                eventId: 409,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '09:41',
                periodTimeRemaining: '10:19',
                dateTime: '2023-04-24T02:33:18Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: -79,
                y: -3,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8476454,
                    fullName: 'Ryan Nugent-Hopkins',
                    link: '/api/v1/people/8476454',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8480803,
                    fullName: 'Evan Bouchard',
                    link: '/api/v1/people/8480803',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK434',
                eventTypeId: 'GOAL',
                description: 'Leon Draisaitl (5) Wrist Shot, assists: Ryan Nugent-Hopkins (3), Evan Bouchard (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 216,
                eventId: 434,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '19:49',
                periodTimeRemaining: '00:11',
                dateTime: '2023-04-24T02:54:45Z',
                goals: {
                  away: 3,
                  home: 3,
                },
              },
              coordinates: {
                x: -69,
                y: -3,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478911,
                    fullName: 'Matt Roy',
                    link: '/api/v1/people/8478911',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478042,
                    fullName: 'Viktor Arvidsson',
                    link: '/api/v1/people/8478042',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8476479,
                    fullName: 'Phillip Danault',
                    link: '/api/v1/people/8476479',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475789,
                    fullName: 'Jack Campbell',
                    link: '/api/v1/people/8475789',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK444',
                eventTypeId: 'GOAL',
                description: 'Matt Roy (1) Backhand, assists: Viktor Arvidsson (4), Phillip Danault (3)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 246,
                eventId: 444,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '04:28',
                periodTimeRemaining: '15:32',
                dateTime: '2023-04-24T03:19:28Z',
                goals: {
                  away: 3,
                  home: 4,
                },
              },
              coordinates: {
                x: -79,
                y: -1,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475169,
                    fullName: 'Evander Kane',
                    link: '/api/v1/people/8475169',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478402,
                    fullName: 'Connor McDavid',
                    link: '/api/v1/people/8478402',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8475218,
                    fullName: 'Mattias Ekholm',
                    link: '/api/v1/people/8475218',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK716',
                eventTypeId: 'GOAL',
                description: 'Evander Kane (2) Wrist Shot, assists: Connor McDavid (4), Mattias Ekholm (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 308,
                eventId: 716,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:58',
                periodTimeRemaining: '03:02',
                dateTime: '2023-04-24T03:45:27Z',
                goals: {
                  away: 4,
                  home: 4,
                },
              },
              coordinates: {
                x: 66,
                y: 13,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475786,
                    fullName: 'Zach Hyman',
                    link: '/api/v1/people/8475786',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480803,
                    fullName: 'Evan Bouchard',
                    link: '/api/v1/people/8480803',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'LAK736',
                eventTypeId: 'GOAL',
                description: 'Zach Hyman (1) Snap Shot, assists: Evan Bouchard (5)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 389,
                eventId: 736,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '10:39',
                periodTimeRemaining: '09:21',
                dateTime: '2023-04-24T04:24:58Z',
                goals: {
                  away: 5,
                  home: 4,
                },
              },
              coordinates: {
                x: -65,
                y: -23,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
          ],
          venue: {
            name: 'Crypto.com Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030184/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-24',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030144,
          link: '/api/v1/game/2022030144/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-24T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 2,
                type: 'league',
              },
              score: 3,
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 2,
                type: 'league',
              },
              score: 1,
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8481559,
                    fullName: 'Jack Hughes',
                    link: '/api/v1/people/8481559',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478399,
                    fullName: 'Jonas Siegenthaler',
                    link: '/api/v1/people/8478399',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYR155',
                eventTypeId: 'GOAL',
                description: 'Jack Hughes (3) Wrist Shot, assists: Jonas Siegenthaler (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 17,
                eventId: 155,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '02:50',
                periodTimeRemaining: '17:10',
                dateTime: '2023-04-24T23:14:56Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 82,
                y: 3,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476389,
                    fullName: 'Vincent Trocheck',
                    link: '/api/v1/people/8476389',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475184,
                    fullName: 'Chris Kreider',
                    link: '/api/v1/people/8475184',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474141,
                    fullName: 'Patrick Kane',
                    link: '/api/v1/people/8474141',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8481033,
                    fullName: 'Akira Schmid',
                    link: '/api/v1/people/8481033',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYR435',
                eventTypeId: 'GOAL',
                description: 'Vincent Trocheck (1) Wrist Shot, assists: Chris Kreider (1), Patrick Kane (5)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 219,
                eventId: 435,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '01:42',
                periodTimeRemaining: '18:18',
                dateTime: '2023-04-25T01:04:19Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: -81,
                y: -5,
              },
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478399,
                    fullName: 'Jonas Siegenthaler',
                    link: '/api/v1/people/8478399',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480002,
                    fullName: 'Nico Hischier',
                    link: '/api/v1/people/8480002',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476462,
                    fullName: 'Dougie Hamilton',
                    link: '/api/v1/people/8476462',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYR448',
                eventTypeId: 'GOAL',
                description: 'Jonas Siegenthaler (1) Snap Shot, assists: Nico Hischier (2), Dougie Hamilton (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 247,
                eventId: 448,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '08:22',
                periodTimeRemaining: '11:38',
                dateTime: '2023-04-25T01:15:30Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: 69,
                y: 22,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476292,
                    fullName: 'Ondrej Palat',
                    link: '/api/v1/people/8476292',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479407,
                    fullName: 'Jesper Bratt',
                    link: '/api/v1/people/8479407',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475287,
                    fullName: 'Erik Haula',
                    link: '/api/v1/people/8475287',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NYR662',
                eventTypeId: 'GOAL',
                description: 'Ondrej Palat (1) Slap Shot, assists: Jesper Bratt (3), Erik Haula (1)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 293,
                eventId: 662,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:34',
                periodTimeRemaining: '00:26',
                dateTime: '2023-04-25T01:38:19Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 80,
                y: 16,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
          ],
          venue: {
            id: 5054,
            name: 'Madison Square Garden',
            link: '/api/v1/venues/5054',
          },
          content: {
            link: '/api/v1/game/2022030144/content',
          },
        },
        {
          gamePk: 2022030124,
          link: '/api/v1/game/2022030124/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-24T23:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 1,
                type: 'league',
              },
              score: 5,
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 3,
                type: 'league',
              },
              score: 4,
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8473986,
                    fullName: 'Alex Killorn',
                    link: '/api/v1/people/8473986',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476453,
                    fullName: 'Nikita Kucherov',
                    link: '/api/v1/people/8476453',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8475167,
                    fullName: 'Victor Hedman',
                    link: '/api/v1/people/8475167',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL167',
                eventTypeId: 'GOAL',
                description: 'Alex Killorn (1) Tip-In, assists: Nikita Kucherov (4), Victor Hedman (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 57,
                eventId: 167,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '09:57',
                periodTimeRemaining: '10:03',
                dateTime: '2023-04-24T23:56:29Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 82,
                y: 2,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479410,
                    fullName: 'Mikhail Sergachev',
                    link: '/api/v1/people/8479410',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476453,
                    fullName: 'Nikita Kucherov',
                    link: '/api/v1/people/8476453',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8478010,
                    fullName: 'Brayden Point',
                    link: '/api/v1/people/8478010',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL183',
                eventTypeId: 'GOAL',
                description: 'Mikhail Sergachev (1) Wrist Shot, assists: Nikita Kucherov (5), Brayden Point (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 110,
                eventId: 183,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '18:27',
                periodTimeRemaining: '01:33',
                dateTime: '2023-04-25T00:13:53Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 60,
                y: 20,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478569,
                    fullName: 'Noel Acciari',
                    link: '/api/v1/people/8478569',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475718,
                    fullName: 'Justin Holl',
                    link: '/api/v1/people/8475718',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475158,
                    fullName: "Ryan O'Reilly",
                    link: '/api/v1/people/8475158',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL200',
                eventTypeId: 'GOAL',
                description: "Noel Acciari (2) Tip-In, assists: Justin Holl (1), Ryan O'Reilly (4)",
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 157,
                eventId: 200,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '04:51',
                periodTimeRemaining: '15:09',
                dateTime: '2023-04-25T00:43:12Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: 76,
                y: 1,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8474564,
                    fullName: 'Steven Stamkos',
                    link: '/api/v1/people/8474564',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475167,
                    fullName: 'Victor Hedman',
                    link: '/api/v1/people/8475167',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480246,
                    fullName: 'Nick Perbix',
                    link: '/api/v1/people/8480246',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL613',
                eventTypeId: 'GOAL',
                description: 'Steven Stamkos (1) Tip-In, assists: Victor Hedman (2), Nick Perbix (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 195,
                eventId: 613,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '11:31',
                periodTimeRemaining: '08:29',
                dateTime: '2023-04-25T00:56:24Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: -80,
                y: 1,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8473986,
                    fullName: 'Alex Killorn',
                    link: '/api/v1/people/8473986',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479542,
                    fullName: 'Brandon Hagel',
                    link: '/api/v1/people/8479542',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479410,
                    fullName: 'Mikhail Sergachev',
                    link: '/api/v1/people/8479410',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL628',
                eventTypeId: 'GOAL',
                description: 'Alex Killorn (2) Wrist Shot, assists: Brandon Hagel (3), Mikhail Sergachev (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 244,
                eventId: 628,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '18:49',
                periodTimeRemaining: '01:11',
                dateTime: '2023-04-25T01:12:56Z',
                goals: {
                  away: 1,
                  home: 4,
                },
              },
              coordinates: {
                x: -69,
                y: -25,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479318,
                    fullName: 'Auston Matthews',
                    link: '/api/v1/people/8479318',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 7,
                },
                {
                  player: {
                    id: 8477939,
                    fullName: 'William Nylander',
                    link: '/api/v1/people/8477939',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL857',
                eventTypeId: 'GOAL',
                description: 'Auston Matthews (2) Wrist Shot, assists: Mitchell Marner (7), William Nylander (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 313,
                eventId: 857,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '09:44',
                periodTimeRemaining: '10:16',
                dateTime: '2023-04-25T01:51:32Z',
                goals: {
                  away: 2,
                  home: 4,
                },
              },
              coordinates: {
                x: -70,
                y: -10,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479318,
                    fullName: 'Auston Matthews',
                    link: '/api/v1/people/8479318',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477939,
                    fullName: 'William Nylander',
                    link: '/api/v1/people/8477939',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8470966,
                    fullName: 'Mark Giordano',
                    link: '/api/v1/people/8470966',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL862',
                eventTypeId: 'GOAL',
                description: 'Auston Matthews (3) Tip-In, assists: William Nylander (4), Mark Giordano (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 331,
                eventId: 862,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '12:29',
                periodTimeRemaining: '07:31',
                dateTime: '2023-04-25T01:58:35Z',
                goals: {
                  away: 3,
                  home: 4,
                },
              },
              coordinates: {
                x: -71,
                y: -4,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476853,
                    fullName: 'Morgan Rielly',
                    link: '/api/v1/people/8476853',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 8,
                },
                {
                  player: {
                    id: 8475158,
                    fullName: "Ryan O'Reilly",
                    link: '/api/v1/people/8475158',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL868',
                eventTypeId: 'GOAL',
                description: "Morgan Rielly (2) Wrist Shot, assists: Mitchell Marner (8), Ryan O'Reilly (5)",
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 343,
                eventId: 868,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:04',
                periodTimeRemaining: '03:56',
                dateTime: '2023-04-25T02:05:23Z',
                goals: {
                  away: 4,
                  home: 4,
                },
              },
              coordinates: {
                x: -36,
                y: -10,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477021,
                    fullName: 'Alexander Kerfoot',
                    link: '/api/v1/people/8477021',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470966,
                    fullName: 'Mark Giordano',
                    link: '/api/v1/people/8470966',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477939,
                    fullName: 'William Nylander',
                    link: '/api/v1/people/8477939',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TBL889',
                eventTypeId: 'GOAL',
                description: 'Alexander Kerfoot (1) Tip-In, assists: Mark Giordano (2), William Nylander (5)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 406,
                eventId: 889,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '04:14',
                periodTimeRemaining: '15:46',
                dateTime: '2023-04-25T02:37:19Z',
                goals: {
                  away: 5,
                  home: 4,
                },
              },
              coordinates: {
                x: 76,
                y: 1,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
          ],
          venue: {
            id: 5017,
            name: 'Amalie Arena',
            link: '/api/v1/venues/5017',
          },
          content: {
            link: '/api/v1/game/2022030124/content',
          },
        },
        {
          gamePk: 2022030174,
          link: '/api/v1/game/2022030174/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-25T01:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 1,
                type: 'league',
              },
              score: 4,
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 3,
                type: 'league',
              },
              score: 2,
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8471218,
                    fullName: 'Blake Wheeler',
                    link: '/api/v1/people/8471218',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480145,
                    fullName: 'Neal Pionk',
                    link: '/api/v1/people/8480145',
                  },
                  playerType: 'Assist',
                  seasonTotal: 6,
                },
                {
                  player: {
                    id: 8475799,
                    fullName: 'Nino Niederreiter',
                    link: '/api/v1/people/8475799',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG161',
                eventTypeId: 'GOAL',
                description: 'Blake Wheeler (2) Wrist Shot, assists: Neal Pionk (6), Nino Niederreiter (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 38,
                eventId: 161,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '05:53',
                periodTimeRemaining: '14:07',
                dateTime: '2023-04-25T02:01:25Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -61,
                y: 24,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479353,
                    fullName: 'Brett Howden',
                    link: '/api/v1/people/8479353',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476905,
                    fullName: 'Chandler Stephenson',
                    link: '/api/v1/people/8476905',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG352',
                eventTypeId: 'GOAL',
                description: 'Brett Howden (1) Wrist Shot, assists: Chandler Stephenson (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 71,
                eventId: 352,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '09:53',
                periodTimeRemaining: '10:07',
                dateTime: '2023-04-25T02:10:46Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: 72,
                y: 9,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476448,
                    fullName: 'William Karlsson',
                    link: '/api/v1/people/8476448',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476539,
                    fullName: 'Jonathan Marchessault',
                    link: '/api/v1/people/8476539',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477447,
                    fullName: 'Shea Theodore',
                    link: '/api/v1/people/8477447',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG412',
                eventTypeId: 'GOAL',
                description: 'William Karlsson (3) Deflected, assists: Jonathan Marchessault (2), Shea Theodore (2)',
                secondaryType: 'Deflected',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 211,
                eventId: 412,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '13:32',
                periodTimeRemaining: '06:28',
                dateTime: '2023-04-25T03:14:11Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -83,
                y: -1,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477964,
                    fullName: 'Ivan Barbashev',
                    link: '/api/v1/people/8477964',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477447,
                    fullName: 'Shea Theodore',
                    link: '/api/v1/people/8477447',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476905,
                    fullName: 'Chandler Stephenson',
                    link: '/api/v1/people/8476905',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG414',
                eventTypeId: 'GOAL',
                description: 'Ivan Barbashev (1) Wrist Shot, assists: Shea Theodore (3), Chandler Stephenson (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 215,
                eventId: 414,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '14:19',
                periodTimeRemaining: '05:41',
                dateTime: '2023-04-25T03:17:08Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: -73,
                y: -5,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479400,
                    fullName: 'Pierre-Luc Dubois',
                    link: '/api/v1/people/8479400',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8471218,
                    fullName: 'Blake Wheeler',
                    link: '/api/v1/people/8471218',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8480145,
                    fullName: 'Neal Pionk',
                    link: '/api/v1/people/8480145',
                  },
                  playerType: 'Assist',
                  seasonTotal: 7,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG425',
                eventTypeId: 'GOAL',
                description: 'Pierre-Luc Dubois (2) Slap Shot, assists: Blake Wheeler (3), Neal Pionk (7)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 254,
                eventId: 425,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '02:57',
                periodTimeRemaining: '17:03',
                dateTime: '2023-04-25T03:49:28Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -85,
                y: 5,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479353,
                    fullName: 'Brett Howden',
                    link: '/api/v1/people/8479353',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475913,
                    fullName: 'Mark Stone',
                    link: '/api/v1/people/8475913',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'WPG854',
                eventTypeId: 'GOAL',
                description: 'Brett Howden (2) Wrist Shot, assists: Mark Stone (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 337,
                eventId: 854,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:43',
                periodTimeRemaining: '00:17',
                dateTime: '2023-04-25T04:21:32Z',
                goals: {
                  away: 4,
                  home: 2,
                },
              },
              coordinates: {
                x: 53,
                y: 33,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
          ],
          venue: {
            id: 5058,
            name: 'Canada Life Centre',
            link: '/api/v1/venues/5058',
          },
          content: {
            link: '/api/v1/game/2022030174/content',
          },
        },
        {
          gamePk: 2022030154,
          link: '/api/v1/game/2022030154/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-25T02:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 2,
                type: 'league',
              },
              score: 2,
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 2,
                type: 'league',
              },
              score: 3,
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478840,
                    fullName: 'Will Borgen',
                    link: '/api/v1/people/8478840',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476457,
                    fullName: 'Adam Larsson',
                    link: '/api/v1/people/8476457',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479293,
                    fullName: 'Brandon Tanev',
                    link: '/api/v1/people/8479293',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA160',
                eventTypeId: 'GOAL',
                description: 'Will Borgen (1) Slap Shot, assists: Adam Larsson (1), Brandon Tanev (1)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 23,
                eventId: 160,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '03:56',
                periodTimeRemaining: '16:04',
                dateTime: '2023-04-25T02:26:31Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 57,
                y: 25,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478466,
                    fullName: 'Daniel Sprong',
                    link: '/api/v1/people/8478466',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474602,
                    fullName: 'Justin Schultz',
                    link: '/api/v1/people/8474602',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA173',
                eventTypeId: 'GOAL',
                description: 'Daniel Sprong (1) Wrist Shot, assists: Justin Schultz (4)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 64,
                eventId: 173,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '10:09',
                periodTimeRemaining: '09:51',
                dateTime: '2023-04-25T02:43:05Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 57,
                y: 12,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478420,
                    fullName: 'Mikko Rantanen',
                    link: '/api/v1/people/8478420',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8477492,
                    fullName: 'Nathan MacKinnon',
                    link: '/api/v1/people/8477492',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478542,
                    fullName: 'Evan Rodrigues',
                    link: '/api/v1/people/8478542',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA467',
                eventTypeId: 'GOAL',
                description: 'Mikko Rantanen (4) Wrist Shot, assists: Nathan MacKinnon (2), Evan Rodrigues (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 208,
                eventId: 467,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '14:08',
                periodTimeRemaining: '05:52',
                dateTime: '2023-04-25T03:48:57Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: 66,
                y: 3,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478420,
                    fullName: 'Mikko Rantanen',
                    link: '/api/v1/people/8478420',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8479398,
                    fullName: 'Samuel Girard',
                    link: '/api/v1/people/8479398',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477456,
                    fullName: 'J.T. Compher',
                    link: '/api/v1/people/8477456',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA479',
                eventTypeId: 'GOAL',
                description: 'Mikko Rantanen (5) Wrist Shot, assists: Samuel Girard (2), J.T. Compher (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 245,
                eventId: 479,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '19:10',
                periodTimeRemaining: '00:50',
                dateTime: '2023-04-25T04:01:46Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: 60,
                y: -14,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8474586,
                    fullName: 'Jordan Eberle',
                    link: '/api/v1/people/8474586',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475768,
                    fullName: 'Jaden Schwartz',
                    link: '/api/v1/people/8475768',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478466,
                    fullName: 'Daniel Sprong',
                    link: '/api/v1/people/8478466',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'SEA873',
                eventTypeId: 'GOAL',
                description: 'Jordan Eberle (1) Wrist Shot, assists: Jaden Schwartz (2), Daniel Sprong (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 389,
                eventId: 873,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '03:00',
                periodTimeRemaining: '17:00',
                dateTime: '2023-04-25T05:20:24Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: -85,
                y: -6,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
          ],
          venue: {
            name: 'Climate Pledge Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030154/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-25',
      totalItems: 3,
      totalEvents: 0,
      totalGames: 3,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030135,
          link: '/api/v1/game/2022030135/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-25T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 3,
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            home: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 2,
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8478115,
                    fullName: 'Pierre Engvall',
                    link: '/api/v1/people/8478115',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475754,
                    fullName: 'Brock Nelson',
                    link: '/api/v1/people/8475754',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR23',
                eventTypeId: 'GOAL',
                description: 'Pierre Engvall (1) Wrist Shot, assists: Brock Nelson (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 66,
                eventId: 23,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '10:27',
                periodTimeRemaining: '09:33',
                dateTime: '2023-04-25T23:30:13Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: 79,
                y: 5,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475754,
                    fullName: 'Brock Nelson',
                    link: '/api/v1/people/8475754',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478115,
                    fullName: 'Pierre Engvall',
                    link: '/api/v1/people/8478115',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475151,
                    fullName: 'Kyle Palmieri',
                    link: '/api/v1/people/8475151',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR411',
                eventTypeId: 'GOAL',
                description: 'Brock Nelson (2) Batted, assists: Pierre Engvall (1), Kyle Palmieri (3)',
                secondaryType: 'Batted',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 149,
                eventId: 411,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '03:16',
                periodTimeRemaining: '16:44',
                dateTime: '2023-04-26T00:15:06Z',
                goals: {
                  away: 2,
                  home: 0,
                },
              },
              coordinates: {
                x: -86,
                y: 14,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8471669,
                    fullName: 'Paul Stastny',
                    link: '/api/v1/people/8471669',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478970,
                    fullName: 'Jalen Chatfield',
                    link: '/api/v1/people/8478970',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479344,
                    fullName: 'Jesse Puljujarvi',
                    link: '/api/v1/people/8479344',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR432',
                eventTypeId: 'GOAL',
                description: 'Paul Stastny (2) Tip-In, assists: Jalen Chatfield (1), Jesse Puljujarvi (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 216,
                eventId: 432,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '13:10',
                periodTimeRemaining: '06:50',
                dateTime: '2023-04-26T00:38:11Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: 79,
                y: -1,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478445,
                    fullName: 'Mathew Barzal',
                    link: '/api/v1/people/8478445',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477500,
                    fullName: 'Bo Horvat',
                    link: '/api/v1/people/8477500',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477293,
                    fullName: 'Antti Raanta',
                    link: '/api/v1/people/8477293',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR439',
                eventTypeId: 'GOAL',
                description: 'Mathew Barzal (2) Wrist Shot, assists: Bo Horvat (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 241,
                eventId: 439,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '18:05',
                periodTimeRemaining: '01:55',
                dateTime: '2023-04-26T00:50:23Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: -69,
                y: -10,
              },
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478427,
                    fullName: 'Sebastian Aho',
                    link: '/api/v1/people/8478427',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8482093,
                    fullName: 'Seth Jarvis',
                    link: '/api/v1/people/8482093',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480829,
                    fullName: 'Jesperi Kotkaniemi',
                    link: '/api/v1/people/8480829',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478009,
                    fullName: 'Ilya Sorokin',
                    link: '/api/v1/people/8478009',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'CAR769',
                eventTypeId: 'GOAL',
                description: 'Sebastian Aho (3) Wrist Shot, assists: Seth Jarvis (2), Jesperi Kotkaniemi (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 315,
                eventId: 769,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '10:28',
                periodTimeRemaining: '09:32',
                dateTime: '2023-04-26T01:31:17Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -71,
                y: 12,
              },
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
          ],
          venue: {
            id: 5066,
            name: 'PNC Arena',
            link: '/api/v1/venues/5066',
          },
          content: {
            link: '/api/v1/game/2022030135/content',
          },
        },
        {
          gamePk: 2022030165,
          link: '/api/v1/game/2022030165/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-26T00:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 0,
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
            home: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 4,
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475794,
                    fullName: 'Tyler Seguin',
                    link: '/api/v1/people/8475794',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8480027,
                    fullName: 'Jason Robertson',
                    link: '/api/v1/people/8480027',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL153',
                eventTypeId: 'GOAL',
                description: 'Tyler Seguin (4) Snap Shot, assists: Jason Robertson (4), Roope Hintz (5)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 19,
                eventId: 153,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '02:22',
                periodTimeRemaining: '17:38',
                dateTime: '2023-04-26T00:16:53Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -81,
                y: 1,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480027,
                    fullName: 'Jason Robertson',
                    link: '/api/v1/people/8480027',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480036,
                    fullName: 'Miro Heiskanen',
                    link: '/api/v1/people/8480036',
                  },
                  playerType: 'Assist',
                  seasonTotal: 6,
                },
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Assist',
                  seasonTotal: 6,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL170',
                eventTypeId: 'GOAL',
                description: 'Jason Robertson (2) Wrist Shot, assists: Miro Heiskanen (6), Roope Hintz (6)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 68,
                eventId: 170,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '11:04',
                periodTimeRemaining: '08:56',
                dateTime: '2023-04-26T00:34:12Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: -59,
                y: 18,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478975,
                    fullName: 'Mason Marchment',
                    link: '/api/v1/people/8478975',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475794,
                    fullName: 'Tyler Seguin',
                    link: '/api/v1/people/8475794',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478449,
                    fullName: 'Roope Hintz',
                    link: '/api/v1/people/8478449',
                  },
                  playerType: 'Assist',
                  seasonTotal: 7,
                },
                {
                  player: {
                    id: 8479406,
                    fullName: 'Filip Gustavsson',
                    link: '/api/v1/people/8479406',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL187',
                eventTypeId: 'GOAL',
                description: 'Mason Marchment (1) Snap Shot, assists: Tyler Seguin (1), Roope Hintz (7)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 124,
                eventId: 187,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '01:19',
                periodTimeRemaining: '18:41',
                dateTime: '2023-04-26T01:09:22Z',
                goals: {
                  away: 0,
                  home: 3,
                },
              },
              coordinates: {
                x: 82,
                y: -7,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480848,
                    fullName: 'Ty Dellandrea',
                    link: '/api/v1/people/8480848',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477503,
                    fullName: 'Max Domi',
                    link: '/api/v1/people/8477503',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8470600,
                    fullName: 'Ryan Suter',
                    link: '/api/v1/people/8470600',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'DAL852',
                eventTypeId: 'GOAL',
                description: 'Ty Dellandrea (1) Slap Shot, assists: Max Domi (1), Ryan Suter (1)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 290,
                eventId: 852,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:03',
                periodTimeRemaining: '03:57',
                dateTime: '2023-04-26T02:32:35Z',
                goals: {
                  away: 0,
                  home: 4,
                },
              },
              coordinates: {
                x: -49,
                y: -14,
              },
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
          ],
          venue: {
            id: 5019,
            name: 'American Airlines Center',
            link: '/api/v1/venues/5019',
          },
          content: {
            link: '/api/v1/game/2022030165/content',
          },
        },
        {
          gamePk: 2022030185,
          link: '/api/v1/game/2022030185/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-26T01:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 3,
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            home: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 6,
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8475169,
                    fullName: 'Evander Kane',
                    link: '/api/v1/people/8475169',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477498,
                    fullName: 'Darnell Nurse',
                    link: '/api/v1/people/8477498',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475218,
                    fullName: 'Mattias Ekholm',
                    link: '/api/v1/people/8475218',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM166',
                eventTypeId: 'GOAL',
                description: 'Evander Kane (3) Snap Shot, assists: Darnell Nurse (2), Mattias Ekholm (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 45,
                eventId: 166,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '08:08',
                periodTimeRemaining: '11:52',
                dateTime: '2023-04-26T02:02:42Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 71,
                y: 22,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477934,
                    fullName: 'Leon Draisaitl',
                    link: '/api/v1/people/8477934',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 6,
                },
                {
                  player: {
                    id: 8478402,
                    fullName: 'Connor McDavid',
                    link: '/api/v1/people/8478402',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8475218,
                    fullName: 'Mattias Ekholm',
                    link: '/api/v1/people/8475218',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM173',
                eventTypeId: 'GOAL',
                description: 'Leon Draisaitl (6) Wrist Shot, assists: Connor McDavid (5), Mattias Ekholm (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 57,
                eventId: 173,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '10:40',
                periodTimeRemaining: '09:20',
                dateTime: '2023-04-26T02:08:13Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 77,
                y: 3,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8480113,
                    fullName: 'Alex Iafallo',
                    link: '/api/v1/people/8480113',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477960,
                    fullName: 'Adrian Kempe',
                    link: '/api/v1/people/8477960',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8471685,
                    fullName: 'Anze Kopitar',
                    link: '/api/v1/people/8471685',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM179',
                eventTypeId: 'GOAL',
                description: 'Alex Iafallo (3) Wrist Shot, assists: Adrian Kempe (3), Anze Kopitar (5)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 69,
                eventId: 179,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '13:12',
                periodTimeRemaining: '06:48',
                dateTime: '2023-04-26T02:11:27Z',
                goals: {
                  away: 1,
                  home: 2,
                },
              },
              coordinates: {
                x: -79,
                y: -3,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476967,
                    fullName: 'Brett Kulak',
                    link: '/api/v1/people/8476967',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480802,
                    fullName: 'Ryan McLeod',
                    link: '/api/v1/people/8480802',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477998,
                    fullName: 'Warren Foegele',
                    link: '/api/v1/people/8477998',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM182',
                eventTypeId: 'GOAL',
                description: 'Brett Kulak (1) Snap Shot, assists: Ryan McLeod (1), Warren Foegele (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 78,
                eventId: 182,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '14:12',
                periodTimeRemaining: '05:48',
                dateTime: '2023-04-26T02:13:44Z',
                goals: {
                  away: 1,
                  home: 3,
                },
              },
              coordinates: {
                x: 75,
                y: 5,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477960,
                    fullName: 'Adrian Kempe',
                    link: '/api/v1/people/8477960',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8479336,
                    fullName: 'Carl Grundstrom',
                    link: '/api/v1/people/8479336',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474563,
                    fullName: 'Drew Doughty',
                    link: '/api/v1/people/8474563',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM190',
                eventTypeId: 'GOAL',
                description: 'Adrian Kempe (4) Wrist Shot, assists: Carl Grundstrom (1), Drew Doughty (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 99,
                eventId: 190,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '17:35',
                periodTimeRemaining: '02:25',
                dateTime: '2023-04-26T02:20:43Z',
                goals: {
                  away: 2,
                  home: 3,
                },
              },
              coordinates: {
                x: -80,
                y: 3,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475760,
                    fullName: 'Nick Bjugstad',
                    link: '/api/v1/people/8475760',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476879,
                    fullName: 'Cody Ceci',
                    link: '/api/v1/people/8476879',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477498,
                    fullName: 'Darnell Nurse',
                    link: '/api/v1/people/8477498',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476914,
                    fullName: 'Joonas Korpisalo',
                    link: '/api/v1/people/8476914',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM411',
                eventTypeId: 'GOAL',
                description: 'Nick Bjugstad (1) Tip-In, assists: Cody Ceci (1), Darnell Nurse (3)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 186,
                eventId: 411,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '11:49',
                periodTimeRemaining: '08:11',
                dateTime: '2023-04-26T03:04:17Z',
                goals: {
                  away: 2,
                  home: 4,
                },
              },
              coordinates: {
                x: -81,
                y: 1,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475786,
                    fullName: 'Zach Hyman',
                    link: '/api/v1/people/8475786',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480803,
                    fullName: 'Evan Bouchard',
                    link: '/api/v1/people/8480803',
                  },
                  playerType: 'Assist',
                  seasonTotal: 6,
                },
                {
                  player: {
                    id: 8478402,
                    fullName: 'Connor McDavid',
                    link: '/api/v1/people/8478402',
                  },
                  playerType: 'Assist',
                  seasonTotal: 6,
                },
                {
                  player: {
                    id: 8477831,
                    fullName: 'Pheonix Copley',
                    link: '/api/v1/people/8477831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM419',
                eventTypeId: 'GOAL',
                description: 'Zach Hyman (2) Deflected, assists: Evan Bouchard (6), Connor McDavid (6)',
                secondaryType: 'Deflected',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 206,
                eventId: 419,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '15:47',
                periodTimeRemaining: '04:13',
                dateTime: '2023-04-26T03:13:24Z',
                goals: {
                  away: 2,
                  home: 5,
                },
              },
              coordinates: {
                x: -79,
                y: 5,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475760,
                    fullName: 'Nick Bjugstad',
                    link: '/api/v1/people/8475760',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476454,
                    fullName: 'Ryan Nugent-Hopkins',
                    link: '/api/v1/people/8476454',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8477831,
                    fullName: 'Pheonix Copley',
                    link: '/api/v1/people/8477831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM431',
                eventTypeId: 'GOAL',
                description: 'Nick Bjugstad (2) Backhand, assists: Ryan Nugent-Hopkins (4)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 246,
                eventId: 431,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '04:26',
                periodTimeRemaining: '15:34',
                dateTime: '2023-04-26T03:46:42Z',
                goals: {
                  away: 2,
                  home: 6,
                },
              },
              coordinates: {
                x: 72,
                y: 19,
              },
              team: {
                id: 22,
                name: 'Edmonton Oilers',
                link: '/api/v1/teams/22',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8482124,
                    fullName: 'Quinton Byfield',
                    link: '/api/v1/people/8482124',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480014,
                    fullName: 'Gabriel Vilardi',
                    link: '/api/v1/people/8480014',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8477942,
                    fullName: 'Kevin Fiala',
                    link: '/api/v1/people/8477942',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479973,
                    fullName: 'Stuart Skinner',
                    link: '/api/v1/people/8479973',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'EDM433',
                eventTypeId: 'GOAL',
                description: 'Quinton Byfield (1) Snap Shot, assists: Gabriel Vilardi (2), Kevin Fiala (3)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 256,
                eventId: 433,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '06:33',
                periodTimeRemaining: '13:27',
                dateTime: '2023-04-26T03:50:48Z',
                goals: {
                  away: 3,
                  home: 6,
                },
              },
              coordinates: {
                x: -77,
                y: -3,
              },
              team: {
                id: 26,
                name: 'Los Angeles Kings',
                link: '/api/v1/teams/26',
              },
            },
          ],
          venue: {
            id: 5100,
            name: 'Rogers Place',
            link: '/api/v1/venues/5100',
          },
          content: {
            link: '/api/v1/game/2022030185/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-26',
      totalItems: 2,
      totalEvents: 0,
      totalGames: 2,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030115,
          link: '/api/v1/game/2022030115/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-26T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 4,
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            home: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 3,
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8477407,
                    fullName: 'Anthony Duclair',
                    link: '/api/v1/people/8477407',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477409,
                    fullName: 'Carter Verhaeghe',
                    link: '/api/v1/people/8477409',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS164',
                eventTypeId: 'GOAL',
                description: 'Anthony Duclair (1) Wrist Shot, assists: Carter Verhaeghe (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 54,
                eventId: 164,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '08:26',
                periodTimeRemaining: '11:34',
                dateTime: '2023-04-26T23:25:09Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: -73,
                y: 2,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8473419,
                    fullName: 'Brad Marchand',
                    link: '/api/v1/people/8473419',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8479325,
                    fullName: 'Charlie McAvoy',
                    link: '/api/v1/people/8479325',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS192',
                eventTypeId: 'GOAL',
                description: 'Brad Marchand (4) Wrist Shot, assists: Charlie McAvoy (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 145,
                eventId: 192,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '02:27',
                periodTimeRemaining: '17:33',
                dateTime: '2023-04-27T00:11:38Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: -83,
                y: -1,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477935,
                    fullName: 'Sam Bennett',
                    link: '/api/v1/people/8477935',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477409,
                    fullName: 'Carter Verhaeghe',
                    link: '/api/v1/people/8477409',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476393,
                    fullName: 'Nick Cousins',
                    link: '/api/v1/people/8476393',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS531',
                eventTypeId: 'GOAL',
                description: 'Sam Bennett (3) Wrist Shot, assists: Carter Verhaeghe (3), Nick Cousins (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 252,
                eventId: 531,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '18:52',
                periodTimeRemaining: '01:08',
                dateTime: '2023-04-27T00:46:19Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: 58,
                y: 1,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8470638,
                    fullName: 'Patrice Bergeron',
                    link: '/api/v1/people/8470638',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8473419,
                    fullName: 'Brad Marchand',
                    link: '/api/v1/people/8473419',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479325,
                    fullName: 'Charlie McAvoy',
                    link: '/api/v1/people/8479325',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS548',
                eventTypeId: 'GOAL',
                description: 'Patrice Bergeron (1) Tip-In, assists: Brad Marchand (2), Charlie McAvoy (3)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 301,
                eventId: 548,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '04:33',
                periodTimeRemaining: '15:27',
                dateTime: '2023-04-27T01:17:21Z',
                goals: {
                  away: 2,
                  home: 2,
                },
              },
              coordinates: {
                x: 74,
                y: -3,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477933,
                    fullName: 'Sam Reinhart',
                    link: '/api/v1/people/8477933',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8479314,
                    fullName: 'Matthew Tkachuk',
                    link: '/api/v1/people/8479314',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8477493,
                    fullName: 'Aleksander Barkov',
                    link: '/api/v1/people/8477493',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS851',
                eventTypeId: 'GOAL',
                description: 'Sam Reinhart (2) Wrist Shot, assists: Matthew Tkachuk (4), Aleksander Barkov (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 307,
                eventId: 851,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '05:14',
                periodTimeRemaining: '14:46',
                dateTime: '2023-04-27T01:19:58Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -68,
                y: 6,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475791,
                    fullName: 'Taylor Hall',
                    link: '/api/v1/people/8475791',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8478443,
                    fullName: 'Brandon Carlo',
                    link: '/api/v1/people/8478443',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475745,
                    fullName: 'Charlie Coyle',
                    link: '/api/v1/people/8475745',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475683,
                    fullName: 'Sergei Bobrovsky',
                    link: '/api/v1/people/8475683',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS860',
                eventTypeId: 'GOAL',
                description: 'Taylor Hall (5) Wrist Shot, assists: Brandon Carlo (2), Charlie Coyle (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 331,
                eventId: 860,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '09:16',
                periodTimeRemaining: '10:44',
                dateTime: '2023-04-27T01:28:49Z',
                goals: {
                  away: 3,
                  home: 3,
                },
              },
              coordinates: {
                x: 51,
                y: -2,
              },
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479314,
                    fullName: 'Matthew Tkachuk',
                    link: '/api/v1/people/8479314',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477409,
                    fullName: 'Carter Verhaeghe',
                    link: '/api/v1/people/8477409',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8476999,
                    fullName: 'Linus Ullmark',
                    link: '/api/v1/people/8476999',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'BOS890',
                eventTypeId: 'GOAL',
                description: 'Matthew Tkachuk (3) Backhand, assists: Carter Verhaeghe (4)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 423,
                eventId: 890,
                period: 4,
                periodType: 'OVERTIME',
                ordinalNum: 'OT',
                periodTime: '06:05',
                periodTimeRemaining: '13:55',
                dateTime: '2023-04-27T02:13:51Z',
                goals: {
                  away: 4,
                  home: 3,
                },
              },
              coordinates: {
                x: 79,
                y: -6,
              },
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
          ],
          venue: {
            id: 5085,
            name: 'TD Garden',
            link: '/api/v1/venues/5085',
          },
          content: {
            link: '/api/v1/game/2022030115/content',
          },
        },
        {
          gamePk: 2022030155,
          link: '/api/v1/game/2022030155/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-27T01:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 3,
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 2,
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8479987,
                    fullName: 'Morgan Geekie',
                    link: '/api/v1/people/8479987',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475768,
                    fullName: 'Jaden Schwartz',
                    link: '/api/v1/people/8475768',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477505,
                    fullName: 'Alex Wennberg',
                    link: '/api/v1/people/8477505',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL380',
                eventTypeId: 'GOAL',
                description: 'Morgan Geekie (2) Wrist Shot, assists: Jaden Schwartz (3), Alex Wennberg (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 162,
                eventId: 380,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '06:35',
                periodTimeRemaining: '13:25',
                dateTime: '2023-04-27T02:57:24Z',
                goals: {
                  away: 1,
                  home: 0,
                },
              },
              coordinates: {
                x: -80,
                y: 0,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477492,
                    fullName: 'Nathan MacKinnon',
                    link: '/api/v1/people/8477492',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478420,
                    fullName: 'Mikko Rantanen',
                    link: '/api/v1/people/8478420',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL387',
                eventTypeId: 'GOAL',
                description: 'Nathan MacKinnon (3) Deflected, assists: Mikko Rantanen (2)',
                secondaryType: 'Deflected',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 173,
                eventId: 387,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '07:55',
                periodTimeRemaining: '12:05',
                dateTime: '2023-04-27T03:01:45Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: 82,
                y: 0,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8481789,
                    fullName: 'Tye Kartye',
                    link: '/api/v1/people/8481789',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474586,
                    fullName: 'Jordan Eberle',
                    link: '/api/v1/people/8474586',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478840,
                    fullName: 'Will Borgen',
                    link: '/api/v1/people/8478840',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL389',
                eventTypeId: 'GOAL',
                description: 'Tye Kartye (1) Snap Shot, assists: Jordan Eberle (2), Will Borgen (1)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 182,
                eventId: 389,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '09:59',
                periodTimeRemaining: '10:01',
                dateTime: '2023-04-27T03:05:00Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -74,
                y: 9,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476826,
                    fullName: 'Yanni Gourde',
                    link: '/api/v1/people/8476826',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477369,
                    fullName: 'Carson Soucy',
                    link: '/api/v1/people/8477369',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8477416,
                    fullName: 'Oliver Bjorkstrand',
                    link: '/api/v1/people/8477416',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8480382,
                    fullName: 'Alexandar Georgiev',
                    link: '/api/v1/people/8480382',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL722',
                eventTypeId: 'GOAL',
                description: 'Yanni Gourde (1) Tip-In, assists: Carson Soucy (1), Oliver Bjorkstrand (2)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 253,
                eventId: 722,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '01:40',
                periodTimeRemaining: '18:20',
                dateTime: '2023-04-27T03:45:06Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 81,
                y: 3,
              },
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478542,
                    fullName: 'Evan Rodrigues',
                    link: '/api/v1/people/8478542',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478038,
                    fullName: 'Devon Toews',
                    link: '/api/v1/people/8478038',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8477492,
                    fullName: 'Nathan MacKinnon',
                    link: '/api/v1/people/8477492',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475831,
                    fullName: 'Philipp Grubauer',
                    link: '/api/v1/people/8475831',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'COL960',
                eventTypeId: 'GOAL',
                description: 'Evan Rodrigues (1) Slap Shot, assists: Devon Toews (4), Nathan MacKinnon (3)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 332,
                eventId: 960,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:23',
                periodTimeRemaining: '03:37',
                dateTime: '2023-04-27T04:13:35Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -38,
                y: 4,
              },
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
          ],
          venue: {
            id: 5064,
            name: 'Ball Arena',
            link: '/api/v1/venues/5064',
          },
          content: {
            link: '/api/v1/game/2022030155/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-27',
      totalItems: 3,
      totalEvents: 0,
      totalGames: 3,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030125,
          link: '/api/v1/game/2022030125/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-27T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 4,
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            home: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 2,
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8476853,
                    fullName: 'Morgan Rielly',
                    link: '/api/v1/people/8476853',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8482720,
                    fullName: 'Matthew Knies',
                    link: '/api/v1/people/8482720',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8475166,
                    fullName: 'John Tavares',
                    link: '/api/v1/people/8475166',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR22',
                eventTypeId: 'GOAL',
                description: 'Morgan Rielly (3) Wrist Shot, assists: Matthew Knies (2), John Tavares (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 45,
                eventId: 22,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '05:46',
                periodTimeRemaining: '14:14',
                dateTime: '2023-04-27T23:18:45Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -50,
                y: 0,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478519,
                    fullName: 'Anthony Cirelli',
                    link: '/api/v1/people/8478519',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479542,
                    fullName: 'Brandon Hagel',
                    link: '/api/v1/people/8479542',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8480246,
                    fullName: 'Nick Perbix',
                    link: '/api/v1/people/8480246',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR24',
                eventTypeId: 'GOAL',
                description: 'Anthony Cirelli (3) Wrist Shot, assists: Brandon Hagel (4), Nick Perbix (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 49,
                eventId: 24,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '06:12',
                periodTimeRemaining: '13:48',
                dateTime: '2023-04-27T23:19:55Z',
                goals: {
                  away: 1,
                  home: 1,
                },
              },
              coordinates: {
                x: 79,
                y: 2,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479591,
                    fullName: 'Michael Eyssimont',
                    link: '/api/v1/people/8479591',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474567,
                    fullName: 'Zach Bogosian',
                    link: '/api/v1/people/8474567',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8474013,
                    fullName: 'Ian Cole',
                    link: '/api/v1/people/8474013',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR321',
                eventTypeId: 'GOAL',
                description: 'Michael Eyssimont (1) Wrist Shot, assists: Zach Bogosian (1), Ian Cole (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 167,
                eventId: 321,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '04:23',
                periodTimeRemaining: '15:37',
                dateTime: '2023-04-28T00:15:38Z',
                goals: {
                  away: 2,
                  home: 1,
                },
              },
              coordinates: {
                x: -81,
                y: -12,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8477426,
                    fullName: 'Nicholas Paul',
                    link: '/api/v1/people/8477426',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8479525,
                    fullName: 'Ross Colton',
                    link: '/api/v1/people/8479525',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8479591,
                    fullName: 'Michael Eyssimont',
                    link: '/api/v1/people/8479591',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478492,
                    fullName: 'Ilya Samsonov',
                    link: '/api/v1/people/8478492',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR675',
                eventTypeId: 'GOAL',
                description: 'Nicholas Paul (1) Wrist Shot, assists: Ross Colton (3), Michael Eyssimont (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 325,
                eventId: 675,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '11:53',
                periodTimeRemaining: '08:07',
                dateTime: '2023-04-28T01:24:45Z',
                goals: {
                  away: 3,
                  home: 1,
                },
              },
              coordinates: {
                x: 74,
                y: 0,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8479318,
                    fullName: 'Auston Matthews',
                    link: '/api/v1/people/8479318',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8475166,
                    fullName: 'John Tavares',
                    link: '/api/v1/people/8475166',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478483,
                    fullName: 'Mitchell Marner',
                    link: '/api/v1/people/8478483',
                  },
                  playerType: 'Assist',
                  seasonTotal: 9,
                },
                {
                  player: {
                    id: 8476883,
                    fullName: 'Andrei Vasilevskiy',
                    link: '/api/v1/people/8476883',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR686',
                eventTypeId: 'GOAL',
                description: 'Auston Matthews (4) Wrist Shot, assists: John Tavares (3), Mitchell Marner (9)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 357,
                eventId: 686,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '16:26',
                periodTimeRemaining: '03:34',
                dateTime: '2023-04-28T01:36:40Z',
                goals: {
                  away: 3,
                  home: 2,
                },
              },
              coordinates: {
                x: -84,
                y: 5,
              },
              team: {
                id: 10,
                name: 'Toronto Maple Leafs',
                link: '/api/v1/teams/10',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8473986,
                    fullName: 'Alex Killorn',
                    link: '/api/v1/people/8473986',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475167,
                    fullName: 'Victor Hedman',
                    link: '/api/v1/people/8475167',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8478519,
                    fullName: 'Anthony Cirelli',
                    link: '/api/v1/people/8478519',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'TOR693',
                eventTypeId: 'GOAL',
                description: 'Alex Killorn (3) Backhand, assists: Victor Hedman (3), Anthony Cirelli (2)',
                secondaryType: 'Backhand',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 377,
                eventId: 693,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '19:55',
                periodTimeRemaining: '00:05',
                dateTime: '2023-04-28T01:44:25Z',
                goals: {
                  away: 4,
                  home: 2,
                },
              },
              coordinates: {
                x: 82,
                y: 5,
              },
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14',
              },
            },
          ],
          venue: {
            name: 'Scotiabank Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030125/content',
          },
        },
        {
          gamePk: 2022030145,
          link: '/api/v1/game/2022030145/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-27T23:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 0,
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3',
              },
            },
            home: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 4,
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8476292,
                    fullName: 'Ondrej Palat',
                    link: '/api/v1/people/8476292',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD9',
                eventTypeId: 'GOAL',
                description: 'Ondrej Palat (2) Wrist Shot, assists: none',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 9,
                eventId: 9,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '00:39',
                periodTimeRemaining: '19:21',
                dateTime: '2023-04-27T23:41:45Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: 70,
                y: 5,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475287,
                    fullName: 'Erik Haula',
                    link: '/api/v1/people/8475287',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8482110,
                    fullName: 'Dawson Mercer',
                    link: '/api/v1/people/8482110',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476923,
                    fullName: 'Damon Severson',
                    link: '/api/v1/people/8476923',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD401',
                eventTypeId: 'GOAL',
                description: 'Erik Haula (2) Tip-In, assists: Dawson Mercer (1), Damon Severson (1)',
                secondaryType: 'Tip-In',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 133,
                eventId: 401,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '03:27',
                periodTimeRemaining: '16:33',
                dateTime: '2023-04-28T00:40:02Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: -82,
                y: 1,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8482110,
                    fullName: 'Dawson Mercer',
                    link: '/api/v1/people/8482110',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8475287,
                    fullName: 'Erik Haula',
                    link: '/api/v1/people/8475287',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8478048,
                    fullName: 'Igor Shesterkin',
                    link: '/api/v1/people/8478048',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD421',
                eventTypeId: 'GOAL',
                description: 'Dawson Mercer (1) Slap Shot, assists: Erik Haula (2)',
                secondaryType: 'Slap Shot',
                strength: {
                  code: 'SHG',
                  name: 'Short Handed',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 195,
                eventId: 421,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '13:32',
                periodTimeRemaining: '06:28',
                dateTime: '2023-04-28T00:58:31Z',
                goals: {
                  away: 0,
                  home: 3,
                },
              },
              coordinates: {
                x: -75,
                y: -15,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475287,
                    fullName: 'Erik Haula',
                    link: '/api/v1/people/8475287',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8480002,
                    fullName: 'Nico Hischier',
                    link: '/api/v1/people/8480002',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8477435,
                    fullName: 'Ryan Graves',
                    link: '/api/v1/people/8477435',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'NJD863',
                eventTypeId: 'GOAL',
                description: 'Erik Haula (3) Wrist Shot, assists: Nico Hischier (3), Ryan Graves (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: true,
              },
              about: {
                eventIdx: 316,
                eventId: 863,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '14:48',
                periodTimeRemaining: '05:12',
                dateTime: '2023-04-28T01:57:18Z',
                goals: {
                  away: 0,
                  home: 4,
                },
              },
              coordinates: {
                x: -60,
                y: 1,
              },
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
              },
            },
          ],
          venue: {
            name: 'Prudential Center',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030145/content',
          },
        },
        {
          gamePk: 2022030175,
          link: '/api/v1/game/2022030175/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-28T02:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 4,
                type: 'league',
              },
              score: 1,
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
            home: {
              leagueRecord: {
                wins: 4,
                losses: 1,
                type: 'league',
              },
              score: 4,
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
          },
          scoringPlays: [
            {
              players: [
                {
                  player: {
                    id: 8476905,
                    fullName: 'Chandler Stephenson',
                    link: '/api/v1/people/8476905',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475913,
                    fullName: 'Mark Stone',
                    link: '/api/v1/people/8475913',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8479353,
                    fullName: 'Brett Howden',
                    link: '/api/v1/people/8479353',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK54',
                eventTypeId: 'GOAL',
                description: 'Chandler Stephenson (3) Wrist Shot, assists: Mark Stone (4), Brett Howden (2)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 7,
                eventId: 54,
                period: 1,
                periodType: 'REGULAR',
                ordinalNum: '1st',
                periodTime: '00:50',
                periodTimeRemaining: '19:10',
                dateTime: '2023-04-28T02:21:35Z',
                goals: {
                  away: 0,
                  home: 1,
                },
              },
              coordinates: {
                x: -86,
                y: -6,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8475913,
                    fullName: 'Mark Stone',
                    link: '/api/v1/people/8475913',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8474565,
                    fullName: 'Alex Pietrangelo',
                    link: '/api/v1/people/8474565',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK97',
                eventTypeId: 'GOAL',
                description: 'Mark Stone (3) Wrist Shot, assists: Alex Pietrangelo (5)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: true,
                emptyNet: false,
              },
              about: {
                eventIdx: 95,
                eventId: 97,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '00:42',
                periodTimeRemaining: '19:18',
                dateTime: '2023-04-28T03:12:31Z',
                goals: {
                  away: 0,
                  home: 2,
                },
              },
              coordinates: {
                x: 66,
                y: 0,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476448,
                    fullName: 'William Karlsson',
                    link: '/api/v1/people/8476448',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8478020,
                    fullName: 'Michael Amadio',
                    link: '/api/v1/people/8478020',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8475191,
                    fullName: 'Reilly Smith',
                    link: '/api/v1/people/8475191',
                  },
                  playerType: 'Assist',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK411',
                eventTypeId: 'GOAL',
                description: 'William Karlsson (4) Wrist Shot, assists: Michael Amadio (3), Reilly Smith (3)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 125,
                eventId: 411,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '04:41',
                periodTimeRemaining: '15:19',
                dateTime: '2023-04-28T03:21:22Z',
                goals: {
                  away: 0,
                  home: 3,
                },
              },
              coordinates: {
                x: 85,
                y: -5,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8476905,
                    fullName: 'Chandler Stephenson',
                    link: '/api/v1/people/8476905',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8475913,
                    fullName: 'Mark Stone',
                    link: '/api/v1/people/8475913',
                  },
                  playerType: 'Assist',
                  seasonTotal: 5,
                },
                {
                  player: {
                    id: 8478403,
                    fullName: 'Jack Eichel',
                    link: '/api/v1/people/8478403',
                  },
                  playerType: 'Assist',
                  seasonTotal: 2,
                },
                {
                  player: {
                    id: 8476945,
                    fullName: 'Connor Hellebuyck',
                    link: '/api/v1/people/8476945',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK422',
                eventTypeId: 'GOAL',
                description: 'Chandler Stephenson (4) Snap Shot, assists: Mark Stone (5), Jack Eichel (2)',
                secondaryType: 'Snap Shot',
                strength: {
                  code: 'PPG',
                  name: 'Power Play',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 146,
                eventId: 422,
                period: 2,
                periodType: 'REGULAR',
                ordinalNum: '2nd',
                periodTime: '08:37',
                periodTimeRemaining: '11:23',
                dateTime: '2023-04-28T03:33:06Z',
                goals: {
                  away: 0,
                  home: 4,
                },
              },
              coordinates: {
                x: 69,
                y: 6,
              },
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54',
              },
            },
            {
              players: [
                {
                  player: {
                    id: 8478398,
                    fullName: 'Kyle Connor',
                    link: '/api/v1/people/8478398',
                  },
                  playerType: 'Scorer',
                  seasonTotal: 3,
                },
                {
                  player: {
                    id: 8471218,
                    fullName: 'Blake Wheeler',
                    link: '/api/v1/people/8471218',
                  },
                  playerType: 'Assist',
                  seasonTotal: 4,
                },
                {
                  player: {
                    id: 8476392,
                    fullName: 'Adam Lowry',
                    link: '/api/v1/people/8476392',
                  },
                  playerType: 'Assist',
                  seasonTotal: 1,
                },
                {
                  player: {
                    id: 8476316,
                    fullName: 'Laurent Brossoit',
                    link: '/api/v1/people/8476316',
                  },
                  playerType: 'Goalie',
                },
              ],
              result: {
                event: 'Goal',
                eventCode: 'VGK748',
                eventTypeId: 'GOAL',
                description: 'Kyle Connor (3) Wrist Shot, assists: Blake Wheeler (4), Adam Lowry (1)',
                secondaryType: 'Wrist Shot',
                strength: {
                  code: 'EVEN',
                  name: 'Even',
                },
                gameWinningGoal: false,
                emptyNet: false,
              },
              about: {
                eventIdx: 285,
                eventId: 748,
                period: 3,
                periodType: 'REGULAR',
                ordinalNum: '3rd',
                periodTime: '14:22',
                periodTimeRemaining: '05:38',
                dateTime: '2023-04-28T04:39:50Z',
                goals: {
                  away: 1,
                  home: 4,
                },
              },
              coordinates: {
                x: 77,
                y: 0,
              },
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52',
              },
            },
          ],
          venue: {
            id: 5178,
            name: 'T-Mobile Arena',
            link: '/api/v1/venues/5178',
          },
          content: {
            link: '/api/v1/game/2022030175/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
    {
      date: '2023-04-28',
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022030136,
          link: '/api/v1/game/2022030136/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-28T23:00:00Z',
          status: {
            abstractGameState: 'Preview',
            codedGameState: '1',
            detailedState: 'Scheduled',
            statusCode: '1',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 0,
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 0,
              team: {
                id: 2,
                name: 'New York Islanders',
                link: '/api/v1/teams/2',
              },
            },
          },
          scoringPlays: [],
          venue: {
            name: 'UBS Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030136/content',
          },
        },
        {
          gamePk: 2022030116,
          link: '/api/v1/game/2022030116/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-28T23:30:00Z',
          status: {
            abstractGameState: 'Preview',
            codedGameState: '1',
            detailedState: 'Scheduled',
            statusCode: '1',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 0,
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 0,
              team: {
                id: 13,
                name: 'Florida Panthers',
                link: '/api/v1/teams/13',
              },
            },
          },
          scoringPlays: [],
          venue: {
            id: 5027,
            name: 'FLA Live Arena',
            link: '/api/v1/venues/5027',
          },
          content: {
            link: '/api/v1/game/2022030116/content',
          },
        },
        {
          gamePk: 2022030166,
          link: '/api/v1/game/2022030166/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-29T01:30:00Z',
          status: {
            abstractGameState: 'Preview',
            codedGameState: '1',
            detailedState: 'Scheduled',
            statusCode: '1',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 0,
              team: {
                id: 25,
                name: 'Dallas Stars',
                link: '/api/v1/teams/25',
              },
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 0,
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30',
              },
            },
          },
          scoringPlays: [],
          venue: {
            id: 5098,
            name: 'Xcel Energy Center',
            link: '/api/v1/venues/5098',
          },
          content: {
            link: '/api/v1/game/2022030166/content',
          },
        },
        {
          gamePk: 2022030156,
          link: '/api/v1/game/2022030156/feed/live',
          gameType: 'P',
          season: '20222023',
          gameDate: '2023-04-29T02:00:00Z',
          status: {
            abstractGameState: 'Preview',
            codedGameState: '1',
            detailedState: 'Scheduled',
            statusCode: '1',
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 3,
                type: 'league',
              },
              score: 0,
              team: {
                id: 21,
                name: 'Colorado Avalanche',
                link: '/api/v1/teams/21',
              },
            },
            home: {
              leagueRecord: {
                wins: 3,
                losses: 2,
                type: 'league',
              },
              score: 0,
              team: {
                id: 55,
                name: 'Seattle Kraken',
                link: '/api/v1/teams/55',
              },
            },
          },
          scoringPlays: [],
          venue: {
            name: 'Climate Pledge Arena',
            link: '/api/v1/venues/null',
          },
          content: {
            link: '/api/v1/game/2022030156/content',
          },
        },
      ],
      events: [],
      matches: [],
    },
  ],
}
