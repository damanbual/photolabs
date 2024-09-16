import React from "react";
import "../styles/PhotoListItem.scss";  // Styling import

// Refactored PhotoListItem component to use props
const PhotoListItem = ({ username, imageSource, location, profile }) => {
  return (
    <div className="photo-list-item">
      {/* Render the photo */}
      <img src={imageSource} alt={`${username}'s photo`} className="photo" />

      {/* Render the photographer details */}
      <div className="photo-details">
        <img src={profile} alt={`${username}'s profile`} className="profile-pic" />
        <div>
          <h3>{username}</h3>
          <p>{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
