import React, { useState, useEffect } from "react";
import "../Estilos/musica.css";
import Nav from "./nav";

const AudioPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  const togglePlaylistVisibility = () => {
    setIsPlaylistVisible(!isPlaylistVisible);
  };

  useEffect(() => {
    // Hacer una solicitud GET para obtener la lista de canciones desde el servidor
    fetch("http://localhost:3001/api/canciones")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudieron cargar las canciones");
        }
        return response.json();
      })
      .then((data) => {
        setSongs(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <Nav />
      <h1>Haz click en una canción para reproducirla</h1>
      <button onClick={togglePlaylistVisibility}>
        {isPlaylistVisible ? "Ocultar Playlist" : "Cargar Música"}
      </button>
      {error && <p>Error: {error}</p>}
      {isPlaylistVisible && (
        <div>
          <h2>Playlist de Todas las Canciones</h2>
          <ul id="playlist">
            {songs.map((song, index) => (
              <li key={index}>
                <button onClick={() => playSong(song)}>{song.title}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {currentSong && (
        <div id="reproductor">
          <h3>Reproduciendo: {currentSong.title}</h3>
          <audio
            controls
            src={`http://localhost:3001/canciones/${currentSong.filename}`}
          ></audio>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
