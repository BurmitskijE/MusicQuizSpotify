import React from 'react';
import './App.css'; // Stelle sicher, dass die CSS-Datei eingebunden ist

function App() {
  const handleSpotifyLogin = () => {
    // URL zur Spotify-Authentifizierung
    window.location.href = 'https://accounts.spotify.com/authorize';
  };

  return (
    <div className="app-container">
      <button className="spotify-button" onClick={handleSpotifyLogin}>
        Log in with Spotify
      </button>
    </div>
  );
}

export default App;
