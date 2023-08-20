import { ref} from 'vue'

//firebase imports
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const user = ref(auth.currentUser) 

//auth changers
onAuthStateChanged(auth, (_user)=>{
    console.log('User state changed. Current user is:', _user)
    user.value = _user
    if (_user = null){
        location.refresh()
    }

})

const getUser =() => {
    return { user}
}

export default getUser