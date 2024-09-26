import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import TopNavigationBar
import PhotoList from './PhotoList'; // Import PhotoList
import '../styles/HomeRoute.scss'; // Keep this import as it is

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />  {/* Render TopNavigationBar */}
      <PhotoList />         {/* Render PhotoList */}
    </div>
  );
};

export default HomeRoute;