import React from 'react';
import FavIcon from './FavIcon'; // Import the favorite icon
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFav, onClick }) {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <FavIcon selected={isFav} /> {/* Update icon based on isFav */}
    </div>
  );
}

export default PhotoFavButton;