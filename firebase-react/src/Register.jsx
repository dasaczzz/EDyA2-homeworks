import { useDispatch } from 'react-redux'
import { registerAuth } from './store/thunks'
import { useState } from 'react'

export const Register = () => {

  const dispatch = useDispatch()

  const [formState, setFormState] = useState({
    email: 'daniel.sanchez_col@uao.edu.co',
    password: 'admin'
  })

  const handleInput = (e) => {
    const {name, value} = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    dispatch(registerAuth(email, password))
  }

  return (
    <>
      <h1>register</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input type="email" name='email' value={email} onChange={handleInput}/>
        <input type="password" name='password' value={password} onChange={handleInput} />
        <button type='submit'>register</button>
      </form>
    </>
  )
}
