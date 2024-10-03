import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favPhotos, toggleFavorite, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFav={favPhotos.includes(photo.id)}
          toggleFavorite={toggleFavorite}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;