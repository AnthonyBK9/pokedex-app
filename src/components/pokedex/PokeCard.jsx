import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import PokeStats from './PokeStats'

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()
  const clickCard = () => navigate(`/pokemon/${pokemon.id}`)
  console.log(pokemon)
  
  return (
    <article onClick={clickCard} className='card-pokemon'>
      <div className="card-poke-header">
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
        <h3>{pokemon?.name}</h3>
        <h4>Type</h4>
        <p>{pokemon?.types[0].type.name} - {pokemon?.types[1]?.type?.name}</p>
        {/* <p>{pokemon?.types[1].type.name}</p> */}
      </div>
        <div className="stats">
          <div className="stat">
            <p><span>HP:</span> {pokemon?.stats[0].base_stat}</p>
            <p><span>Defense:</span> {pokemon?.stats[3].base_stat}</p>
            <p><span>Sp-Attack:</span> {pokemon?.stats[4].base_stat}</p>
          </div>
          <div className="stat">
            <p><span>Attack:</span> {pokemon?.stats[1].base_stat}</p>
            <p><span>Speed:</span> {pokemon?.stats[4].base_stat}</p>
            <p><span>Sp-Defense:</span> {pokemon?.stats[4].base_stat}</p>
          </div>
        </div>
    </article>
  )
}

export default PokeCard