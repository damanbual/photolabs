import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  // NEW: Destructuring the 'photo' object prop
  const { id, location, imageSource, username, profile } = photo;

  return (
    <div className="photo-list-item">
      {/* JSX for rendering the photo and its details */}
      <img src={imageSource} alt={`${username}'s photo`} />
      <div className="photo-details">
        <img src={profile} alt={`${username}'s profile`} className="profile-pic" />
        <p><strong>{username}</strong></p>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;