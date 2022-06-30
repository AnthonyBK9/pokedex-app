import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import images from '../../assets/js/images'
import bgColor from '../../helpers/bgColor'
import PokeMovements from './PokeMovements';

const PokeInfoScreen = () => {

  const { id } = useParams()
  const [pokeInfo, setPokeInfo] = useState();
  const navigate = useNavigate()
  const previus = () => navigate(`/pokedex`);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))

  }, [])
  
  console.log(pokeInfo);
  const poketype = pokeInfo?.types[0].type.name;
  let pokeColor;
  bgColor.forEach(bg => {
    if (bg.bgColor === poketype) {
      return pokeColor = bg.bgColor;
    }
  });
  const poketype2 = pokeInfo?.types[1]?.type.name;
  let pokeColor2;
  bgColor.forEach(bg => {
    if (bg.bgColor === poketype2) {
      return pokeColor2 = bg.bgColor;
    }
  });
  return (
    <>
      <Header />
      <article className="pokeinfo">
      <button className="btn-previus" onClick={previus}><i className="fa-solid fa-circle-left"></i></button>
        <div className="pokemon-img">
          <img src={images[0].img} alt={images[0].name} />
        </div>
        <div className={`pokeinfo-header bg-${pokeColor}`} >
          <div className="pokeinfo-header-content">
            <div className="pokeinfo-img">
              <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt={pokeInfo?.name} />
            </div>
            <h2>#{pokeInfo?.id}</h2>
            <div className="pokeinfo-name">
              <h3>{pokeInfo?.name}</h3>
            </div>
          </div>
          <div className="pokeinfo-body">
            <h3>Type</h3>
            <div className="pokeinfo-type-content">
              <span className={ `pokeinfo-type bg-${pokeColor}` }>{pokeInfo?.types[0].type.name}</span>
              {
                pokeColor2 === undefined ? '' : <span className={ `pokeinfo-type bg-${pokeColor2}` }>{pokeInfo?.types[1]?.type.name}</span>
              }
            </div>
            <h3>Stats</h3>
            <div className="poke-stats">
              <div className="stat">
                <p><span className="hp">HP:</span> {pokeInfo?.stats[0].base_stat}</p>
                <p><span className="defense">Defense:</span> {pokeInfo?.stats[3].base_stat}</p>
                <p><span className="sp-attack">Sp-Attack:</span> {pokeInfo?.stats[4].base_stat}</p>
              </div>
              <div className="stat">
                <p><span className="attack">Attack:</span> {pokeInfo?.stats[1].base_stat}</p>
                <p><span className="speed">Speed:</span> {pokeInfo?.stats[4].base_stat}</p>
                <p><span className="sp-defense">Sp-Defense:</span> {pokeInfo?.stats[4].base_stat}</p>
              </div>
            </div>
          </div>
        </div>  
        
        <section className="poke-movements">
          <h3>Movements</h3>
          <div className="poke-movements-section">
            {
              pokeInfo?.moves.map( ({move}) => (
                <PokeMovements 
                  key={move.url}
                  getMove={move.name}
                />
              ))
            }
          </div>
        </section>
      </article>
    </>
  )
}

export default PokeInfoScreen