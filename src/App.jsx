import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

const reyes = [
  {
    nombre: 'Atanagildo',
    color: 'darkolivegreen',
    precio: 178
  }, {
    nombre: 'Ervigio',
    color: 'crimson',
    precio: 169
  }, {
    nombre: 'Ataúlfo',
    color: 'peru',
    precio: 81
  }, {
    nombre: 'Leogivildo',
    color: 'darkmagenta',
    precio: 126
  }, {
    nombre: 'Recesvinto',
    color: 'royalblue',
    precio: 141
  }, {
    nombre: 'Sisebuto',
    color: 'teal',
    precio: 69
  }
]

function App () {
  const [total, setTotal] = useState(0)
  const list = reyes.map((e) => <Card king={e} setTotal={setTotal}/>)
  return (
     <>
      <h1>Total a pagar { total } euros.</h1>
      <div className="container">
        {list}
      </div>
    </>
  )
}

export default App
