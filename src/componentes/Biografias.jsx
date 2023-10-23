import React from 'react';
import '../Estilos/biografias.css'; // Importa el archivo CSS
import Nav from './nav';
function Biografias() {
  return (
    <div>
      <Nav/>
      <div className="biografia">
        <h1>Kendrick Lamar</h1>
        <img src="https://akamai.sscdn.co/letras/215x215/fotos/d/3/7/0/d37066bbb6f2f4f8f4e76227d67e0126.jpg" alt="Kendrick Lamar" />
        <p>
          Kendrick Lamar es un destacado rapero, letrista y productor musical nacido el 17 de junio de 1987 en Compton, California. A lo largo de su carrera, Kendrick ha logrado un impacto significativo en la música y la cultura, y se ha convertido en uno de los artistas más influyentes del hip-hop contemporáneo. Algunos de los aspectos más destacados de su carrera incluyen:

          Líricas Profundas y Reflexivas: Kendrick Lamar es ampliamente elogiado por su habilidad para escribir letras profundas y conscientes. Sus canciones a menudo abordan temas de justicia social, racismo, desigualdad, pobreza y la lucha diaria en las comunidades marginadas.

          Narrador de Historias Perspicaces: Sus letras son narrativas y ricas en detalles. Ha lanzado álbumes conceptuales que cuentan historias a lo largo de múltiples pistas, como "good kid, m.A.A.d city" y "To Pimp a Butterfly."

          Exploración de la Identidad Afroamericana: Kendrick ha utilizado su música para explorar su identidad como afroamericano y ha abordado cuestiones relacionadas con la cultura y la historia afroamericana.

          Versatilidad Musical: A lo largo de su carrera, Kendrick ha demostrado una versatilidad excepcional al incorporar una variedad de géneros musicales en su trabajo, incluyendo jazz, funk, soul y electrónica. Esta experimentación musical ha contribuido a la evolución del sonido del hip-hop.

          Álbumes Emblemáticos: Kendrick Lamar ha lanzado álbumes que se consideran obras maestras del hip-hop contemporáneo, como "good kid, m.A.A.d city," "To Pimp a Butterfly," "DAMN." y otros.

          Reconocimientos y Premios: Ha recibido múltiples premios Grammy, incluyendo el premio al Álbum del Año. Su influencia en la música contemporánea y su compromiso con cuestiones sociales le han valido un reconocimiento generalizado.

          Compromiso Social: Kendrick ha utilizado su plataforma para abogar por la justicia social, la igualdad y la educación. Ha sido una voz importante en cuestiones que van más allá de la música.
        </p>
        <p>
          Discografía destacada:
          <ul>
            <li>Section.80 (2011)</li>
            <li>good kid, m.A.A.d city (2012)</li>
            <li>To Pimp a Butterfly (2015)</li>
            <li>DAMN. (2017)</li>
          </ul>
        </p>
        <p>
          Síguelo en las redes sociales:
          <a href="https://www.instagram.com/kendricklamar/" className="enlace-azul">Instagram</a> |
          <a href="https://twitter.com/kendricklamar" className="enlace-azul">Twitter</a> |
          <a href="https://www.facebook.com/kendricklamar/" className="enlace-azul">Facebook</a>
        </p>

      </div>

      <div className="biografia">
        <h1>The Weeknd</h1>
        <img src="https://akamai.sscdn.co/letras/215x215/fotos/8/9/a/1/89a114a2f4a89231c5508efb3b700434.jpg" alt="The Weeknd" />
        <p>
          Su obra se caracteriza por explorar temas de decadencia, excesos, relaciones tumultuosas y soledad en su música, lo que le ha valido una gran base de seguidores. The Weeknd es conocido por su imagen distintiva, a menudo asociada con la misteriosa visión de un artista que oculta su rostro con vendajes en sus videoclips y presentaciones en vivo.

          Uno de sus mayores éxitos llegó en 2020 con el álbum "After Hours," que incluyó canciones como "Blinding Lights" y "In Your Eyes." Este álbum consolidó su estatus como una de las estrellas más importantes de la música contemporánea y le valió varios premios, incluyendo varios Grammy.

          Además de su música, The Weeknd también ha incursionado en la actuación, participando en proyectos cinematográficos y televisivos, lo que demuestra su versatilidad como artista.

          En resumen, The Weeknd es un destacado artista canadiense conocido por su distintivo estilo musical, su enfoque en temas oscuros y emocionales, y su impacto significativo en la música pop y R&B contemporánea.
        </p>
        <p>
          Discografía destacada:
          <ul>
            <li>Beauty Behind the Madness (2015)</li>
            <li>Starboy (2016)</li>
            <li>After Hours (2020)</li>
          </ul>
        </p>
        <p>
          Síguelo en las redes sociales:
          <a href="https://www.instagram.com/theweeknd/" className="enlace-azul">Instagram</a> |
          <a href="https://twitter.com/theweeknd" className="enlace-azul">Twitter</a> |
          <a href="https://www.facebook.com/theweeknd/" className="enlace-azul">Facebook</a>
        </p>
      </div>
    </div>
  );
}

export default Biografias;
