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
  onPhotoClick, // Add onPhotoClick as a prop
}) => {
  return (
    <div className="home-route">
      {/* Pass topics, favPhotos, and onTopicSelect to TopNavigationBar */}
      <TopNavigationBar
        topics={topics}
        favPhotos={favPhotos}
        onTopicSelect={onTopicSelect}
        showAllPhotos={showAllPhotos}
        toggleShowFavorites={toggleShowFavorites}
      />
      {/* Pass photos, favPhotos, toggleFavorite, and onPhotoClick to PhotoList */}
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
        onPhotoClick={onPhotoClick}  // Pass down the onPhotoClick prop
      />
    </div>
  );
};

export default HomeRoute;