import React from 'react'
import { useForm } from 'react-hook-form';

const InputPokedex = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form>
        <input type="text" placeholder="Searh Pokemon"/>
        <select>
          <option value="valor1">Valor1</option>
          <option value="valor1">Valor2</option>
          <option value="valor1">Valor3</option>
        </select>
    </form>
  )
}

export default InputPokedex