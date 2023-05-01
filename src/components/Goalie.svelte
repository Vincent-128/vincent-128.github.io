<script>
  import { onDestroy } from 'svelte'
  import { playerData } from '../store'

  export let id
  let skater

  const unsubscribe = playerData.subscribe(value => {
    skater = value.find(p => p.id === id)
  })

  onDestroy(unsubscribe)
</script>

<tr>
  <td>
    <img class="icon" src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/{skater.teamId}.svg" alt="team icon" />
  </td>
  <td>
    <div>{skater.firstName}</div>
    <div class="last">{skater.lastName}</div>
  </td>
  <td>{skater.team}</td>
  <td class="stat">{skater.stats.g + skater.stats.a + skater.stats.w + skater.stats.s * 2}</td>
  <td class="stat">{skater.stats.g}</td>
  <td class="stat">{skater.stats.a}</td>
  <td class="stat">{skater.stats.w}</td>
  <td class="stat">{skater.stats.s}</td>
</tr>

<style>
  td {
    padding: 0 4px;
  }
  .icon {
    height: 30px;
  }

  .stat {
    text-align: center;
  }
  .last {
    font-weight: bolder;
  }
</style>
