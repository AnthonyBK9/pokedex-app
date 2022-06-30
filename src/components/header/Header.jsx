import React from 'react'
import images from '../../assets/js/images'

const Header = () => {
  return (
    <div className="bar-header">
        <div className="bar-red"></div>
        <div className="bar-black"></div>
            <div className="poke-img">    
               <img src={images[3].img} alt={images[3].name} />
            </div>
        </div>
  )
}

export default Header