<template>
    <header>
      <Nav />
    
    </header>
    <h1>Price List Administration</h1>
      <main id='main'>
      
        <section>
    <p class='instruction'>
        On this page you can change the content of the price list table. Use the buttons belwo to 
        add row, delete row or change the content of any cell in the selected row.
      </p>
   
      <Controllers />

      <table id='main-table'> 
    
            <tr class='header'> 
              
                <th>from</th>
                <th>Brighton</th>
                <th>Gatwick Airport</th>
                <th>Haywards Heath</th>
                <th>Heathrow Airport</th>
                <th id='close-btn-th'><CloseBtn @close = "closeTable" /></th>
                
            </tr>
    
          <tr class="row" v-for="(price, index) in pricelist" :key="price.id" > 
             
               <td >{{price.place }}</td>
                <td>{{price.Brighton}}</td>
                <td>{{price.Gatwick}}</td>
                <td>{{price.Haywards}}</td>
                <td>{{price.Heathrow}}</td>
                
                 
                <td class='select-td'> <input @click='selectRow' type='button' class='select-btn' value='Select'></td>  
                <td class='save-td'> <input type="button" value='Save' class='save-btn'  @click='handleUpdate(price)'> </td> 
                <td class='delete-td'>  <input type="button" value='Delete' class='delete-btn' @click="handleDelete(price)"></td>
                
            </tr>
    
        </table>
    
        </section>
    
        <AuthBtns @openSignupUI="openSignupUI" />
    
    </main>
  
    <AddRowForm />
    <SignupModal v-show="signupModal" />
    <LoginModal v-show="loginForm"/>
    
  
    </template>
    
    <script setup>
    import Nav from '@/components/Nav.vue'
    import AddRowForm from '@/components/AddRowForm.vue'
    import Controllers from '@/components/Controllers.vue'
    import CloseBtn from '@/components/CloseBtn.vue'
    import SignupModal from '@/components/SignupModal.vue'
    import LoginModal from '@/components/LoginModal.vue'
    import AuthBtns from '@/components/AuthBtns.vue'
  
    
    import getCollection from '@/composables/getCollection'
    import getUser from '@/composables/getUser'
    
    //firebase imports
    import { db } from '../firebase/config'
    import { doc, deleteDoc, updateDoc, orderBy, query} from 'firebase/firestore'
    import { ref } from 'vue'
    
    const { user } = getUser()

    const loginForm = ref(Boolean)
    loginForm.value = false

    const signupModal = ref(Boolean)
    signupModal.value = false


    
    function openSignupUI(){
            console.log("open-signup")
            signupModal.value = true
          
        }
    
        
        const place = ref('')
        const { documents: pricelist } = getCollection('pricelist')
      
    
        const handleDelete = (price) => {
          const docRef = doc(db, 'pricelist', price.id )
          deleteDoc(docRef)
          
        }
     
         const handleUpdate = (price, data) => {
             const docRef = doc(db, 'pricelist', price.id )
             console.log ('handleUpdate click')
    
             const inputPlace = document.getElementById('input-place').innerText
             const newPlace = inputPlace
             console.log(newPlace)
             
             const inputBrighton = document.getElementById('input-Brighton').innerText
             const newBrighton = inputBrighton
    
             const inputGatwick = document.getElementById('input-Gatwick').innerText
             const newGatwick = inputGatwick
    
             const inputHaywards = document.getElementById('input-Haywards').innerText
             const newHaywards = inputHaywards
    
             const inputHeathrow = document.getElementById('input-Heathrow').innerText
             const newHeathrow = inputHeathrow
        
          let updatedPlace = newPlace
          let updatedBrighton = newBrighton
          let updatedGatwick = newGatwick
          let updatedHaywards =newHaywards
          let updatedHeathrow = newHeathrow
    
          data = {
            place: updatedPlace,
            Brighton: updatedBrighton,
            Gatwick: updatedGatwick,
            Haywards: updatedHaywards,
            Heathrow: updatedHeathrow,
          }
    
        updateDoc(docRef, data)
       
         .then(docRef => {
         console.log("A New Document Field has been added to an existing document");
    })
       .then(() => {
        //updateForm.reset()
        const rowOnEdit = document.querySelector('.onEdit')
        rowOnEdit.style.backgroundColor = '#f2cf8d'
          rowOnEdit.contentEditable=false
        
      })
      .then(()=>{
        location.reload()
      })
     .catch(error => {
         console.log(error);
     })
    
         }
    
       
    
        
      function selectRow(event){
          console.log('select row clicked')
          console.log(event)
           event.target.parentElement.classList.add('interim')
          const interim=document.querySelector('.interim')
          interim.parentElement.classList.add('onEdit')
    
          const rowOnEdit = document.querySelector('.onEdit')
          rowOnEdit.style.backgroundColor = '#f2cf8d'
          
          rowOnEdit.contentEditable=true
          rowOnEdit.childNodes[0].id = 'input-place'
          rowOnEdit.childNodes[1].id ='input-Brighton'
          rowOnEdit.childNodes[2].id = 'input-Gatwick'
          rowOnEdit.childNodes[3].id = 'input-Haywards'
          rowOnEdit.childNodes[4].id = 'input-Heathrow'
          rowOnEdit.childNodes[0].style.color='#211ebb'
          rowOnEdit.childNodes[1].style.color='#211ebb'
          rowOnEdit.childNodes[2].style.color='#211ebb'
          rowOnEdit.childNodes[3].style.color='#211ebb'
          rowOnEdit.childNodes[4].style.color='#211ebb'
          
          rowOnEdit.childNodes[5].style.display = 'none'
          rowOnEdit.childNodes[6].style.display='block'
    
        }
        
        function closeTable(){
                  
                const deleteButtons = document.getElementsByClassName('delete-td')
             
                for (let deleteBtn = 0; deleteBtn < deleteButtons.length; deleteBtn++) {
                deleteButtons[deleteBtn].style.display='none'
                
                const closeBtnTH = document.getElementById('close-btn-th')
                closeBtnTH.style.display='none'
                }
     
                const selectButtons =document.getElementsByClassName('select-td')
                for (let i = 0; i < selectButtons.length; i++) {
                    selectButtons[i].style.display='none'
                }
    
                const closeBtnTH = document.getElementById('close-btn-th')
                closeBtnTH.style.display='none'
        
        }
     
      
      
    </script>
    
    <style scoped>
    
   main , header, h1{
       background-color: #730e20;
    }
  
    
    h1{
      text-align: center;
       background-color:#FFEDC0;
       padding:0.75em 1em;
       color:#730e20;
       width:76%;
       margin:1em auto;
       font-weight: 400;
     border:#f2cf8d 3px ridge;
   }
    
    .instruction {
      color:#f2cf8d;
      border:#f2cf8d ridge 2px;
      font-size: 1.25rem;
      max-width:41em;
    margin:1em auto;
    margin-bottom: 2.5em;
    padding:1em;
    }
    
    main{
      display:flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly; 
      margin:0;
      background-color: #730e20;
      padding-top:0.5em;
      padding-bottom:10em
    }
    
    #close-btn-th {
      display:none;
      height:1.2em;
      padding:1em;
    }
    
    table{
      margin-top: 1em;
    }
    
    table, th, td {
        border:#f2cf8d ridge 2px;
        font-size: 1.25rem;
        color:#f2cf8d; 
        
      }
    td, th{
      padding: 0.75em;
    }
    
    th {
      vertical-align: middle;
    }
    
    .delete-td, .select-td, .save-td{
        display: none;
        align-items: center;
    }
    
    
    .save-btn, .delete-btn, .select-btn{
      font-size:1rem;
      color:#730e20;
      background-color: #f2cf8d;
      padding: 0.5em 1em;
    
    }
    
    .controllers {
      margin-left:1em;
      margin-top: 1.25em;
    }
    
    </style>