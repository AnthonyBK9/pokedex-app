import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PokeInfoScreen = () => {
  const { id } = useParams()
  console.log(id);

  const [pokeInfo, setPokeInfo] = useState();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  }, [])
  
  console.log(pokeInfo);
  return (
    <div>
      <h2>Pokemon #{id}</h2>
      <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt={pokeInfo?.name} />
      <h3>{pokeInfo?.name}</h3>
    </div>
  )
}

export default PokeInfoScreen