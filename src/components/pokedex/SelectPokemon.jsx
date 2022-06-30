import React from 'react'
import { useForm } from "react-hook-form";

const SelectPokemon = ({pokemons}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    console.log(pokemons)

  return (
    <div>
        <h2>Select the type of pokemon</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register('type')}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default SelectPokemon