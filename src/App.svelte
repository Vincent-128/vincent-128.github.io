<script>
  import Chart from './components/Chart.svelte'
  import Team from './components/Team.svelte'
  import { picks } from './data/picks'
  const names = Object.keys(picks).sort()
</script>

<div>
  <div class="teams">
    {#each names as name (name)}
      <Team {name} />
    {/each}
  </div>
  <Chart />
</div>

<style>
  .teams {
    width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 50px;
    column-gap: 100px;
    padding-bottom: 50px;
  }
</style>
