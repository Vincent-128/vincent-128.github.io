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
  <td width="45px" style="padding-top: 5px">
    <img src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/{skater.teamId}.svg" alt="team icon" />
  </td>

  <td width="130px">
    <div>{skater.firstName}</div>
    <div class="last">{skater.lastName}</div>
  </td>

  <td width="35px">{skater.team}</td>
  <td width="20px" class="stat">{skater.stats.g + skater.stats.a}</td>
  <td width="20px" class="stat">{skater.stats.g}</td>
  <td width="20px" class="stat">{skater.stats.a}</td>
  <td width="20px" class="stat">{skater.record.at(-1).g}</td>
  <td width="20px" class="stat">{skater.record.at(-1).a}</td>
</tr>

<style>
  td {
    padding: 0;
  }
  .stat {
    text-align: center;
  }
  .last {
    font-weight: bolder;
  }
</style>
