import React from 'react';
import PhotoListItem from './PhotoListItem'; // Import PhotoListItem
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favPhotos, toggleFavorite, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            isFav={favPhotos.includes(photo.id)} // Determine if photo is favorited
            toggleFavorite={toggleFavorite} // Pass down the toggle function
            onPhotoClick={onPhotoClick} // Pass down the photo click handler
          />
        ))
      ) : (
        <li>No photos available.</li> // Default case for no photos
      )}
    </ul>
  );
};

export default PhotoList;