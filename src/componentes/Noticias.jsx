import React from "react";
import Nav from './nav';
import "../Estilos/noticias.css"; // Importa el archivo CSS
function Noticias() {
  return (
    <div>
      <Nav/>
    <div className="container">
      <div className="card">
        <img
          src="https://media.diariolasamericas.com/p/d466b87367c91e692c9633cd5c2a1c0a/adjuntos/216/imagenes/002/500/0002500180/375x211/smart/kendrick-lamar-afp.jpg"
          alt="Kendrick Lamar"
        />
        <div className="card-content">
          <h2>Lanzamiento de su nuevo album!!!</h2>
          <p>
            En junio, Kendrick Lamar lanzó un nuevo álbum que se centra en la
            crítica social y la introspección
          </p>
          <a
            className="enlace-azul"
            href="https://www.sandiegouniontribune.com/en-espanol/espectaculos/musica/articulo/2022-05-14/kendrick-lamar-lanza-su-nuevo-disco-titulado-mr-morale-the-big-steppers#:~:text=El%20rapero%20Kendrick%20Lamar%20public%C3%B3,vali%C3%B3%20un%20Grammy%20en%202017."
          >
            Leer mas...
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.diariolasamericas.com/p/be5d79722d8cee863af4c9c5013de151/adjuntos/216/imagenes/001/576/0001576904/375x211/smart/kendricefejpg.jpg"
          alt="Kendrick Lamar"
        />
        <div className="card-content">
          <h2>Entrevista sobre el nuevo album!!!</h2>
          <p>
            En octubre, Kendrick Lamar concedió una entrevista a la revista W
            Magazine donde habló sobre su álbum más reciente, "Mr. Morale & The
            Big Steppers"
          </p>
          <a
            className="enlace-azul"
            href="https://es.rollingstone.com/fue-dificil-para-mi-kendrick-lamar-habla-sobre-la-composicion-de-mr-morale-the-big-steppers/"
          >
            Leer mas...
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.diariolasamericas.com/p/0653ed28b02b7260d4fe167d3cee3a00/adjuntos/216/imagenes/000/997/0000997553/375x211/smart/kendrickpng.png"
          alt="Kendrick Lamar"
        />
        <div className="card-content">
          <h2>Nominaciones a los Grammy!!!</h2>
          <p>
            En febrero, Kendrick Lamar fue nominado a ocho premios Grammy, que
            ha ganado varias veces en el pasado
          </p>
          <a
            className="enlace-azul"
            href="https://elpais.com/cultura/2022-11-15/beyonce-y-kendrick-lamar-lideran-la-lista-de-nominados-rumbo-a-los-grammy-2023.html"
          >
            Leer mas...
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.diariolasamericas.com/p/419839ece5c7ba9a9bda56b227a3459f/adjuntos/216/imagenes/002/254/0002254820/375x211/smart/the-weekend.jpg"
          alt="Kendrick Lamar"
        />
        <div className="card-content">
          <h2>Gira por Australia y Nueva Zelanda!!!</h2>
          <p>
            En agosto, The Weeknd anunció las fechas de su gira por Australia y
            Nueva Zelanda para noviembre y diciembre de 2023.
          </p>
          <a
            className="enlace-azul"
            href="https://www.nme.com/en_au/news/music/the-weeknd-announces-2023-australian-new-zealand-tour-tickets-3486168"
          >
            Leer mas...
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.diariolasamericas.com/p/90dc933925f9e0e65a765a0ea17fd5ba/adjuntos/216/imagenes/002/109/0002109678/375x211/smart/the-weeknd-apjpeg.jpeg"
          alt="Kendrick Lamar"
        />
        <div className="card-content">
          <h2>Va retirar su nombre artistico??!</h2>
          <p>
            En septiembre, The Weeknd compartió su plan de retirar su nombre
            artístico después de su próximo álbum
          </p>
          <a
            className="enlace-azul"
            href="https://variety.com/2023/music/news/the-weeknd-kill-stage-name-next-album-1235606237/"
          >
            Leer mas...
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.diariolasamericas.com/p/3f9e4f7cdf74309c6a194643266233da/adjuntos/216/imagenes/100/049/0100049718/375x211/smart/the-weeknd.png"
          alt="Kendrick Lamar"
        />
        <div className="card-content">
          <h2>Gira por Europa y America Latina!!!</h2>
          <p>
            En enero, The Weeknd anunció fechas 2023 para la expansión de su
            gira After Hours Til Dawn en Europa y América Latina.
          </p>
          <a
            className="enlace-azul"
            href="https://www.theweeknd.com/news/the-weeknd-announces-2023-europe-and-latin-america-dates-for-after-hours-til-dawn-stadium-tour/"
          >
            Leer mas...
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Noticias;
