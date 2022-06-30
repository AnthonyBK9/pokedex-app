import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import images from '../../assets/js/images'
import InputPokedex from './InputPokedex'
import PokePagination from './PokePagination'
import Header from '../header/Header'

const PokedexScreen = () => {

  const nameUser = useSelector(state => state.nameUser)
  const [pokemons, setPokemons] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=900'
    axios.get(URL_POKEMONS)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])
  // console.log(pokemons)
  let arrPokemons = [];
  const pokemonPerPage = 12;
    if (pokemons?.length <= pokemonPerPage) {
      arrPokemons = [...pokemons]
    } else {
      const lastPokemon = currentPage * pokemonPerPage
      arrPokemons = pokemons?.slice(lastPokemon - pokemonPerPage, lastPokemon)
    }
  
  let arrPages = [];
  let quantityPages = Math.ceil(pokemons?.length / pokemonPerPage)
  const pagesPerBlock = 5;
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)
    
  if(currentBlock * pagesPerBlock >= quantityPages){
    // Cuando es el último bloque
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
      arrPages.push(i)
    }
  } else {
    // cuando no es el último bloque
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock;i++){
      arrPages.push(i)
    }
  }

  return (
    <div>
      <Header />
      <h2 className="poke-user"><span>Hello! {nameUser}</span>, welcome to the Pokedex</h2>
      <div className="input-pokeScreen">
      <InputPokedex/>
      </div>
      <PokePagination 
        arrPages={arrPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <div className="card-container">
        {
          arrPokemons?.map(pokemon => (
            <PokeCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
      <PokePagination 
        arrPages={arrPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
    </div>
  )
}

export default PokedexScreen