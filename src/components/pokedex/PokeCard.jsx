import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgColor from '../../helpers/bgColor'
// import PokeStats from './PokeStats'

const PokeCard = ({url}) => {
  
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()
  const clickCard = () => navigate(`/pokedex/${pokemon.id}`)
  console.log(pokemon)
  bgColor.forEach(bg => {
    if (pokemon?.types[0].type.name === bg.bgColor) {
        return `card-pokemon bg-${bg.bgColor}`;
    } else {  
      return 'card-pokemon'
    }
  });
  return (
    <article onClick={clickCard} className={(pokemon?.types[0].type.name === bgColor[11].bgColor )? `card-pokemon bg-${bgColor[11].bgColor}`: 'card-pokemon'}>
      <div className="card-poke-header">
        <div className="card-img">
          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
        </div>
        <div className="card-content">
          <h3>{pokemon?.name}</h3>
          <h4>Type</h4>
          <div className="card-type">
            <p className="type-a">{pokemon?.types[0].type.name} </p>
            <p className="type-b">{pokemon?.types[1]?.type?.name}</p>
          </div>
        </div>
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