import { ref, watchEffect } from 'vue'

//firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

const getCollection = (c) => {
    const documents = ref(null)

    //collection reference
    let colRef = collection(db, c)
    // c in collection is instead of "books" or "pricelist" 
    //to make it reusable for various FB collections

    const unsub = onSnapshot(colRef, snapshot => {
        //snapshot is a function sending a snapshot object
        let results = []
        snapshot.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id})
        })

        //update values
        documents.value = results
        

        })
    

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { documents }
   

}

export default getCollection 