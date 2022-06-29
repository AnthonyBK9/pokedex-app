import React from 'react'

const PokeMovements = ({getMove}) => {
  return (
    <section className="movements">
        <p>{getMove}</p>
    </section>
  )
}

export default PokeMovements