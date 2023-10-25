import React, { useState } from "react";
import Nav from './nav';
import "../Estilos/noticias.css"; // Importa el archivo CSS
import axios from 'axios'; // Asegúrate de tener instalada la biblioteca axios

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const loadNoticias = () => {
    // Realiza una solicitud para obtener las noticias desde el servidor
    axios.get('http://localhost:3001/api/noticias')
      .then(response => {
        setNoticias(response.data);
        setLoaded(true);
      })
      .catch(error => console.error('Error al obtener las noticias:', error));
  };

  return (
    <div>
      <Nav />
      <div className="container">
        {loaded ? (
          noticias.map((noticia) => (
            <div className="card" key={noticia.id}>
              <img src={noticia.imageUrl} alt={noticia.title} />
              <div className="card-content">
                <h2>{noticia.title}</h2>
                <p>{noticia.description}</p>
                <a className="enlace-azul" href={noticia.link}>
                  Leer mas...
                </a>
              </div>
            </div>
          ))
        ) : (
          <button id="cargar" onClick={loadNoticias}>Cargar Noticias</button>
        )}
      </div>
    </div>
  );
}

export default Noticias;
