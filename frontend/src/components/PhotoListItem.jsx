import React from 'react';
import PhotoFavButton from './PhotoFavButton'; // Import PhotoFavButton
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, isFav, toggleFavorite }) => {
  const { user, urls, location } = photo;

  return (
    <div className="photo-list__item">
      {/* Pass isFav and toggleFavorite to PhotoFavButton */}
      <PhotoFavButton isFav={isFav} onClick={() => toggleFavorite(photo.id)} />

      <img
        className="photo-list__image"
        src={urls.regular}
        alt={`${user.name}'s photo`}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={`${user.name}'s profile`}
        />
        <div className="photo-list__user-info">
          <p>{user.name}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;