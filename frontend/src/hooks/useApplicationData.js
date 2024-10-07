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
      // Fetch both photos and topics concurrently
      const [photoResponse, topicResponse] = await Promise.all([
        fetch('/api/photos'),
        fetch('/api/topics')
      ]);
  
      // Wait for both fetches to resolve and parse their JSON
      const [photos, topics] = await Promise.all([
        photoResponse.json(),
        topicResponse.json()
      ]);
  
      console.log("Fetched Photos Data: ", photos);
      console.log("Fetched Topics Data: ", topics);
  
      // Dispatch both photo and topic data to the state
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
      // Find the topic ID based on the selected topic title
      const topic = state.topics.find(t => t.title === topicTitle);
      if (topic) {
        const topicId = topic.id;
  
        // Fetch photos by topic ID from the backend
        fetch(`/api/topics/photos/${topicId}`)
          .then(res => res.json())
          .then(data => {
            console.log("Fetched Photos for Topic:", data);
  
            // Dispatch the fetched photos to the state
            dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: data } });
          })
          .catch(error => console.error("Error fetching photos for topic: ", error));
      } else {
        console.error("Topic not found!");
      }
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