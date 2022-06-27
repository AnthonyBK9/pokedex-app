import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PokeStats = ({url, stat}) => {

    const [getStat, setGetStat] = useState();

    useEffect(() => {
        axios.get(url)
            .then(res => setGetStat(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(getStat)
  return (
    <div>PokeStats</div>
  )
}

export default PokeStats