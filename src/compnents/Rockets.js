import React from 'react';
import { useSelector } from 'react-redux';

const RocketsComponent = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h3>{rocket.rocket_name}</h3>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
        </div>
      ))}
    </div>
  );
};

export default RocketsComponent;
