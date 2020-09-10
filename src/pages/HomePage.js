import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';

const HomePage = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const getLocationDetails = (position) => {
    const { latitude, longitude } = position.coords;
    setUserLocation({
      latitude,
      longitude,
    });
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocationDetails);
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };
    getLocation();
  }, []);

  //console.log(userLocation);

  return <>{userLocation && <MapComponent userLocation={userLocation} />}</>;
};

export default HomePage;
