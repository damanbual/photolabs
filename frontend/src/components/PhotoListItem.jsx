import React from "react";
import PhotoFavButton from "./PhotoFavButton"; // Import the button
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { username, imageSource, location, profile } = photo;

  return (
    <div className="photo-list__item">
      {/* Add PhotoFavButton here, above the image */}
      <PhotoFavButton />

      <img
        className="photo-list__image"
        src={imageSource}
        alt={username}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
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