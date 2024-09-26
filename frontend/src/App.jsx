import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; // HomeRoute component
import topics from './mocks/topics'; // Import mock data for topics
import photos from './mocks/photos'; // Import mock data for photos
import './App.scss';

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]); // Track favorited photos

  // Function to toggle favorite photos
  const toggleFavorite = (photoId) => {
    setFavPhotos((prevFavPhotos) => {
      if (prevFavPhotos.includes(photoId)) {
        // If the photo is already favorited, remove it
        return prevFavPhotos.filter((id) => id !== photoId);
      } else {
        // Otherwise, add it to the favorites
        return [...prevFavPhotos, photoId];
      }
    });
  };

  return (
    <div className="App">
      {/* Pass the mock data and favorite state as props to HomeRoute */}
      <HomeRoute
        topics={topics}    // <-- Make sure we are passing topics here
        photos={photos}
        favPhotos={favPhotos} // Pass down the favorite photos
        toggleFavorite={toggleFavorite} // Pass down the toggle function
      />
    </div>
  );
};

export default App;