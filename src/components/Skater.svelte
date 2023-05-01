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
    <img class="icon" src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/{skater.teamId}.svg" alt="team icon"/>
  </td>
  <td>
    <div>{skater.firstName}</div>
    <div class="last">{skater.lastName}</div>
  </td>
  <td>{skater.team}</td>
  <td class="stat">{skater.stats.g + skater.stats.a}</td>
  <td class="stat">
    <div>G: {skater.stats.g}</div>
    <div>A: {skater.stats.a}</div>
  </td>
  <td class="stat">
    <div>G: {skater.stats.g}</div>
    <div>A: {skater.stats.a}</div>
  </td>
</tr>

<style>
  td {
    padding: 4px;
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
