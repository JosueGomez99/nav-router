import React, { useState, useEffect } from "react";
import Nav from './nav';
import "../Estilos/noticias.css"; 

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const loadNoticias = () => {
    fetch('http://localhost:3001/api/noticias')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las noticias');
        }
        return response.json(); // Analiza la respuesta JSON
      })
      .then(data => {
        if (Array.isArray(data)) {
          setNoticias(data);
          setLoaded(true);
        } else {
          throw new Error('Respuesta no válida');
        }
      })
      .catch(error => console.error('Error al obtener las noticias:', error));
  };

  // Cargar noticias al montar el componente
  useEffect(() => {
    loadNoticias();
  }, []);

  return (
    <div>
      <Nav />
      <div className="container">
        {loaded ? (
          noticias.map((noticia, index) => (
            <div className="card" key={index}>
              <img src={noticia.ImageURL} alt={noticia.Title} />
              <div className="card-content">
                <h2>{noticia.Title}</h2>
                <p>{noticia.Description}</p>
                <a className="enlace-azul" href={noticia.Link}>
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
