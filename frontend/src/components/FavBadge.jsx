import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favCount }) => {
  return (
    <div className="fav-badge" style={{ cursor: 'pointer' }}>
      <FavIcon selected={favCount > 0} /> {/* Icon changes based on favCount */}
      {favCount > 0 && <span className="fav-badge__count">{favCount}</span>}
    </div>
  );
};

export default FavBadge;