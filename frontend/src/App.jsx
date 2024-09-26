import React from 'react';
import HomeRoute from './components/HomeRoute'; // Import HomeRoute component
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <HomeRoute />  {/* Render the HomeRoute component */}
    </div>
  );
};

export default App;