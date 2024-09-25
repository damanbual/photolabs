import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  // Update toggleLike to reference the previous state
  const toggleLike = useCallback(() => {
    setIsLiked(prevIsLiked => !prevIsLiked);  // Using previous state
  }, []);

  return (
    <div className="photo-list__fav-icon" onClick={toggleLike}>
      <FavIcon selected={isLiked} />
    </div>
  );
}

export default PhotoFavButton;