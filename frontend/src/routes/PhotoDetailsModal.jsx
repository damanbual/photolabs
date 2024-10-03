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

      {/* Modal Content */}
      <div className="photo-details-modal__content">
        {/* Large version of the photo */}
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt={`${photo.user.name}'s photo`}
        />
      </div>

      {/* Photo details */}
      <div className="photo-details-modal__info">
        <div className="photo-details-modal__user">
          <img
            className="photo-details-modal__user-profile"
            src={photo.user.profile}
            alt={`${photo.user.name}'s profile`}
          />
          <div>
            <p className="photo-details-modal__user-name">{photo.user.name}</p>
            <p className="photo-details-modal__location">
              {photo.location.city}, {photo.location.country}
            </p>
          </div>
        </div>
      </div>

      {/* Similar Photos Placeholder */}
      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <div className="photo-details-modal__similar-photos-grid">
          {/* Render similar photos here in future steps */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;