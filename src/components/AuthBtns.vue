<template>
    <div class="auth">
      

        <button class='login-btn' @click="openLoginUI">Login</button>
        <button class='logout-btn' @click='logout'>Logout</button>
        <button @click='openSignupUI'>New User Sign Up</button>
    </div> 
</template>

<script setup>
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useRouter} from 'vue-router'

const router = useRouter()

const emit = defineEmits(['openSignupUI'])

function openSignupUI() {
    emit('openSignupUI')
}


const logout = ()=> {
            signOut(auth)
            //currentUser = 'no user logged in'
            router.push('/')
            console.log('user was just logged out')
        }




function openLoginUI(){
            console.log("open-login")
            const loginForm = document.getElementById('login-form')
            loginForm.style.display='flex'
        }
      

</script>

<style scoped>

.auth {
    border: 2px ridge #f2cf8d;
    display:flex;
    flex-direction: column;
    margin-top: 1em;
}

.auth > h4, p{
    color:#f2cf8d;
    text-align: center;
    margin:0.6em;
}

.auth > button, button {
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

.auth > button:hover{
    background-color: rgb(242, 235, 235);
    color: #730e20;
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

</style>