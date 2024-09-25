import React, { useState } from 'react';
import FavIcon from './FavIcon'; // Using your existing FavIcon component
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  // State to track if the photo is liked
  const [isLiked, setIsLiked] = useState(false);

  // Toggle function to switch between liked and unliked states
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleLike}>
      {/* Pass the "isLiked" state to the selected prop of FavIcon */}
      <FavIcon selected={isLiked} />
    </div>
  );
}

export default PhotoFavButton;