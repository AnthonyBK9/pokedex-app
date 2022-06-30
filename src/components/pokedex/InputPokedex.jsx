import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const InputPokedex = () => {


  const {handleSubmit, reset, register} = useForm()
  const navigate = useNavigate()
  const submit = (data) => {
    console.log(data)
    navigate(`/pokedex/${data.pokemon}`)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Searh Pokemon" {...register('pokemon')}/>
        <button>Searh</button>
    </form>
  )
}

export default InputPokedex