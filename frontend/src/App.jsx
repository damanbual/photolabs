import React from "react";
import PhotoListItem from './components/PhotoListItem';  // Import the component
import './App.scss';  // Styling

// Sample data to pass into the PhotoListItem component
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,  // Path to the image
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,  // Path to profile image
};

const App = () => (
  <div className="App">
    {/* Pass props to PhotoListItem */}
    <PhotoListItem
      username={sampleDataForPhotoListItem.username}
      imageSource={sampleDataForPhotoListItem.imageSource}
      location={sampleDataForPhotoListItem.location}
      profile={sampleDataForPhotoListItem.profile}
    />
  </div>
);

export default App;