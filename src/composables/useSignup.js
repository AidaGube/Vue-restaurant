import { ref } from 'vue'
import { auth } from '@/firebase/config'
const error = ref(null)

const signup = async (email, password, name) => {
  error.value = null

  try {
    const response = await auth.createUserWithEmailAndPassword(email, password)

    if (!response) {
      throw new Error('Невозможно провести регистрацию')
    }
    await response.user.updateProfile({ displayName: name })
    error.value = null
    console.log(response.user)
    
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup