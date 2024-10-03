import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {
  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Display the photo */}
      <div className="photo-details-modal__content">
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt={`${photo.user.name}'s photo`}
        />
      </div>

      {/* Photo details */}
      <div className="photo-details-modal__info">
        <p>{photo.user.name}</p>
        <p>{photo.location.city}, {photo.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;