import React from 'react';
import TopNavigationBar from './components/TopNavigationBar'; // Import TopNavigationBar component
import PhotoList from './components/PhotoList'; // Import PhotoList component
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />  {/* Render the TopNavigationBar at the top, which includes TopicList */}
      <PhotoList />         {/* Render the PhotoList below the TopNavigationBar */}
    </div>
  );
};

export default App;