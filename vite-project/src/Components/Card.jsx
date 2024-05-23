import React from 'react'

const Card = ({usuario}) => {
  const {nombre, apellido, musica} = usuario;

  return (
    <>
      <h3>Hola, {nombre} {apellido}</h3>
      <h4>Tu música favorita es: {musica}</h4>
    </>
  )
}

export default Card