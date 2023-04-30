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

<table>
  <tr>
    <td class="name">{name}</td>
    <td />
    <td>T</td>
    <td>G</td>
    <td>A</td>
  </tr>

  {#each picks[name].skaters as id (id)}
    <Skater {id} />
  {/each}

  <tr>
    <td />
    <td />
    <td>T</td>
    <td>G</td>
    <td>A</td>
    <td>W</td>
    <td>S</td>
  </tr>

  {#each picks[name].goalies as id (id)}
    <Goalie {id} />
  {/each}

  <tr>
    <td />
    <td />
    <td>{total}</td>
  </tr>
</table>

<style>
  td {
    font-weight: 900;
    padding: 8px 4px 0 4px;
    text-align: center;
  }
  .name {
    text-align: start;
  }
</style>
