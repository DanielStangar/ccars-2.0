<template>
  <transition name='page' appear> 
  <div class="home" ref="home">
  
      <Nav />

      <div class="lower-panel">
      
        <h2>Sussex area private hire car service</h2>
          
      </div>
       
    <main>
       
      <div class="row">
              
          <div class="column"  >
          <p>If you want to travel today, give us 
          a call to check our availability.</p>
          <a id='callnowButton' href="tel:01342424242" >Call Now</a>
          <p>The button above is meant for customers who are on hurry or need to give us a quick call. 
              If you travel tomorrow or even later, please use our email or the text message facility.</p>
              <h4 id="card-payments-note">CARD PAYMENTS ACCEPTED</h4>
          </div>
  
  
          <div class="column">
  
          <p>For advanced booking or a non-urgent query, please use email. It is usually answered same day.</p>
          
          <a @click="openContactForm()">Email</a>
          
          <p> 
              As you can imagine, sometimes we are busy driving our customers and  
              that's why the email has become the best way for contacting us.</p>
          
              
          </div>
      
          <div class="column" >
          <p>Feel free to use the text message at any time.</p>
          
          <a id='sms-button' href="sms:07946254028" >Text Message</a>
          <p>This facility is here in case you do not have your computer handy. 
              Just let us know when do you need to travel, from where, and what is your destination,
              and we will come back to you as soon as possible.</p>   
          </div>
      
         <div class="column" >
          
          <h3>CAVENDISH CARS WENT ELECTRIC</h3>
          <p>As a special treat for our customers and natural environment we have recently procured Tesla car Model Y. 
              You can click below to see its 92 seconds long video presentation.</p>
              <a id="openModal" @click='openModal' >Tesla Model Y<br> presentation</a>
          </div>
     
  </div>
      
  </main>

   <div class="bottom-panel">
      <h2>AREAS OF SERVICE</h2>
  
      <p>South Chailey, North Chailey, Newick, Barcombe, Piltdown, Danehill, Fletching, Haywards Heath, etc.</p>
     
  
  </div>
  
  <Modal />

 
  </div>

</transition>
<transition name='page' appear> 
<ContactForm v-show="contactForm"/>
</transition>



  </template>
  
  <script setup>
    import { ref } from 'vue'
  import Nav from '@/components/Nav.vue'
  import Modal from '@/components/Modal.vue'
  import router from '../router'
  import ContactForm from '@/components/ContactForm.vue'

 

  const contactForm = ref(false)
  const home = ref(null)
 

  function openContactForm(){
    contactForm.value = true
    home.value.style.opacity = '0.1'
  }


const goToAdmin = () => {
    console.log('route to admin')
    router.push('/admin')
}
  

function openModal(){
          console.log("open modal")
          const modal = document.querySelector('#modal')
          modal.style.display = 'block'
      }
  
  </script>
  
  <style scoped>

  section.form {
    position:absolute;
    top:5em;
    left:30em;
  }
    
  
  
  .lower-panel{
      background-color: #f2cf8d;
      background-color:#FFEDC0;
  
      color:#730e20;
      text-transform:uppercase;
      
      border:#f2cf8d 3px ridge;
      border:#a67d03 3px ridge;
      text-align: center;
      padding:0.5em;
      margin-top: 1.5em;
      text-shadow: 5px 5px 15px rgb(210, 210, 194);
  }
  
  
  main{
      display:flex;
      align-items:baseline;
      background-color: #f2cf8d;
      background-color: #a67d03;
      background-color: #febf35;
      background-color: #FFEDC0;
      /* background-color: none; */
      margin-top:1.5em;
      padding: 1.5em;
      border:#f2cf8d 3px ridge;
      border:#a67d03 3px ridge;
  }
  
  .row{
      display:flex;
      flex-direction:row;
  }

 
  
  p, h2, h3, h4 {
      text-shadow: 2px 2px 8px rgb(231, 220, 220);
  }
  
  .column{
      margin:1em;
      border:#f2cf8d 3px ridge;
      border:#730e20 3px ridge;
      border:#c10b2d 3px ridge;
      color:#730e20;
      font-size: 1.2rem;
      width:23%;
      display:flex;
      flex-direction:column;
      align-items:center;
      padding:0.5em;
  }
  
  .column h4, h3{
      padding-left:0.5em;
      text-align: center;
  }

  .column p {
    padding: 0em;
    margin:0.6em;
    text-align: center;
  }
  
  .column a {
      border:#f2cf8d 3px ridge;
      padding:1em 2.5em;
      font-size:1.1rem;
      background-color: #f2cf8d;
      background-color:#730e20;
      color:#730e20;
      color:#f2cf8d;
      font-weight: 400;
      border:white 2px outset;
      box-shadow: -1px -1px 15px #a67d03;
      box-shadow: -1px -1px 5px #e6e4de;
      box-shadow: 3px 3px 10px rgb(203, 192, 192);
      text-align:center;
      padding:0.5em 1.7em;
      margin:0.35em 1.8em;
      text-decoration: none;
  }
  
  .column a:hover{
 
      border:white 3px outset;
  }
  
  .modal button{
      position: absolute;
      top: 3em;
      right:7em;
      font-size: 1rem;
      padding:0.5em 1em;
      border-radius:0.5em;
  }
  
  .bottom-panel{
      background-color: #f2cf8d;
      background-color:#FFEDC0;
      color:#730e20;
      border:#f2cf8d 3px ridge;
      border:#a67d03 3px ridge;
      text-align: center;
      padding:0.5em;
      margin-top: 1.5em;
      margin-bottom: 0.2em;
  }

   a {
    margin:1em 0;
    padding: 0.3em 1em;
    color:#FFEDC0;
    border: #FFEDC0 1px ridge;
    float:right;

  }
   a:hover{
    box-shadow: 2px 2px 5px #262401;
    color:#e6e4de;
    border: #e6e4de 2px ridge;
  }
  
  
  @keyframes modalOpen {
      from {opacity: 0;}
      to {opacity: 1;}
  }
  @keyframes modalClose {
      from {opacity: 1;}
      to {opacity: 0;}
  }
  
  .page-enter-from{
      opacity: 0;
  
  }
  .page-enter-to {
      opacity: 1;
  }
  .page-enter-active{
      transition: all 3s ease-in-out;
  }
  
  
  </style>
