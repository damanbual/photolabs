import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favCount, onClick }) => {
  return (
    <div className="fav-badge" onClick={onClick} style={{ cursor: 'pointer' }}>
      <FavIcon selected={favCount > 0} />
      {favCount > 0 && <span className="fav-badge__count">{favCount}</span>}
    </div>
  );
};

export default FavBadge;