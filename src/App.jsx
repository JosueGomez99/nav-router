// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './componentes/nav';
import HomePage from './componentes/home';
import Biografias from './componentes/Biografias';
import Reseñas from './componentes/Reseñas';
import Musica from './componentes/Musica';
import Noticias from './componentes/Noticias';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Biografias" element={<Biografias />} />
        <Route path="/Reseñas" element={<Reseñas />} />
        <Route path="/Musica" element={<Musica />} />
        <Route path="/Noticias" element={<Noticias />} />
      </Routes>
    </div>
  );
}

export default App;
