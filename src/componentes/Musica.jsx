import React, { useState } from "react";
import '../Estilos/musica.css'; // Importa el archivo CSS
import Nav from './nav';
const AudioPlayer = () => {
  const kendrickSongs = [
    { id: 1, title: "Loyalty", filename: "./src/canciones/Loyalty.mp3" },
    { id: 2, title: "Humble", filename: "./src/canciones/Humble.mp3" },
    { id: 3, title: "Count me Out", filename: "./src/canciones/count me out.mp3" }
    // Agrega más canciones de Kendrick aquí
  ];

  const theWeekndSongs = [
    { id: 4, title: "Earned It", filename: "./src/canciones/earned it.mp3" },
    { id: 5, title: "Die for you ft Ariana Grande", filename: "./src/canciones/die for you.mp3" },
    { id: 6, title: "Often", filename: "./src/canciones/often.mp3" }
    // Agrega más canciones de The Weeknd aquí
  ];

  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  const renderPlaylist = (playlist) => {
    return (
      
      <ul id="playlist">
        {playlist.map((song) => (
          <li id="liplay" key={song.id}>
            <button onClick={() => playSong(song)}>{song.title}</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Nav/>
      <h1>Haz click en las canciones para reproducir!!!</h1>
      <h2> Playlist de Kendrick Lamar</h2>
      {renderPlaylist(kendrickSongs)}
      <h2>Playlist de The Weeknd</h2>
      {renderPlaylist(theWeekndSongs)}
      {currentSong && (
        <div id="reproductor">
          <h3>Reproduciendo: {currentSong.title}</h3>
          <audio controls src={currentSong.filename}></audio>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
