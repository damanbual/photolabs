import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  // Destructure the values from useApplicationData hook
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    setShowFavorites,
    setSelectedTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topics}
        photos={onLoadTopic()}
        favPhotos={state.favPhotos}
        toggleFavorite={updateToFavPhotoIds}
        onTopicSelect={setSelectedTopic}
        showAllPhotos={() => setSelectedTopic(null)}
        toggleShowFavorites={() => setShowFavorites(!state.showFavorites)}
        onPhotoClick={onPhotoSelect}
      />
      {state.modalPhoto && (
        <PhotoDetailsModal
          photo={state.modalPhoto}
          onClose={onClosePhotoDetailsModal}
          isFav={state.favPhotos.includes(state.modalPhoto.id)}
          toggleFavorite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;