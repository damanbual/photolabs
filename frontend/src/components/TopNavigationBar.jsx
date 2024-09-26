import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favPhotos, onTopicSelect }) => {
  return (
    <div className="top-nav-bar">
      {/* Logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Topic List */}
      <div className="top-nav-bar__center">
        {/* Pass topics and onTopicSelect to TopicList */}
        <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      </div>
      {/* Favorites Badge */}
      <FavBadge favPhotos={favPhotos} className="top-nav-bar__heart" />
    </div>
  );
};

export default TopNavigationBar;