import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Room from './Room'
import Hotel from './Hotel'
import User from './User'
import './App.css'
import Reservation from './Reservation'
import BasicNav from './Navbar'
import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <BasicNav/>
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="/Room/:hotelName" element={<Room />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/User" element={<User />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
