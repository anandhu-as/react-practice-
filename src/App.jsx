import React from 'react'
import "../src/css/App.css"
import { Routes,Router, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite'
import NavBar from './Components/NavBar'

const App = () => {

  return (
  <div>
    <NavBar/>
    <main className="main-content">
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/favorites'element={<Favorite/>}/>
    </Routes>
  </main>
  </div>
  )
}

export default App
