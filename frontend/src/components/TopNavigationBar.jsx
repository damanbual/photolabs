import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favPhotos }) => {
  if (!topics || topics.length === 0) {
    return <div>No topics available</div>; // Handle missing or empty topics
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__center">
        <TopicList topics={topics} />
      </div>
      <FavBadge favPhotos={favPhotos} className="top-nav-bar__heart" />
    </div>
  );
};

export default TopNavigationBar;