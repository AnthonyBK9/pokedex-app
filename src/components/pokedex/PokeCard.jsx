import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      <div>
        <h3>{pokemon?.name}</h3>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
        <div className="stats">
          <p>{}</p>
        </div>
      </div>
    </article>
  )
}

export default PokeCard