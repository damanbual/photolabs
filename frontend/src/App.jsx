// frontend/src/App.jsx

import React from 'react';
import PhotoList from './components/PhotoList'; // Import PhotoList component
import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/* Render the PhotoList component */}
      <PhotoList />
    </div>
  );
};

export default App;