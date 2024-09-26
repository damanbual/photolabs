import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; 
import topics from './mocks/topics'; // Ensure this file exists and is correctly imported
import photos from './mocks/photos'; 
import './App.scss';

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]); // Initialize as an empty array

  const toggleFavorite = (photoId) => {
    setFavPhotos((prevFavPhotos) => {
      if (prevFavPhotos.includes(photoId)) {
        return prevFavPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevFavPhotos, photoId];
      }
    });
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;