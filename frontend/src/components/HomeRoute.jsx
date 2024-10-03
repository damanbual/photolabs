import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  topics,
  photos,
  favPhotos,
  favCount,
  toggleFavorite,
  onTopicSelect,
  showAllPhotos,
  toggleShowFavorites,
  onPhotoClick
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favPhotos={favPhotos}
        favCount={favCount}
        onTopicSelect={onTopicSelect}
        showAllPhotos={showAllPhotos}
        toggleShowFavorites={toggleShowFavorites}
      />
      {photos.length === 0 ? (
        <div className="no-photos-message">No photos available for the selected topic.</div>
      ) : (
        <PhotoList
          photos={photos}
          favPhotos={favPhotos}
          toggleFavorite={toggleFavorite}
          onPhotoClick={onPhotoClick}
        />
      )}
    </div>
  );
};

export default HomeRoute;