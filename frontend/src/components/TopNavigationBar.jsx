import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics }) => {
  return (
    <div className="top-nav-bar">
      {/* Logo remains on the left */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* The center topic list is wrapped in a div to ensure centering */}
      <div className="top-nav-bar__center">
        {/* Pass topics to TopicList */}
        <TopicList topics={topics} /> 
      </div>

      {/* FavBadge (heart icon) remains on the right */}
      <FavBadge className="top-nav-bar__heart" />
    </div>
  );
};

export default TopNavigationBar;