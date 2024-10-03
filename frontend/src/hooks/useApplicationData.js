import { useState } from 'react';
import topics from '../mocks/topics'; // Import mock data for topics
import photos from '../mocks/photos'; // Import mock data for photos

const useApplicationData = () => {
  // State management logic
  const [favPhotos, setFavPhotos] = useState([]); // Track favorite photos
  const [selectedTopic, setSelectedTopic] = useState(null); // Track selected topic
  const [showFavorites, setShowFavorites] = useState(false); // Track if favorites view is active
  const [modalPhoto, setModalPhoto] = useState(null); // Track the selected photo for modal

  // Action to toggle favorite photos
  const updateToFavPhotoIds = (photoId) => {
    setFavPhotos((prevFavPhotos) => {
      if (prevFavPhotos.includes(photoId)) {
        return prevFavPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevFavPhotos, photoId];
      }
    });
  };

  // Action to select a photo
  const onPhotoSelect = (photo) => {
    setModalPhoto(photo); // Set the selected photo for modal
  };

  // Action to close the modal
  const onClosePhotoDetailsModal = () => {
    setModalPhoto(null); // Clear the modal photo
  };

  // Action to filter photos by topic or favorites
  const onLoadTopic = () => {
    if (showFavorites) {
      return photos.filter((photo) => favPhotos.includes(photo.id));
    }
    if (!selectedTopic) return photos; // If no topic selected, return all photos
    return photos.filter((photo) => photo.topic === selectedTopic);
  };

  // Return the state and actions
  return {
    state: {
      topics,
      favPhotos,
      selectedTopic,
      showFavorites,
      modalPhoto
    },
    updateToFavPhotoIds,
    onPhotoSelect,
    onLoadTopic,
    onClosePhotoDetailsModal,
    setShowFavorites,
    setSelectedTopic
  };
};

export default useApplicationData;