import React from 'react';
import TopicList from './components/TopicList'; // Import TopicList component
import PhotoList from './components/PhotoList'; // Import PhotoList component
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TopicList />  {/* Render the TopicList at the top */}
      <PhotoList />   {/* Render the PhotoList below the TopicList */}
    </div>
  );
};

export default App;