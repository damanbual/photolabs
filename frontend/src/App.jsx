import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    getFavPhotos,
    showFavoritePhotos
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        favPhotos={state.favPhotos}
        favCount={state.favPhotos.length}
        toggleFavorite={updateToFavPhotoIds}
        onTopicSelect={onLoadTopic}
        showAllPhotos={() => onLoadTopic(null)}  // This ensures all photos show when logo is clicked
        toggleShowFavorites={() => {
          showFavoritePhotos();  // This will now show the favorite photos when the user clicks the heart icon
        }}
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