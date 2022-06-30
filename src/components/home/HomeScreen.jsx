import React from 'react'
import InputHome from './InputHome'
import images from '../../assets/js/images'

const HomeScreen = ({setLogged}) => {
  return (
    <div className="pokedex">
      <div className="pokecoach-men">
        <img src={images[1].img} alt={images[1].name} />
      </div>
      <div className="pokedex-intro">
        <img src={images[3].img} alt={images[3].name} />
        <h4 className="poke-content">Hello Trainer!</h4>
        <InputHome setLogged={setLogged}/>
      </div>
      <div className="pokecoach-woman">
        <img src={images[2].img} alt={images[2].name} />
      </div>
    </div>
  )
}

export default HomeScreen