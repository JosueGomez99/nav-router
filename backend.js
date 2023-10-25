const express = require('express');
const cors = require('cors');
const path = require('path'); // Agregamos la biblioteca 'path' para trabajar con rutas de archivos
const app = express();
const port = 3001; // Puedes cambiar el puerto si es necesario

app.use(cors());

const kendrickSongs = [
  { id: 1, title: "Loyalty", filename: "Loyalty.mp3" },
  { id: 2, title: "Humble", filename: "Humble.mp3" },
  { id: 3, title: "Count me Out", filename: "count me out.mp3" }
];

const theWeekndSongs = [
  { id: 4, title: "Earned It", filename: "earned it.mp3" },
  { id: 5, title: "Die for you ft Ariana Grande", filename: "die for you.mp3" },
  { id: 6, title: "Often", filename: "often.mp3" }
];

app.get('/api/songs', (req, res) => {
  const songs = {
    kendrick: kendrickSongs,
    theWeeknd: theWeekndSongs,
  };
  res.json(songs);
});

// Configuramos Express para servir los archivos de canciones estáticas
app.use(express.static(path.join(__dirname, 'songs'))); 

// Datos de ejemplo de noticias
const noticias = [
  {
    id: 1,
    title: "Lanzamiento de su nuevo álbum!!!",
    description: "En junio, Kendrick Lamar lanzó un nuevo álbum que se centra en la crítica social y la introspección",
    imageUrl: "https://media.diariolasamericas.com/p/d466b87367c91e692c9633cd5c2a1c0a/adjuntos/216/imagenes/002/500/0002500180/375x211/smart/kendrick-lamar-afp.jpg",
    link: "https://www.sandiegouniontribune.com/en-espanol/espectaculos/musica/articulo/2022-05-14/kendrick-lamar-lanza-su-nuevo-disco-titulado-mr-morale-the-big-steppers#:~:text=El%20rapero%20Kendrick%20Lamar%20publicó,valió%20un%20Grammy%20en%202017."
  },
  {
    id: 2,
    title: "Entrevista sobre el nuevo álbum!!!",
    description: "En octubre, Kendrick Lamar concedió una entrevista a la revista W Magazine donde habló sobre su álbum más reciente, 'Mr. Morale & The Big Steppers'",
    imageUrl: "https://media.diariolasamericas.com/p/be5d79722d8cee863af4c9c5013de151/adjuntos/216/imagenes/001/576/0001576904/375x211/smart/kendricefejpg.jpg",
    link: "https://es.rollingstone.com/fue-dificil-para-mi-kendrick-lamar-habla-sobre-la-composicion-de-mr-morale-the-big-steppers/"
  },
  {
    id: 3,
    title: "Nominaciones a los Grammy!!!",
    description: "En febrero, Kendrick Lamar fue nominado a ocho premios Grammy, que ha ganado varias veces en el pasado",
    imageUrl: "https://media.diariolasamericas.com/p/0653ed28b02b7260d4fe167d3cee3a00/adjuntos/216/imagenes/000/997/0000997553/375x211/smart/kendrickpng.png",
    link: "https://elpais.com/cultura/2022-11-15/beyonce-y-kendrick-lamar-lideran-la-lista-de-nominados-rumbo-a-los-grammy-2023.html"
  },
  {
    id: 4,
    title: "Gira por Australia y Nueva Zelanda!!!",
    description: "En agosto, The Weeknd anunció las fechas de su gira por Australia y Nueva Zelanda para noviembre y diciembre de 2023.",
    imageUrl: "https://media.diariolasamericas.com/p/419839ece5c7ba9a9bda56b227a3459f/adjuntos/216/imagenes/002/254/0002254820/375x211/smart/the-weekend.jpg",
    link: "https://www.nme.com/en_au/news/music/the-weeknd-announces-2023-australian-new-zealand-tour-tickets-3486168"
  },
  {
    id: 5,
    title: "Va retirar su nombre artístico??!",
    description: "En septiembre, The Weeknd compartió su plan de retirar su nombre artístico después de su próximo álbum",
    imageUrl: "https://media.diariolasamericas.com/p/90dc933925f9e0e65a765a0ea17fd5ba/adjuntos/216/imagenes/002/109/0002109678/375x211/smart/the-weeknd-apjpeg.jpeg",
    link: "https://variety.com/2023/music/news/the-weeknd-kill-stage-name-next-album-1235606237/"
  },
  {
    id: 6,
    title: "Gira por Europa y América Latina!!!",
    description: "En enero, The Weeknd anunció fechas 2023 para la expansión de su gira After Hours Til Dawn en Europa y América Latina.",
    imageUrl: "https://media.diariolasamericas.com/p/3f9e4f7cdf74309c6a194643266233da/adjuntos/216/imagenes/100/049/0100049718/375x211/smart/the-weeknd.png",
    link: "https://www.theweeknd.com/news/the-weeknd-announces-2023-europe-and-latin-america-dates-for-after-hours-til-dawn-stadium-tour/"
  }
  
  // Agrega más noticias aquí
];

app.get('/api/noticias', (req, res) => {
  res.json(noticias);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
