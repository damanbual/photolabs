import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favPhotos, toggleFavorite }) => {
  if (!favPhotos) {
    favPhotos = []; // Ensure favPhotos is at least an empty array
  }

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFav={favPhotos.includes(photo.id)} // Check if the photo is favorited
          toggleFavorite={toggleFavorite} // Pass toggle function
        />
      ))}
    </ul>
  );
};

export default PhotoList;