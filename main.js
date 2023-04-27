const main = async () => {
  console.log('Started')
  const res = await fetch(
    'https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&isGame=false&start=0&limit=100&factCayenneExp=gamesPlayed%3E%3D1&cayenneExp=gameTypeId%3D3+and+seasonId%3C%3D20222023+and+seasonId%3E%3D20222023'
  )
  const json = await res.json()
  console.log(json)
}

main()
