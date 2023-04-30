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
    <td>{skater.name}</td>
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
    .stat {
      text-align: center;
    }
  </style>