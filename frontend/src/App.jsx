import React from 'react';
import TopNavigationBar from './components/TopNavigationBar'; // Import TopNavigationBar component
import PhotoList from './components/PhotoList'; // Import PhotoList component
import HomeRoute from './components/HomeRoute'; // HomeRoute component
import topics from './mocks/topics'; // Import mock data for topics
import photos from './mocks/photos'; // Import mock data for photos
import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/* Pass the mock data as props to PhotoList and TopicList */}
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;