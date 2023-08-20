<template>
    <transition name='page' appear> 
    <div class="'contact">
    
    
    <div>
        <Nav />
        <h1>The ways to contact us</h1>
        <main> 
            <section class="panel"> 
                <h2>Phones, email, address</h2>
                <h3>Phone: 01825 48 25 48</h3>
                <h3>Phone: 01342 42 42 42</h3>
                <br>
                <h3>Email: bookings@cavendischcars.co.uk</h3>
               <br>
                <h3>Postal address:</h3>
                <p>CavendishCars</p>
                <p>4 Cricketfield</p>
                <p>BN8 4LL, Newick, Lewes</p>
        
            </section>

            <section class="form" > 
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
        
      
        </main>
    </div>
</div>
</transition>
</template>

<script setup>
import Nav from '@/components/Nav.vue'




</script>

<style scoped>

h1{
    padding:0.5em;
    text-align: center;
    color: #730e20;
    font-weight: 500;
    background-color:#FFEDC0;
    border: 3px ridge #febf35;
    width:60%;
    margin:1em auto;
}

section.form > h2{
    text-align: center;
    color: #730e20;
    font-weight: 600;
    width:70%;
    padding:0.3em;
    margin:0 auto;
    margin-top: 0.1em;;
  }

main{
    display:flex;
    flex-direction: row;
    align-items: space-evenly;
    max-height: 90vh;
    margin-top: 0;
}

section{
    border: 3px ridge #febf35;
    margin-top: 0;
}

.panel, .form{
    width: 40%;
    background-color: #f2cf8d;

    margin: 2em auto;
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
    margin-top:0;
    border:none;
    background-color: #f2cf8d;
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