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
    gap: 30px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: center;
  }
</style>
