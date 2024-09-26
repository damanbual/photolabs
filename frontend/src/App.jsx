import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; // HomeRoute component
import topics from './mocks/topics'; // Import mock data for topics
import photos from './mocks/photos'; // Import mock data for photos
import './App.scss';

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]); // Track favorited photos
  const [selectedTopic, setSelectedTopic] = useState(null); // Track selected topic

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

  // Function to filter photos by selected topic
  const filterPhotosByTopic = (photos, topicTitle) => {
    if (!topicTitle) return photos; // If no topic selected, return all photos
    return photos.filter((photo) => photo.topic === topicTitle);
  };

  return (
    <div className="App">
      {/* Pass the mock data and favorite state as props to HomeRoute */}
      <HomeRoute
        topics={topics}
        photos={filterPhotosByTopic(photos, selectedTopic)}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
        onTopicSelect={setSelectedTopic} // Pass down the topic selection function
      />
    </div>
  );
};

export default App;