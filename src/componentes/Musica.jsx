import React, { useState } from "react";
import '../Estilos/musica.css';
import Nav from './nav';

const AudioPlayer = () => {
  const [kendrickSongs, setKendrickSongs] = useState([]);
  const [theWeekndSongs, setTheWeekndSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [playlistsLoaded, setPlaylistsLoaded] = useState(false);

  const loadPlaylists = () => {
    // Realiza la solicitud GET al servidor para obtener las canciones
    fetch('http://localhost:3001/api/songs')
      .then(response => response.json())
      .then(data => {
        setKendrickSongs(data.kendrick);
        setTheWeekndSongs(data.theWeeknd);
        setPlaylistsLoaded(true); // Marca que las listas de reproducción se han cargado
      })
      .catch(error => console.error('Error al obtener las canciones:', error));
  };

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
      <Nav />
      <h1>Haz click en el botón para cargar las listas de reproducción</h1>
      {!playlistsLoaded && (
        <button onClick={loadPlaylists}>Cargar Listas de Reproducción</button>
      )}
      {playlistsLoaded && (
        <>
          <h2>Playlist de Kendrick Lamar</h2>
          {renderPlaylist(kendrickSongs)}
          <h2>Playlist de The Weeknd</h2>
          {renderPlaylist(theWeekndSongs)}
          {currentSong && (
            <div id="reproductor">
              <h3>Reproduciendo: {currentSong.title}</h3>
              <audio controls src={`http://localhost:3001/${currentSong.filename}`}></audio>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
