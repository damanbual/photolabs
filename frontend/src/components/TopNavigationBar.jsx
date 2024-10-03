import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favPhotos, favCount, onTopicSelect, showAllPhotos, toggleShowFavorites }) => {
  return (
    <div className="top-nav-bar">
      {/* Logo with showAllPhotos function */}
      <div 
        className="top-nav-bar__logo" 
        onClick={showAllPhotos} 
        style={{ cursor: 'pointer' }}>
        PhotoLabs
      </div>

      {/* Topic List */}
      <div className="top-nav-bar__center">
        <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      </div>

      {/* Favorites Badge */}
      <div 
        className="top-nav-bar__heart" 
        onClick={toggleShowFavorites} 
        style={{ cursor: 'pointer' }}>
        <FavBadge favCount={favCount} />
      </div>
    </div>
  );
};

export default TopNavigationBar;