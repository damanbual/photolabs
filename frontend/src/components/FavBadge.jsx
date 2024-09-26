import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon />
      {isFavPhotoExist && (
        <div className="fav-badge__count">
          <span>1</span> {/* You can update this to show the number of favorite photos */}
        </div>
      )}
    </div>
  );
};

export default FavBadge;