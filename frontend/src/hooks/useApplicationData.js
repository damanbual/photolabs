import { useReducer, useEffect } from 'react';

// Action types for reducer
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

// Reducer function to handle different state updates
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotos: [...state.favPhotos, action.payload.id] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favPhotos: state.favPhotos.filter(id => id !== action.payload.id) };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload.photos };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload.topics };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, modalPhoto: action.payload.photo };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, modalPhoto: action.payload.photo };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

// Custom Hook for managing state and API interaction
function useApplicationData() {
  const initialState = {
    favPhotos: [],
    photos: [],
    topics: [],
    selectedPhoto: null,
    modalPhoto: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ensure these routes match your backend
        const photoResponse = await fetch('/api/photos');
        const topicResponse = await fetch('/api/topics');

        // Parse the JSON responses
        const photos = await photoResponse.json();
        const topics = await topicResponse.json();

        // Dispatch actions to set photos and topics in state
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Action to toggle favorite photos
  const updateToFavPhotoIds = (id) => {
    if (state.favPhotos.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    }
  };

  // Action when a user selects a photo
  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  // Action to close the modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photo: null } });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
}

export default useApplicationData;