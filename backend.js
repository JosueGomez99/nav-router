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

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
