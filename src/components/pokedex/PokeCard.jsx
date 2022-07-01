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

  bgColor.forEach(bg => {
    if (pokemon?.types[0].type.name === bg.bgColor) {
        return `card-pokemon bg-${bg.bgColor}`;
    } else {  
      return 'card-pokemon'
    }
  });

  const poketype = pokemon?.types[0].type.name;
  let pokeColor;
  bgColor.forEach(bg => {
    if (bg.bgColor === poketype) {
      return pokeColor = bg.bgColor;
    }
  });

  const poketype2 = pokemon?.types[1]?.type.name;
  let pokeColor2;
  bgColor.forEach(bg => {
    if (bg.bgColor === poketype2) {
      return pokeColor2 = bg.bgColor;
    }
  });

  return (
    // <article onClick={clickCard} className={` card-pokemon bg-${pokeColor}`}>
    //   <div className="card-poke-header">
    //     <div className="card-img">
    //       <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
    //     </div>
    //     <div className="card-content">
    //       <h3>{pokemon?.name}</h3>
    //     </div>
    //   </div>
    //     <div className="card-content">
    //       <h4>Type</h4>
    //       <div className="card-type">
    //         <p>{pokemon?.types[0].type.name} { pokemon?.types[1]?.type.name !== undefined ? `/ ${pokemon?.types[1]?.type.name}`: '' }</p>
    //       </div>
    //     </div>
        // <div className="stats">
        //   <div className="stat">
        //     <p><span className="hp">HP:</span> {pokemon?.stats[0].base_stat}</p>
        //     <p><span className="defense">Defense:</span> {pokemon?.stats[3].base_stat}</p>
        //     <p><span className="sp-attack">Sp-Attack:</span> {pokemon?.stats[4].base_stat}</p>
        //   </div>
        //   <div className="stat">
        //     <p><span className="attack">Attack:</span> {pokemon?.stats[1].base_stat}</p>
        //     <p><span className="speed">Speed:</span> {pokemon?.stats[4].base_stat}</p>
        //     <p><span className="sp-defense">Sp-Defense:</span> {pokemon?.stats[4].base_stat}</p>
        //   </div>
    //     </div>
    // </article>
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