import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const InputPokedex = ({setPokeSearch}) => {


  // const {handleSubmit, register} = useForm()
  // const navigate = useNavigate()
  // const submit = (data) => {
  //   console.log(data)
  //   navigate(`/pokedex/${data.pokemon}`)
  // }

  const changeInput = e => {
    setPokeSearch(e.target.value)
  }
  return (
    <form>
        <input type="text" placeholder="Searh Pokemon" onChange={changeInput}/>
    </form>
  )
}

export default InputPokedex