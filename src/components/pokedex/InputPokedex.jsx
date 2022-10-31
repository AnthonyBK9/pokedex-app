import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const InputPokedex = ({setPokeSearch}) => {

  const changeInput = e => {
    setPokeSearch(e.target.value)
  }
  return (
    <form>
      <div className="form-input">
        <input type="text" placeholder="Searh Pokemon" onChange={changeInput}/>
      </div>
    </form>
  )
}

export default InputPokedex