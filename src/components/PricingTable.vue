<template>
  <table id='main-table'> 

        <tr class='header'> 
          
            <th>from</th>
            <th>Brighton</th>
            <th>Gatwick Airport</th>
            <th>Haywards Heath</th>
            <th>Heathrow Airport</th>
            
        </tr>

      <tr class="row" v-for="(price, index) in pricelist" :key="price.id" > 
         
           <td >{{price.place }}</td>
            <td>{{price.Brighton}}</td>
            <td>{{price.Gatwick}}</td>
            <td>{{price.Haywards}}</td>
            <td>{{price.Heathrow}}</td>
            
             
            <td class='select-td'> <input @click='selectRow' type='button' class='select-btn' value='Select'></td>  
            <td class='save-td'> <input type="button" value='Save' class='save-btn'  @click='handleUpdate(price)'> </td> 
            <td class='delete-td'>  <input type="button" value='Delete' class='delete-btn' @click="handleDelete(price)"></td>
            
        </tr>

    </table>

  
</template>

<script setup>
import getCollection from '@/composables/getCollection'

const { documents: pricelist } = getCollection('pricelist')


</script>

<style scoped>

main{
  margin:2em;
  background-color:#f2cf8d;
  background-color: #730e20;
  padding:1em;
}



table, th, td {
    border: 2px solid #730e20;
    border:#f2cf8d ridge 2px;
    font-size: 1.35rem;
    color:#f2cf8d; 
    
  }
td, th{
  padding: 0.75em;
}

th {
  vertical-align: middle;
}

.delete-td, .select-td, .save-td{
    display: none;
    align-items: center;
}


.save-btn, .delete-btn, .select-btn{
  font-size:1rem;
  color:#730e20;
  background-color: #f2cf8d;
  padding: 0.5em 1em;

}

</style>