import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favPhotos, onTopicSelect, showAllPhotos, toggleShowFavorites }) => {
  return (
    <div className="top-nav-bar">
      {/* Logo */}
      <div 
        className="top-nav-bar__logo" 
        onClick={() => {
          console.log('PhotoLabs logo clicked');  // Log the click
          showAllPhotos();  // Invoke showAllPhotos to reset state
        }} 
        style={{ cursor: 'pointer' }}
      >
        PhotoLabs
      </div>

      {/* Topic List */}
      <div className="top-nav-bar__center">
        <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      </div>

      {/* Favorites Badge */}
      <div 
        className="top-nav-bar__heart" 
        onClick={() => {
          console.log('Favorites heart clicked');  // Log the click
          toggleShowFavorites();  // Toggle to show only favorite photos
        }} 
        style={{ cursor: 'pointer' }}
      >
        {/* Pass down the number of favorite photos as favCount */}
        <FavBadge favCount={favPhotos.length} />
      </div>
    </div>
  );
};

export default TopNavigationBar;