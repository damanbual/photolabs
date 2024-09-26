import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import TopNavigationBar
import PhotoList from './PhotoList'; // Import PhotoList
import '../styles/HomeRoute.scss'; // Keep this import as it is

const HomeRoute = ({ topics, photos, favPhotos, toggleFavorite }) => {
  return (
    <div className="home-route">
      {/* Pass the topics down to TopNavigationBar */}
      <TopNavigationBar topics={topics} />  {/* Ensure topics prop passed */}
      
      {/* Render the PhotoList and pass the necessary props */}
      <PhotoList
        photos={photos}
        favPhotos={favPhotos} // Pass favorite state
        toggleFavorite={toggleFavorite} // Pass the toggle function
      />
    </div>
  );
};

export default HomeRoute;