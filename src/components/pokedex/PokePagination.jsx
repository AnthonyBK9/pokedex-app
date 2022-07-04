import React, { useRef, useState} from 'react'

const PokePagination = ({page, setPage, max}) => {

  const [input, setInput] = useState(1)

  const nextPage = () => {
    setInput( (input) + 1)
    setPage(parseInt (page) + 1)
}

const previousPage = () => {
    setInput( (input) - 1)
    setPage(parseInt (page) - 1)
}


  const onKeyDown = (e) => {
    if(e.keyCode == 13) {
      setPage(parseInt(e.target.value))
          if(parseInt(e.target.value < 1) || 
          parseInt(e.target.value) > Math.ceil(max) || 
          isNaN(e.target.value)
          ){
              setPage (1)
              setInput (1)
          } else {
              setPage (parseInt(e.target.value))
          }
    }
  }

  const onChange = (e) => {
    setInput(e.target.value)
}

  return (
    <div className='pagination-container'>
      <button 
        className='pagination-prev' 
        disabled={page === 1}
        onClick={previousPage}>
          <i className="fa-solid fa-caret-left"></i></button>
      <input 
        type="text" 
        value={input} 
        onChange={e => onChange(e)} 
        onKeyDown={e => onKeyDown (e)} 
        name="page" 
        autoComplete="off"/>
      <p className='page'>Of</p>
      <p className='page-number'>{Math.ceil(max)}</p>
      <button 
        disabled={page === Math.ceil(max)} 
        className='pagination-next'
        onClick={nextPage}>
          <i className="fa-solid fa-caret-right"></i></button>
    </div>
  )
}

export default PokePagination