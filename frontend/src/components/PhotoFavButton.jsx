import React from 'react';
import FavIcon from './FavIcon'; // Import FavIcon
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFav, onClick }) {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <FavIcon selected={isFav} /> {/* Display correct icon based on isFav */}
    </div>
  );
}

export default PhotoFavButton;