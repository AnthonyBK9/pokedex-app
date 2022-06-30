import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'


const InputHome = () => {

  const {handleSubmit, reset, register} = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = data => {
    const user = data.nameUser
    if (user.trim().length > 2) {
      dispatch(setNameGlobal(user))
      reset({
        nameUser: ''
      })
      navigate('/pokedex')
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="poke-form">
      <input className="poke-input" placeholder='Give me your name to start' type="text" {...register('nameUser')} />
      <button className="poke-btn">Go</button>
    </form>
  )
}

export default InputHome