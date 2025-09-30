import React from 'react'

export default function Item({ producto}) {
  return (
    <div>
      <img src={producto.image} alt="hola"></img>
      <h2>{producto.title}</h2>
      <p>{producto.price}</p>
    </div>
  )
}
