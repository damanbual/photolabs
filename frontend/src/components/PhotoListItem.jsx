import React from 'react';
import PhotoFavButton from './PhotoFavButton'; // Import the button
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, isFav, toggleFavorite }) => {
  const { user, urls, location } = photo; // Destructure user, urls, and location

  return (
    <div className="photo-list__item">
      {/* Add PhotoFavButton here, passing down the favorite state and toggle function */}
      <PhotoFavButton isFav={isFav} onClick={() => toggleFavorite(photo.id)} />

      <img
        className="photo-list__image"
        src={urls.regular}
        alt={`${user.name}'s photo`} // Use user's name for the alt text
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