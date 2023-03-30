import React from 'react'
import './Card.css'

function Card ({ king, setTotal }) {
  const buy = (el) => {
    setTotal((e) => e + king.precio)
    el.target.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
  }
  return (
    <div className="card" style={{ backgroundColor: king.color }}>
      <h2>{king.nombre}</h2>
      <img src={`https://www.html6.es/img/rey_${king.nombre}.png`}/>
      <div>
       <div>Precio: </div>
       <div>
        { king.precio } euros.
        <div>
          <button onClick={ buy }>Comprar</button>
        </div>
       </div>
      </div>

    </div>
  )
}

export default Card
