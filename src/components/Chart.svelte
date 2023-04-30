<script>
  import { onMount } from 'svelte'
  import { chartData } from '../store'
  import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Legend, Colors, Tooltip } from 'chart.js'

  let ctx
  let chart

  $: if (chart) {
    chart.data = $chartData
    chart.update()
  }

  onMount(() => {
    Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Legend, Colors, Tooltip)
    chart = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: { labels: [], datasets: [] },
    })
  })
</script>

<canvas class="chart" bind:this={ctx} />

<style>
  .chart {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }
</style>
