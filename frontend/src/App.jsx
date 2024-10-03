import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; // HomeRoute component
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Import the modal component
import topics from './mocks/topics'; // Import mock data for topics
import photos from './mocks/photos'; // Import mock data for photos
import './App.scss';

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]); // Track favorited photos
  const [selectedTopic, setSelectedTopic] = useState(null); // Track selected topic
  const [showFavorites, setShowFavorites] = useState(false); // Track if we should show only favorites
  const [modalPhoto, setModalPhoto] = useState(null); // Track the photo for the modal

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
      return photos.filter((photo) => favPhotos.includes(photo.id));
    }
    if (!topicTitle) return photos; // If no topic selected, return all photos
    return photos.filter((photo) => photo.topic === topicTitle);
  };

  // Function to show all photos when "PhotoLabs" logo is clicked
  const showAllPhotos = () => {
    setSelectedTopic(null);  // Reset the selected topic
    setShowFavorites(false);  // Reset the favorites view
  };

  // Function to toggle showing only favorite photos
  const toggleShowFavorites = () => {
    setShowFavorites((prevShowFavorites) => !prevShowFavorites);  // Toggle the favorites view
  };

  // Function to handle photo click and show the modal
  const handlePhotoClick = (photo) => {
    setModalPhoto(photo); // Set the photo for the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setModalPhoto(null); // Reset the modal photo
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
        onPhotoClick={handlePhotoClick}  // Pass down the function to open the modal
      />
      {modalPhoto && (
        <PhotoDetailsModal
          photo={modalPhoto}
          onClose={closeModal} // Pass down the function to close the modal
        />
      )}
    </div>
  );
};

export default App;