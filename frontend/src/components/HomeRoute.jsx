import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favPhotos, toggleFavorite, onTopicSelect }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} onTopicSelect={onTopicSelect} />
      <PhotoList photos={photos} favPhotos={favPhotos} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;