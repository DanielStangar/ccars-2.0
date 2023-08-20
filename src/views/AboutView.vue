<template>
  <transition name='page' appear> 
  <div class="about">
   

    <Nav />


 
    <main>
      <h2>Cavendish Cars - Private Hire Car Service </h2>
      <div class="text-container">
      <div class="column">
      
      <p>Welcome to Cavendish Cars, a premium taxi business located in the charming village of Newick, Sussex.<br> We pride ourselves on providing reliable and luxurious transportation services to our clients. Our owner, Nick Curran, has a passion for sustainable transportation and has chosen to operate an all-electric fleet with the Tesla Model Y as our flagship vehicle.
        At Cavendish Cars, we understand the importance of punctuality, professionalism, and comfort. We go the extra mile to ensure that our clients arrive at their destinations safely, comfortably, and on time. Whether you need transportation to the airport, a business meeting, or a special event, our team is dedicated to providing the highest level of service.
      <br>Our Tesla Model Y is a state-of-the-art vehicle that offers unparalleled comfort, luxury, and efficiency. 
      </p>
      </div>
      <div class="column">
       <p> 
        With its advanced technology and sustainable design, our Tesla Model Y is the perfect choice for clients who prioritize environmental responsibility and premium transportation.<br>
        We understand that each client has unique needs, which is why we offer customized services tailored to your specific requirements. Our experienced drivers are knowledgeable about the local area and can provide recommendations for restaurants, tourist attractions, and more.
        We take great pride in our community and strive to make a positive impact on the environment. By choosing Cavendish Cars, you can enjoy luxurious and comfortable transportation while also contributing to a more sustainable future.
        Thank you for considering Cavendish Cars for your transportation needs. We look forward to serving you soon.</p>
      </div>

    </div>
  </main>
  
  </div>
  </transition>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
</script>

<style scoped>
main{

  background-color: #f2cf8d;
  background-color:#FFEDC0;
  color:#730e20;
  margin:1.5em auto;
  padding: 1.5em 5em;
  max-width:70%;
  
  border: 2px ridge #f2cf8d;
  border: 4px ridge #a67d03;
  font-size: 1.2rem;;
}
.text-container{
  display:flex;
  flex-direction:row;
}
.column {
  max-width: 40%;
  margin: 3em;
}

h2{
  text-align: center;
  color: #730e20;
  font-weight: 600;
  background-color:#FFEDC0;
}

p {
text-align:left;
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
