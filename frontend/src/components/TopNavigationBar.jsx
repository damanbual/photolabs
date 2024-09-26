import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__center">
        <TopicList topics={topics} />
      </div>
      <FavBadge className="top-nav-bar__heart" />
    </div>
  );
}

export default TopNavigationBar;