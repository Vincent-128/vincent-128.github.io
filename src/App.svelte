<script>
  import Chart from './components/Chart.svelte'
  import Team from './components/Team.svelte'
  import { picks } from './data/picks'
  const names = Object.keys(picks).sort()
</script>

<div class="teams">
  {#each names as name (name)}
    <Team {name} />
  {/each}
</div>
<Chart />

<style>
  .teams {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1300px;
    justify-content: space-evenly;
  }
</style>
