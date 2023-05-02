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
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  })
</script>

<div class="container" style="position: relative">
  <canvas class="chart" bind:this={ctx} />
</div>

<style>
  .container {
    padding: 20px;
    position: relative;
    max-width: 1100px;
    height: 50vh;
    margin: auto;
  }
</style>
