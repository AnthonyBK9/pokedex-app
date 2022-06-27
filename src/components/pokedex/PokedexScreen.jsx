import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import images from '../../assets/js/images'
import InputPokedex from './InputPokedex'

const PokedexScreen = () => {

  const nameUser = useSelector(state => state.nameUser)

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10'
    axios.get(URL_POKEMONS)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemons)

  return (
    <div>
      <div className="bar-header">
        <div className="bar-red"></div>
        <div className="bar-black"></div>
        <div className="poke-img">    
          <img src={images[3].img} alt={images[3].name} />
        </div>
        <div className="circle-a"></div>
        <div className="circle-b"></div>
      </div>
      <h2 className="poke-user"><span>Hello! {nameUser}</span>, bienvenido a la pokedex </h2>
      <div>
        <InputPokedex />
      </div>
      {
        pokemons?.map(pokemon => (
          <PokeCard 
            key={pokemon.url}
            url={pokemon.url}
          />
        ))
      }
    </div>
  )
}

export default PokedexScreen