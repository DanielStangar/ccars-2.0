<template>
  
<div class="modal" id="modal">
    <button id="close-btn" @click="closeModal">Close</button>
    <iframe  src="https://www.youtube.com/embed/nzOraaLL7_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
</div>
</template>

<script setup>

    function closeModal(){
            const modal = document.getElementById('modal')
            modal.style.animation = "modalClose 2s ease-in-out forwards";
            // location.reload()
            
            setTimeout(() =>  location.reload(), 500);
            clearTimeout()
        }
 

</script>

<style>


.modal{
    animation: modalOpen 2s ease-in-out;
    display:none;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */  
}

iframe {
    position: absolute;
    left:12em;
    right:12em;
    width:70%; 
    height:70%;
    border:2px ridge #f2cf8d;
    border-radius: 0.5em;
}

#openModal{
    font-size: 1rem;
    min-width: 50%;
}

.modal button{
    position: absolute;
    top: 3em;
    right:7em;
    font-size: 1rem;
    padding:0.5em 1em;
    border-radius:0.5em;
}

@keyframes modalClose {
    from {opacity: 1;}
    to {opacity: 0;}
}

@keyframes modalOpen {
    from {opacity: 0;}
    to {opacity: 1;}
}

</style>