import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import InputPokedex from './InputPokedex'
import PokePagination from './PokePagination'
import Header from '../header/Header'

const PokedexScreen = () => {
  const nameUser = useSelector(state => state.nameUser)
  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemon, setFilterPokemon] = useState()

  //Nueva Paginacion
  const [page, setPage] = useState(1)
  const [getPage, setGetPage] = useState(16)

  const max = pokemons?.length / getPage
  
  useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1100'
    axios.get(URL_POKEMONS)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    setFilterPokemon(pokemons?.filter( e => e.name.includes(pokeSearch.toLowerCase())))
  }, [pokeSearch])

  return (
    <div>
      <Header />
      <h2 className="poke-user"><span>Hello! {nameUser}</span>, welcome to the Pokedex</h2>
      <div className="input-pokeScreen">
        <InputPokedex setPokeSearch={setPokeSearch} />
      </div>
      <PokePagination page={page} setPage={setPage} max={max}/>
      <div className="card-container">
        {
          filterPokemon ?
            filterPokemon.slice((page - 1) * getPage, (page - 1) * getPage + getPage)
            .map( pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          :
          pokemons?.slice((page - 1) * getPage, (page - 1) * getPage + getPage)
          .map(pokemon => (
            <PokeCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexScreen