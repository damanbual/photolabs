import React from 'react';
import TopNavigationBar from './TopNavigationBar'; 
import PhotoList from './PhotoList'; 
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favPhotos, toggleFavorite, onTopicSelect, showAllPhotos, toggleShowFavorites }) => {
  const favCount = favPhotos.length; // Calculate the number of favorited photos

  return (
    <div className="home-route">
      {/* Pass topics, favPhotos, favCount, and other props to TopNavigationBar */}
      <TopNavigationBar
        topics={topics}
        favPhotos={favPhotos}
        favCount={favCount}  // Pass the favorite count to TopNavigationBar
        onTopicSelect={onTopicSelect}
        showAllPhotos={showAllPhotos} 
        toggleShowFavorites={toggleShowFavorites} 
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