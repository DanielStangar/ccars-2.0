<template>
    <transition name='page' appear> 
<div class="pricelist">
     <Nav />

     <h1>Overview of prices to our most common destinations</h1>
    
    <main>
     
    
     <PricingTable />
     
    </main>

    <footer>
    <button type="button" id='admin-entrance' @click='openLoginModal'>Website administration entry</button>
</footer>
 
    <LoginModal v-show="loginForm"/>
    
</div>
    </transition>

    </template>
    
    <script setup>
    import Nav from '@/components/Nav.vue'
    import PricingTable from '@/components/PricingTable.vue'
    import router from '../router'
    import LoginModal from '@/components/LoginModal.vue'
    import { ref } from 'vue'

    const loginForm = ref(false)

    function openLoginModal(){
          console.log('adminEntrance')
          loginForm.value = true
          const body = document.querySelector('main')
          body.style.opacity=0.25
        }

    

    </script>
    
    <style scoped>

    .pricelist {
        display:block;
    }
    
    main{
      padding:2em;
      padding-bottom: 1em;;
      margin: 0 auto;
       background-color: #730e20;
    }
    
    
    
    table{
      margin: 0 auto;
      margin-bottom:1em;
    }
    
    table, th, td {
        border: 1px solid #f2cf8d;
        font-size: 1.35rem;
        color:#f2cf8d;
      }
    td, th{
      padding: 0.5em;
    }
    
    h1{
        text-align: center;
        background-color:#FFEDC0;
        padding:0.75em 1em;
        color:#730e20;
        width:76%;
        margin:1em auto;
        font-weight: 400;
        border:#f2cf8d 3px ridge;
    }

    footer {
   
        padding: 0.5em;
        float:right;
        width:26em;
    }
    
   footer > button#admin-entrance{
        background-color: #730e20;
        color:#f2cf8d;
        text-decoration: none;
        font-size:1.15rem;
        font-weight: 200;
        padding:0.35em 1.7em;
        margin:0.3em 2.5em;
        border:#f2cf8d 2px ridge;
    }

    #admin-entrance:hover{
        color:white;
        border: white 2px ridge;
    }
    
   
    
    .page-enter-from{
        opacity: 0;
    
    }
    .page-enter-to {
        opacity: 1;
    }
    .page-enter-active{
        transition: all 2s ease-in-out;
    }
    
    
    </style>