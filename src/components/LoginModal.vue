<template>

   <form @submit.prevent="handleSubmit" id='login-form' v-show="loginForm">
   
    <h2>Login</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" id='email-login' v-model="email" >

    <label for="password">Password:</label>
    <input type="password" name="password" id='password-login' v-model="password" >

    <button>Login</button>
    <div v-if="error">{{ error }}</div>
         <CloseBtn @close='closeModal' />
  </form>

</template>

<script setup>
import { ref }from 'vue'
import { useRouter} from 'vue-router'
import useLogin from '../composables/useLogin'
import CloseBtn from '@/components/CloseBtn.vue' 

const loginForm = ref(Boolean)



    function closeModal(){
      loginForm.value = false
    }
  

    const email = ref('')
    const password = ref('')

    const { login, error } = useLogin()
    const router = useRouter()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value){
        router.push('/admin')
        loginForm.value=false
      }
    }


</script>

<style scoped>


form {
  color: #211ebb;
  color: #730e20;
  display:flex;
  flex-direction:column;
  max-width:24em;
  margin: 0 auto;
  font-size: 1.3rem;
  background-color:#FFEDC0;
  padding:1em;
  position: absolute;
  top:14em;
  right:30em;
  border:#febf35 5px ridge;
  box-shadow: 3px 3px 20px 5px #0f0c03;
    
}

form > h2, button, label{
  margin-top:0;
  color:#4c2596;
  color: #730e20;
  
}

form > label{
  font-weight:500;
}

form > input{
  height:2rem;
  margin:0.5em;
  font-size: 1.2rem;
  padding:0.2em 0.75em;
  border: white 2px inset;
  background-color:whitesmoke;
}

form > button{
  max-width: 9em;
  margin:1em auto;
  font-size: 1.3rem;
  padding:0.5em 3.3em;
  border: white 2px outset;
  background-color:#f2cf8d;

}

form >button.close-btn{
  margin-right:1em;
} 

h2 { 
  clear:right;
}

</style>