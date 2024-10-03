import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, isFav, toggleFavorite, onPhotoClick }) => {
  const { user, urls, location } = photo;

  return (
    <div className="photo-list__item" onClick={() => onPhotoClick(photo)}>
      {/* Favorite button */}
      <PhotoFavButton
        isFav={isFav}
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering photo click when favoriting
          toggleFavorite(photo.id);
        }}
      />

      {/* Photo thumbnail */}
      <img
        className="photo-list__image"
        src={urls.regular}
        alt={`${user.name}'s photo`}
      />

      {/* User details below the image */}
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