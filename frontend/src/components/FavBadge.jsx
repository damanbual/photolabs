import React from 'react';
import FavIcon from './FavIcon'; // Assuming you have a FavIcon component
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} />  {/* Display the heart icon */}
      {/* You can add more logic for a counter or something else */}
    </div>
  );
};

export default FavBadge;