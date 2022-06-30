import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useTypePokemon = () => {
  
    const [typePokemon, setTypePokemon] = useState()
    const URL = 'https://pokeapi.co/api/v2/type/'
    useEffect(() => {
        axios.get(URL)
            .then(res => setTypePokemon(res.data.results))
            .catch(err => console.log(err))
    }, [])
    return { typePokemon } 
}

export default useTypePokemon