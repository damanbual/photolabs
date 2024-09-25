import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { username, imageSource, location, profile } = photo;

  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={imageSource}  // Ensuring image paths are properly referenced
        alt={username}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}  // Ensuring profile image paths are properly referenced
          alt={`${username} profile`}
        />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;