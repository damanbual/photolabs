import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import TopNavigationBar component
import PhotoList from './PhotoList'; // Import PhotoList component
import '../styles/HomeRoute.scss'; // Import HomeRoute styles

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />   {/* Include the TopNavigationBar */}
      <PhotoList />          {/* Include the PhotoList */}
    </div>
  );
};

export default HomeRoute;