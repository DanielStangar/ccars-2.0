<template>

<form @submit.prevent ="handleSubmit" class='add-row' id='add-row' >
    <CloseBtn @close = "closeAddRow"/>

    
<h3>Make sure to input data into each slot. The table will display exactly what you'll write in it. 
    <br>Worst case scenario: you will need to delete the row and write it again. </h3>

            <input type='text' name='place' v-model="place" placeholder='from where?'>
            <input type='text' name='Brighton' v-model="Brighton" placeholder='Brighton'>
            <input type='text' name='Gatwick' v-model="Gatwick" placeholder='Gatwick'>
            <input type='text' name='Haywards' v-model="Haywards" placeholder='Haywards Heath'>
            <input type='text' name='Heathrow' v-model="Heathrow" placeholder='Heathrow'>
            <button>Add Row</button>

        
</form>

</template>

<script>
import CloseBtn from '@/components/CloseBtn.vue'

import { ref } from 'vue'

//firebase imports
import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

export default {
components: { CloseBtn},
    setup(){
        const place=ref('')
        const Brighton=ref('')
        const Gatwick=ref('')
        const Haywards=ref('')
        const Heathrow=ref('')


        const handleSubmit = async () => {
            const colRef = collection(db, 'pricelist')

            await addDoc(colRef,{
                place: place.value,
                Brighton: Brighton.value,
                Gatwick: Gatwick.value,
                Haywards: Haywards.value,
                Heathrow: Heathrow.value,

              
            })
            //reset the form fields
            place.value = ''
            Brighton.value = ''
            Gatwick.value = ''
            Haywards.value = ''
            Heathrow.value = ''

             const addRowForm = document.querySelector('.add-row')
            addRowForm.style.display = 'none'

            const main = document.getElementById('main')
            main.style.opacity=1

        }

        return { handleSubmit,place, Brighton, Gatwick, Haywards, Heathrow, CloseBtn}
    },

    methods: {
        closeAddRow(event){
            const addRow = document.getElementById('add-row')
            addRow.style.display = 'none'  
            location.reload()
            
        }

    }

}
</script>

<style scoped>

button.close-btn{
    /* position: absolute;
    right:0.1em; */
    float: right;
    background-color: #f2cf8d;

    
    
}
.add-row {
    display:none;
    margin: 2em auto;
    padding:1em;
    background-color:#f2cf8d;
    position: absolute;
    top:18em;
    left:10em;
    border:#730e20 2px solid;
    border-radius:0.5em;
    
  box-shadow: 5px 5px 15px 5px rgb(56, 9, 7);
  
}

h3{ 
    color: #730e20;
}

input { 
    max-width:7em;
    padding:0.5em 1em;
    font-size: 1rem;
    margin:2em 1em;
    border:2px solid #730e20;
}

button { 
    font-size:1rem;
    padding:0.5em;
    min-width:9em;
    border:2px solid #730e20;
    color:#730e20;
    color: #f2cf8d;
    background-color: #f2cf8d;
    background-color:#730e20;
    margin:.5em;
}



</style>