import React from 'react';
import PhotoListItem from './PhotoListItem'; // Import PhotoListItem
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favPhotos, toggleFavorite, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFav={favPhotos.includes(photo.id)}  // Determine if the photo is favorited
          toggleFavorite={toggleFavorite}       // Pass the toggleFavorite function
          onPhotoClick={onPhotoClick}           // Pass the click handler
        />
      ))}
    </ul>
  );
};

export default PhotoList;