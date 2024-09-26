import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import TopNavigationBar
import PhotoList from './PhotoList'; // Import PhotoList
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favPhotos, toggleFavorite, onTopicSelect }) => {
  return (
    <div className="home-route">
      {/* Pass topics, favPhotos, and onTopicSelect to TopNavigationBar */}
      <TopNavigationBar
        topics={topics}
        favPhotos={favPhotos}
        onTopicSelect={onTopicSelect} // Pass onTopicSelect to TopNavigationBar
      />
      {/* Pass photos, favPhotos, and toggleFavorite to PhotoList */}
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;