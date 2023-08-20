<template>

<section class="controllers">

    <button @click='addRowUI'>Add Row</button>
    <button @click="deleteRowUI">Delete Row</button>
    <button @click='editRowUI'>Edit Row</button>
 


</section>

</template>

<script setup>
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
// import  getUser  from '../composables/getUser'
import { useRouter} from 'vue-router'
// import { watchEffect} from 'vue'



    
        function addRowUI(){
            const addRowForm = document.querySelector('.add-row')
            addRowForm.style.display = 'block'
            const main = document.getElementById('main')
            main.style.opacity=0.5   
        }

        function deleteRowUI(){
            const deleteButtons = document.getElementsByClassName('delete-td')
     
            for (let deleteBtn = 0; deleteBtn < deleteButtons.length; deleteBtn++) {
            deleteButtons[deleteBtn].style.display='block'
            const closeBtnTH = document.getElementById('close-btn-th')
            closeBtnTH.style.display='block'
        }
    }

        function editRowUI(){
            console.log("Edit")
            const selectButtons =document.getElementsByClassName('select-td')
            for (let i = 0; i < selectButtons.length; i++) {
                selectButtons[i].style.display='block'
            }

            const closeBtnTH = document.getElementById('close-btn-th')
            closeBtnTH.style.display='block'
        }


   
      

</script>

<style scoped>

.controllers {
  display:flex;
  flex-direction:row;
  margin:0.5em;
  border:2px solid #f2cf8d;
   color:#730e20;
}

.controllers > p {
    border:2px solid #f2cf8d;
    padding: 1em 0.5em;
    margin-top:0;
}

.controllers > button, button {
    color:#730e20;
    background-color: #f2cf8d;
  border: 2px solid #730e20;
  margin:0.65em;
  font-size:1.2rem;
  padding:0.5em;
  /*box-shadow: 10px 10px 3px 2px rgb(56, 9, 7);*/
  border-radius:0.3em;
  min-width:10em;
}

.controllers > button:hover{
    background-color: rgb(242, 235, 235);
    color: #730e20;
}

.auth {
    border: 2px ridge white;
}

.logout-btn{
    background-color:whitesmoke;
    margin-top:0;
}

.logout-btn:hover{
    background-color: rgb(242, 235, 235);
    background-color: #f2cf8d;
    color: #730e20;
    color:green;
}

h3, p { 
    color:#f2cf8d;
}

</style>