<template>
    <section class="form" v-show="contactForm"> 
        <CloseBtn @close = 'closeForm'/>
        <h2>The most efficient contact method</h2>
        <form action="https://formsubmit.co/dstangar@gmail.com" method="POST" >
            <label for="name">Your name:</label>
            <input type="text" name="name">
            <label for="email">Email:</label>
            <input type="email" name="email">
            <label for="message">Your message:</label>
           <textarea rows="10" name="message">

           </textarea>
           <input type="submit" id="submitBtn" >
           
        </form>
    </section>
</template>

<script setup>
import CloseBtn from '@/components/CloseBtn.vue'
import { ref } from 'vue'

const contactForm = ref(Boolean)

function closeForm(){
    contactForm.value = false
    location.reload()
}

</script>

<style scoped>


.panel, .form{
    width: 40%;
    background-color: #f2cf8d;

    margin: 3em auto;
    color:#730e20;
    padding:1em;
     
}

.form{
  text-align: left;
}
.form > h2{
  text-align: center;
}

.panel > h2 {
    margin-bottom:1em;
}


form{
    display:flex;
    flex-direction: column;
    
   
}

 input, textarea{
    padding:0.5em;
    font-size: 1rem;
    background-color:#febf35;
    background-color:antiquewhite;
    outline:none;
    border: 2px ridge antiquewhite;
}
label{
    margin:0.5em 0;
}

input[type="text"]:focus, input[type='email']:focus,textarea:focus{
    border: 2px solid #730e20;
    outline: none;
    background-color:antiquewhite;
}
#submitBtn {
    padding:0.5em;
    width:50%;
    color:#730e20;
    background-color: #f2cf8d;
    margin: 1em auto;
    font-size: 1.2rem;
    box-shadow: 5px 5px 10px gray;
}



</style>