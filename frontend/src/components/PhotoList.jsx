import React from 'react';
import PhotoListItem from './PhotoListItem'; // Import the PhotoListItem component
import '../styles/PhotoList.scss';

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {/* Map through the photos prop and pass each object to PhotoListItem */}
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;