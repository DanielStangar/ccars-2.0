<template>
 
<div class="container" v-show="signupContainer">
  <section class="super-pw" v-show="superPwForm">
    <h2>In order to signup a new administrator<br>please enter the admin super-password</h2>
    <input type="password" placeholder="administrative super-password" required id="superpwInput">
    <button @click="verifyPassword">Verify</button>
    <CloseBtn @close ='closeSuperPWModal'/>

</section>

  <form @submit.prevent="handleSubmit" class='signup-form' id='signup-form' v-if="signupForm" >
  

      
  
    <h2>Sign up Form</h2>
    <p>The verification super-password was correct. Please, enter the email and password for a new user.</p>
    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" id='email-signup' required>

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" id='password-signup' required>

    <button>Sign up</button>
    <div v-if="error">{{ error }}</div>
     <CloseBtn @close ='closeSignupModal'/>

  
</form>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSignup from '../composables/useSignup.js'
import CloseBtn from '@/components/CloseBtn.vue'
import router from '../router'

const superPwForm = ref(Boolean)
const signupForm = ref(Boolean)
signupForm.value = false


function verifyPassword(){
  console.log("Verify Password")
 
  const superpwInput = document.getElementById("superpwInput")
  console.log(superpwInput.value)
  const password = 'test2'
    if (superpwInput.value === password ){
      console.log("correct")
      signupForm.value = true
      superPwForm.value = false
    } else { console.log("wrong")}
}

const signupContainer= ref(Boolean)

function closeSuperPWModal(){
  console.log("Close SuperPW Modal")
  signupContainer.value= false
  router.push('/admin')
}

function closeSignupModal(){
      console.log("close modal fired")
      const signupForm = document.getElementById('signup-form')
      const emailInput = document.getElementById('email-signup')
      const passwordInput = document.getElementById('password-signup')
      passwordInput.required=false
      emailInput.required = false
      signupForm.style.display = 'none'
      const body = document.querySelector('main')
      body.style.opacity=1
      location.reload()

       
      }

      const email = ref('')
        const password = ref('')

      const { signup, error } = useSignup()
       // const router = useRouter()

        const handleSubmit = async () => {
            await signup(email.value, password.value)

            if (!error.value){
                router.push('/admin')
                signupForm.value = false
            }
        }



    
</script>

<style scoped>

.container{
  position: absolute;
  top:14em;
  right:30em;
  display:flex;
  flex-direction: column;
 
  width:30em;
  padding:0.5em
}

section.super-pw{
  display:flex;
  flex-direction:column;
  margin: 0 auto;
  font-size: 1.3rem;
  background-color:#FFEDC0;
  padding:1em;
  width:80%;
  border:#febf35 5px ridge;
}

.super-pw > h2 {
  font-size:1.3rem;
  color: #730e20;
}

.super-pw > button.close-btn{
  background-color:antiquewhite;

  text-align: center;
  border: 2px white ridge;
}


form.signup-form {
  color: #730e20;
  display:flex;
  flex-direction:column;
  width: 82%;
  margin: 0 auto;
  font-size: 1rem;
  background-color:#FFEDC0;
  padding:1em;

  border:#febf35 5px ridge;
  box-shadow: 3px 3px 20px 5px #0f0c03;
  max-height: 24em;
    
}

form > h2, button, label, p{
  margin-top:0;
  color: #730e20;
  text-align: center;
  
}



form > label{
  font-weight:500;
}

form > input, .super-pw >input{
  height:2rem;
  margin:0.5em;
  font-size: 1.2rem;
  padding:0.2em 0.75em;
  border: white 2px inset;
  background-color:whitesmoke;
}

form > button, .super-pw > button{
  max-width: 12em;
  margin:1em auto;
  font-size: 1.3rem;
  padding:0.5em 3.3em;
  border: white 2px outset;
  background-color:#f2cf8d;

}

form >button.close-btn{
  margin:0 auto;
} 


</style>