import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import TopNavigationBar
import PhotoList from './PhotoList'; // Import PhotoList
import '../styles/HomeRoute.scss'; // Keep this import as it is

const HomeRoute = ({ topics, photos }) => {
  return (
    <div className="home-route">
      {/* Render TopNavigationBar, which includes TopicList */}
      <TopNavigationBar />
      {/* Render the PhotoList with photos prop */}
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;