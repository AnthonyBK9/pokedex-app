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
  const clickCard = () => navigate(`/pokedex/${pokemon.id}`)

  const pokeColor = pokemon?.types[0].type.name;
  const pokeColor2 = pokemon?.types[1]?.type.name;


  return (
    <article onClick={clickCard} className={` card-pokemon bg-${pokeColor}-card`}>
      <div className="card-hp">
        <p><span className="hp">HP</span> {pokemon?.stats[0].base_stat}</p>
      </div>
      <div className="card-img">
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
      </div>
      <div className="card-content">
        <h2>{pokemon?.name}</h2>
        <div className="card-content-type">
            <span className={ `card-type bg-${pokeColor}` }>{pokemon?.types[0].type.name}</span>
            {
              pokeColor2 === undefined ? '' : <span className={ `card-type bg-${pokeColor2}` }>{pokemon?.types[1]?.type.name}</span>
            }
        </div>
      </div>
      <div className="stats">
          <div className="stat">
            <p><span className="defense">Defense:</span> {pokemon?.stats[3].base_stat}</p>
            <p><span className="attack">Attack:</span> {pokemon?.stats[1].base_stat}</p>
            <p><span className="speed">Speed:</span> {pokemon?.stats[4].base_stat}</p>
          </div>
          <div className="stat">
            <p><span className="sp-attack">Sp-Attack:</span> {pokemon?.stats[4].base_stat}</p>
            <p><span className="sp-defense">Sp-Defense:</span> {pokemon?.stats[4].base_stat}</p>
          </div>
      </div>
    </article>
  )
}

export default PokeCard