import React from 'react';
import PhotoListItem from './PhotoListItem'; // Import the PhotoListItem component
import '../styles/PhotoList.scss';

// Sample data for the photo list
const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "janedoe",
      name: "Jane Doe",
      profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Vancouver",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "alexsmith",
      name: "Alex Smith",
      profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
    },
  },
];

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {/* Map through the sampleDataForPhotoList and pass each object to PhotoListItem */}
      {sampleDataForPhotoList.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;