<template>
  <button @click="$emit('close', 'showCloseBtn')" id='close-btn' v-show='showCloseBtn' class='close-btn'>Close</button>
</template>

<script setup>
import { ref } from 'vue'

const showCloseBtn =ref(true)

  
</script>

<style scoped>
button.close-btn { 
background-color:#f2cf8d;
background-color: antiquewhite;
color: #730e20;
font-size: 0.9rem;
padding: 0.25em 1em;
float: right;
border: 2px ridge white;
}

</style>