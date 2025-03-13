import React, { useState } from 'react';
import "../src/css/App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import NavBar from './Components/NavBar';
import About from './Pages/About';

const App = () => {
  const [favorite, setFavorite] = useState([]); // State for favorite movies

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home setFavorite={setFavorite} />} />
          <Route path="/favorites" element={<Favorite favorite={favorite} />} />
           <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
