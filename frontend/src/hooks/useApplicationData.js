import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.payload.id]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotos: state.favPhotos.filter(id => id !== action.payload.id)
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modalPhoto: action.payload.photo
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        modalPhoto: action.payload.photo
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {
  const initialState = {
    favPhotos: [],
    photos: [],
    topics: [],
    selectedPhoto: null,
    modalPhoto: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Log photos whenever state.photos changes
    console.log("All Photos:", state.photos);
  }, [state.photos]);  // This ensures the log happens whenever photos are updated
  
  const fetchData = async () => {
    try {
      const photoResponse = await fetch('/api/photos');
      const topicResponse = await fetch('/api/topics');
  
      if (!photoResponse.ok || !topicResponse.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const photos = await photoResponse.json();
      const topics = await topicResponse.json();
  
      console.log("Fetched Photos Data: ", photos);
      console.log("Fetched Topics Data: ", topics);
  
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  
  // Fetch data when the component mounts
  useEffect(() => {
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

  // Updated onLoadTopic 
  const onLoadTopic = (topicTitle) => {
    console.log("Selected Topic:", topicTitle);
  
    if (topicTitle) {
      // Fetch photos again to ensure we always work with the original photo set
      fetch('/api/photos')
        .then(res => res.json())
        .then(data => {
          console.log("Fetched Photos for Filtering:", data);
  
          // Now we filter the freshly fetched photos by the selected topic
          const filteredPhotos = data.filter(photo => photo.topic_id === state.topics.find(t => t.title === topicTitle)?.id);
          console.log("Filtered Photos:", filteredPhotos);
  
          // Dispatch the filtered photos to the state
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: filteredPhotos } });
        })
        .catch(error => console.error("Error fetching photos for topic filtering: ", error));
    } else {
      // Re-fetch all photos from the backend if no topic is selected (i.e., reset functionality)
      console.log("Resetting to all photos from the API.");
      fetch('/api/photos')
        .then(res => res.json())
        .then(data => {
          console.log("Fetched All Photos:", data);
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: data } });
        })
        .catch(error => console.error("Error resetting photos: ", error));
    }
  };

  // Action to close the modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photo: null } });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onLoadTopic,
    onClosePhotoDetailsModal
  };
}

export default useApplicationData;