import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (light) {
        case 'red':
          setLight('green');
          setTimeout(() => setLight('yellow'), 3000);
          break;
        case 'yellow':
          setLight('red');
          break;
        case 'green':
          setLight('yellow');
          setTimeout(() => setLight('red'), 500);
          break;
        default:
          break;
      }
    }, getDurationForLight(light));

    return () => clearTimeout(timer);
  }, [light]);

  const getDurationForLight = (light) => {
    switch (light) {
      case 'red':
        return 4000;
      case 'yellow':
        return 500;
      case 'green':
        return 3000;
      default:
        return 0;
    }
  };

  return (
    <div className="traffic-light">
      <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${light === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;
