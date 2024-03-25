import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Room from './Room'
import Hotel from './Hotel'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hotel></Hotel>
    </>
  )
}

export default App
