<script>
  import Skater from './Skater.svelte'
  import { picks } from '../data/picks'
  import Goalie from './Goalie.svelte'

  import { chartData } from '../store'
  import { onDestroy } from 'svelte'
  export let name

  let total = 0

  const unsubscribe = chartData.subscribe(value => {
    const test = value.datasets.find(p => p.label === name)
    if (test) {
      total = test.data.at(-1)
    }
  })

  onDestroy(unsubscribe)
</script>

<table class="team">
  <tr>
    <td rowspan="2" colspan="3" class="name">{name}</td>
    <td rowspan="2" class="center">P</td>
    <td colspan="2" class="center">Total</td>
    <td colspan="2" class="center">Live</td>
  </tr>

  <tr>
    <td class="center">G</td>
    <td class="center">A</td>
    <td class="center">G</td>
    <td class="center">A</td>
  </tr>

  {#each picks[name].skaters as id (id)}
    <Skater {id} />
  {/each}

  <tr>
    <td />
    <td />
    <td />
    <td class="center">P</td>
    <td class="center">W</td>
    <td class="center">S</td>
    <td class="center">G</td>
    <td class="center">A</td>
  </tr>

  {#each picks[name].goalies as id (id)}
    <Goalie {id} />
  {/each}

  <tr>
    <td />
    <td />
    <td />
    <td colspan="4">{total}</td>
  </tr>
</table>

<style>
  td {
    font-weight: bolder;
    padding: 0;
  }
  .center {
    text-align: center;
  }
</style>
