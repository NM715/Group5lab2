import React from 'react';
import CityComponent from '@/components/CityComponents'; 


const Edmonton = () => {
  const edmontonData = {
    name: "Edmonton",
    imageUri: "https://th.bing.com/th/id/R.d5d2db50be1584e726fc3b2955cfe340?rik=sU9dAY6vy6NCYg&pid=ImgRaw&r=0",
    link: "https://www.edmonton.ca/",
    facts: [
      "Edmonton once had the world's largest mall.",
      "It is home to Canada's largest living history museum.",
      "The city is divided by the North Saskatchewan River.",
    ],
  };

  return <CityComponent {...edmontonData} />;
};

export default Edmonton;

