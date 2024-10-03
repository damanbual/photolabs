import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import TopNavigationBar
import PhotoList from './PhotoList'; // Import PhotoList
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  topics,
  photos,
  favPhotos,
  toggleFavorite,
  onTopicSelect,
  showAllPhotos,
  toggleShowFavorites,
  onPhotoClick
}) => {
  return (
    <div className="home-route">
      {/* Pass topics, favPhotos, and onTopicSelect to TopNavigationBar */}
      <TopNavigationBar
        topics={topics}
        favPhotos={favPhotos}
        onTopicSelect={onTopicSelect}
        showAllPhotos={showAllPhotos} // Function to reset to all photos
        toggleShowFavorites={toggleShowFavorites} // Function to toggle favorite photos
      />
      {/* Display a message if no photos match */}
      {photos.length === 0 ? (
        <div className="no-photos-message">No photos available for the selected topic.</div>
      ) : (
        // Pass photos, favPhotos, toggleFavorite, and onPhotoClick to PhotoList
        <PhotoList
          photos={photos}
          favPhotos={favPhotos}
          toggleFavorite={toggleFavorite}
          onPhotoClick={onPhotoClick} // Function to handle clicking on a photo
        />
      )}
    </div>
  );
};

export default HomeRoute;