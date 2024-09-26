const photo1 = {
  "id": "1",
  "topic": "Nature", // Added topic field
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
    "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
  },
  "user": {
    "id": "1",
    "username": "joeexample",
    "name": "Joe Example",
    "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
  }
};

const photo2 = {
  "id": "2",
  "topic": "Travel", // Added topic field
  "location": {
    "city": "Toronto",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
    "regular": `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`
  },
  "user": {
    "id": "2",
    "username": "janedoe",
    "name": "Jane Doe",
    "profile": `${process.env.PUBLIC_URL}/profile-2.jpg`
  }
};

const photo3 = {
  "id": "3",
  "topic": "People", // Added topic field
  "location": {
    "city": "Ottawa",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
    "regular": `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`
  },
  "user": {
    "id": "3",
    "username": "alexsmith",
    "name": "Alex Smith",
    "profile": `${process.env.PUBLIC_URL}/profile-3.jpg`
  }
};

const photo4 = {
  "id": "4",
  "topic": "Fashion", // Added topic field
  "location": {
    "city": "Quebec",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-4-Full.jpg`,
    "regular": `${process.env.PUBLIC_URL}/Image-4-Regular.jpg`
  },
  "user": {
    "id": "4",
    "username": "sarahtaylor",
    "name": "Sarah Taylor",
    "profile": `${process.env.PUBLIC_URL}/profile-4.jpg`
  }
};

const photo5 = {
  "id": "5",
  "topic": "Animals", // Added topic field
  "location": {
    "city": "Vancouver",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-5-Full.jpg`,
    "regular": `${process.env.PUBLIC_URL}/Image-5-Regular.jpg`
  },
  "user": {
    "id": "5",
    "username": "michaeljohnson",
    "name": "Michael Johnson",
    "profile": `${process.env.PUBLIC_URL}/profile-5.jpg`
  }
};

const photo6 = {
  "id": "6",
  "topic": "Nature", // Added topic field
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-6-Full.jpg`,
    "regular": `${process.env.PUBLIC_URL}/Image-6-Regular.jpg`
  },
  "user": {
    "id": "6",
    "username": "annalee",
    "name": "Anna Lee",
    "profile": `${process.env.PUBLIC_URL}/profile-6.jpg`
  }
};

const photo7 = {
  "id": "7",
  "topic": "Travel", // Added topic field
  "location": {
    "city": "Calgary",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-7-Full.jpg`,
    "regular": `${process.env.PUBLIC_URL}/Image-7-Regular.jpg`
  },
  "user": {
    "id": "7",
    "username": "tombrown",
    "name": "Tom Brown",
    "profile": `${process.env.PUBLIC_URL}/profile-7.jpg`
  }
};

const photo8 = {
  "id": "8",
  "topic": "People", // Added topic field
  "location": {
    "city": "Ottawa",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-8-Full.jpg`,
    "regular": `${process.env.PUBLIC_URL}/Image-8-Regular.jpg`
  },
  "user": {
    "id": "8",
    "username": "karensmith",
    "name": "Karen Smith",
    "profile": `${process.env.PUBLIC_URL}/profile-8.jpg`
  }
};

const photo9 = {
  "id": "9",
  "topic": "Fashion", // Added topic field
  "location": {
    "city": "Nova Scotia",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-9-Full.jpg`,
    "regular": `${process.env.PUBLIC_URL}/Image-9-Regular.jpg`
  },
  "user": {
    "id": "9",
    "username": "davidhall",
    "name": "David Hall",
    "profile": `${process.env.PUBLIC_URL}/profile-9.jpg`
  }
};

const photo10 = {
  "id": "10",
  "topic": "Animals", // Added topic field
  "location": {
    "city": "Edmonton",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-10-Full.jpg`,
    "regular": `${process.env.PUBLIC_URL}/Image-10-Regular.jpg`
  },
  "user": {
    "id": "10",
    "username": "oliviadavis",
    "name": "Olivia Davis",
    "profile": `${process.env.PUBLIC_URL}/profile-10.jpg`
  }
};

const photos = [
  {
    ...photo1,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5
    }
  },
  {
    ...photo2,
    similar_photos: {
      photo1,
      photo3,
      photo4,
      photo5
    }
  },
  {
    ...photo3,
    similar_photos: {
      photo1,
      photo2,
      photo4,
      photo5
    }
  },
  {
    ...photo4,
    similar_photos: {
      photo1,
      photo2,
      photo3,
      photo5
    }
  },
  {
    ...photo5,
    similar_photos: {
      photo1,
      photo2,
      photo3,
      photo4
    }
  },
  {
    ...photo6,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5
    }
  },
  {
    ...photo7,
    similar_photos: {
      photo1,
      photo2,
      photo4,
      photo5
    }
  },
  {
    ...photo8,
    similar_photos: {
      photo1,
      photo2,
      photo4,
      photo5
    }
  },
  {
    ...photo9,
    similar_photos: {
      photo1,
      photo2,
      photo4,
      photo5
    }
  },
  {
    ...photo10,
    similar_photos: {
      photo1,
      photo2,
      photo4,
      photo5
    }
  }
];

export default photos;