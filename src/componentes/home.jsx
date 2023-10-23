import React from 'react';
import '../Estilos/home.css'; // Importa el archivo CSS
import Nav from './nav';

function HomePage() {
  return (
    <div>
      <Nav/>
      <h1>Bienvenido a Nuestra Página de Música</h1>
      <p>Explora géneros, artistas y más</p>
      <section id="destacados">
        <h2>Artistas Destacados</h2>
        <div className="artista">
          <img src="https://variety.com/wp-content/uploads/2017/11/kendrick-lamar-variety-hitmakers.jpg?w=1000&h=562&crop=1" alt="Artista 1" />
          <h3>Kendrick Lamar</h3>
          <p>Kendrick Lamar es un influyente rapero, cantante, compositor y productor musical estadounidense. Nació el 17 de junio de 1987 en Compton, California. Es ampliamente considerado como uno de los artistas más influyentes en la industria del hip-hop y ha recibido numerosos elogios por su talento lírico, su innovación musical y su compromiso con abordar temas sociales y políticos en su música.</p>
        </div>
        <div className="artista">
          <img src="https://variety.com/wp-content/uploads/2020/04/the-weeknd-variety-cover-shoot-2-16x9-1.jpg?w=1000&h=562&crop=1" alt="Artista 2" />
          <h3>The Weekend</h3>
          <p>The Weeknd, cuyo nombre real es Abel Tesfaye, es un conocido cantante, compositor y productor musical canadiense. Nació el 16 de febrero de 1990 en Toronto, Canadá. Es uno de los artistas más influyentes en el ámbito del R&B contemporáneo y el pop. Su música se caracteriza por su estilo distintivo y su voz suave y melancólica.</p>
        </div>

      </section>
       <section id="destacados">
        <h2>Generos Destacados</h2>
        <div className="artista">
          <img src="https://as1.ftcdn.net/v2/jpg/04/65/71/68/1000_F_465716854_N83VFFWzHiEUWgL3Bx3EMGpwox8nDPG1.jpg" alt="Artista 1" />
          <h3>Rap/Hip Hop</h3>
          <p>el rap es un género musical que se centra en la recitación rítmica y hablada de letras, mientras que el hip-hop es una cultura más amplia que abarca varios elementos artísticos y estilos de vida. Aunque a menudo se usan indistintamente, es importante reconocer la diferencia entre los dos términos para comprender completamente la riqueza y diversidad de la cultura musical y artística afroamericana.</p>
        </div>
        <div className="artista">
          <img src="https://as2.ftcdn.net/v2/jpg/02/06/36/89/1000_F_206368916_k6PqmPQL9jhkQzhJFBFEQB5F0uB6TR93.jpg" alt="Artista 2" />
          <h3>R&B/Pop</h3>
          <p> el R&B/Pop es un género musical que combina las cualidades emotivas del R&B con la accesibilidad y el atractivo masivo del pop. Ofrece canciones pegajosas y líricas que a menudo exploran temas románticos y emocionales, y ha sido un terreno fértil para artistas que buscan llegar a un amplio público mientras mantienen una profundidad lírica en su música.</p>
        </div>

      </section>
      <footer>
        <p>&copy; 2023 Tu Sitio Web de Música</p>
      </footer>
    </div>
  );
}







export default HomePage;
