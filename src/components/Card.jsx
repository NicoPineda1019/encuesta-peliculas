import React from 'react'

const Card = ({name, movie}) => {
  return (
    <div className='card'>
        <h5>Hola {name}</h5>
        <span>Hemos registrado que tú película favorita es <b>{movie}</b></span>
    </div>
  )
}

export default Card