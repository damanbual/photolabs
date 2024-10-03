import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; // HomeRoute component
import topics from './mocks/topics'; // Import mock data for topics
import photos from './mocks/photos'; // Import mock data for photos
import './App.scss';

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]); // Track favorited photos
  const [selectedTopic, setSelectedTopic] = useState(null); // Track selected topic
  const [showFavorites, setShowFavorites] = useState(false); // Track if we should show only favorites

  // Function to toggle favorite photos
  const toggleFavorite = (photoId) => {
    setFavPhotos((prevFavPhotos) => {
      if (prevFavPhotos.includes(photoId)) {
        return prevFavPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevFavPhotos, photoId];
      }
    });
  };

  // Function to filter photos by selected topic or favorites
  const filterPhotos = (photos, topicTitle) => {
    if (showFavorites) {
      console.log('Showing only favorite photos');
      return photos.filter((photo) => favPhotos.includes(photo.id));
    }
    if (!topicTitle) return photos; // If no topic selected, return all photos
    return photos.filter((photo) => photo.topic === topicTitle);
  };

  // Function to show all photos when "PhotoLabs" logo is clicked
  const showAllPhotos = () => {
    console.log("Showing all photos");
    setSelectedTopic(null);  // Reset the selected topic
    setShowFavorites(false);  // Reset the favorites view
  };

  // **Function to toggle showing only favorite photos**
  const toggleShowFavorites = () => {
    console.log("Toggling show favorites");
    setShowFavorites((prevShowFavorites) => !prevShowFavorites);  // Toggle the favorites view
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={filterPhotos(photos, selectedTopic)}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
        onTopicSelect={setSelectedTopic}
        showAllPhotos={showAllPhotos}  // Pass down the function to reset to all photos
        toggleShowFavorites={toggleShowFavorites}  // Pass down the function to toggle favorites view
      />
    </div>
  );
};

export default App;