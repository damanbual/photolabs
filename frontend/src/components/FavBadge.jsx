import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, className }) => {
  return (
    <div className={`fav-badge ${className}`}> {/* Applied the className prop here */}
      <FavIcon displayAlert={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;