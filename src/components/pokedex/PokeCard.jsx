import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PokeStats from './PokeStats'

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()
  const clickCard = () => navigate(`/pokemon/${pokemon.id}`)
  // console.log(pokemon)
  
  return (
    <article onClick={clickCard} className='card-pokemon'>
      <div className="card-poke-header">
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
        <h3>{pokemon?.name}</h3>
      </div>
        <div className="stats">
          <PokeStats
            key={pokemon?.stats[0].stat.url}
            url={pokemon?.stats[0].stat.url}
            stats={pokemon?.stats[0].stat.name}
          />
          <p>{}</p>
        </div>
    </article>
  )
}

export default PokeCard