import React from 'react';
import CityComponent from '@/components/CityComponents'; 

const Calgary = () => {
  const calgaryData = {
    name: "Calgary",
    imageUri: "https://th.bing.com/th/id/OIP.U03UplcKhBEKgb_pNRWzugHaEG?w=296&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    link: "https://www.calgary.ca/home.html",
    facts: [
      "Calgary and New York City are about the same size geographically.",
      "Calgary is the sunniest city in Canada, averaging 2300 hours of sunshine per year.",
      'It is often called "Cowtown" because of its Wild West image.',
    ],
  };

  return <CityComponent {...calgaryData} />;
};

export default Calgary;


