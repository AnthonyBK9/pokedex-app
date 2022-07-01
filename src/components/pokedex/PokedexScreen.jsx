import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import images from '../../assets/js/images'
import InputPokedex from './InputPokedex'
import PokePagination from './PokePagination'
import Header from '../header/Header'
// import SelectPokemon from './SelectPokemon'
// import useTypePokemon from '../../hooks/useTypePokemon'

const PokedexScreen = () => {
  const nameUser = useSelector(state => state.nameUser)
  const [pokemons, setPokemons] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemon, setFilterPokemon] = useState()

  useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=900'
    axios.get(URL_POKEMONS)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setFilterPokemon(pokemons?.filter( e => e.name.includes(pokeSearch.toLowerCase())))
  }, [pokeSearch])


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
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
      arrPages.push(i)
    }
  } else {
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock;i++){
      arrPages.push(i)
    }
  }

  return (
    <div>
      <Header />
      <h2 className="poke-user"><span>Hello! {nameUser}</span>, welcome to the Pokedex</h2>
      <div className="input-pokeScreen">
        <InputPokedex setPokeSearch={setPokeSearch} />
        {/* <SelectPokemon  typePokemons={typePokemons}/> */}
      </div>
      <PokePagination 
        arrPages={arrPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <div className="card-container">
        {
          filterPokemon ?
            filterPokemon.map( pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          :
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