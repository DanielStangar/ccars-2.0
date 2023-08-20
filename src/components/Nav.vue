<template>
    <header>
        <img src="../assets/logo.jpg" class='logo' @click="goToHomePage">
           <h1>Cavendish Cars</h1>
       <nav>
       <router-link to="/">Home</router-link>  
       <router-link to="/about">About</router-link>
       <router-link to="/pricelist">Prices</router-link> 
       <router-link to="/contact">Contact</router-link>
       
       </nav>
   </header>
</template>

<script setup>
  import router from '../router'

const goToHomePage = () => {
    router.push('/')
}

</script>

<style scoped>

h1 {
    color:#febf35;
 }
 
 header{
     display:flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-evenly;
     border: 3px solid #f2cf8d;
     margin: 1em 3em;
 }
 
 .logo{
     width:5em;
 }
 nav{
     display:flex;
     flex-direction: row;
     float: right;
     /*background-color:#f2cf8d;*/
     margin:1em 2em;
     padding:0.35em;
 }
 
 nav a{
     background-color: #f2cf8d;
     color: #730e20;
     text-decoration: none;
     font-size:1.25rem;
     font-weight: 200;
     padding:0.35em 1.7em;
     margin:0.25em 0.5em;
     border: white 2px outset;
 }
 
 a:hover, .contacts > a:hover{
     background-color: rgb(242, 235, 235);
     color: #730e20;
 }
 
 nav a.router-link-exact-active {
   color: #211ebb;
   font-weight:700;
 }

</style>