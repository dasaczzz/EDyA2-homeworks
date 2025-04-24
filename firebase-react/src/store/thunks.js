import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import  { auth } from '../firebase/config'

export const registerAuth = (email, password) => {
  return async (dispatch) => {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    if(response) {
      await updateProfile(auth.currentUser, {
        displayName: 'admin',
        photoURL: ''
      })

      const {email} = response.user
      dispatch(register({email}))
    } else {
      throw new Error('login failed')
    }
  }
}