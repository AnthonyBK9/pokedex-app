import React from 'react'
import InputHome from './InputHome'
import images from '../../assets/js/images'

const HomeScreen = () => {
  return (
    <div className="pokedex">
      <div className="pokecoach-men">
        <img src={images[1].img} alt={images[1].name} />
      </div>
      <div className="pokedex-intro">
        <h1 className="pokedex-title">Pokedex</h1>
        <h4 className="pokedex-content">¡Hola Entrenador!</h4>
        <InputHome />
      </div>
      <div className="pokecoach-woman">
        <img src={images[2].img} alt={images[2].name} />
      </div>
    </div>
  )
}

export default HomeScreen