import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';

const HomePage = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const getLocationDetails = (position) => {
    const { latitude, longitude } = position.coords;
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    setUserLocation({
      latitude: lat,
      longitude: lon,
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

  return (
    <div>{userLocation && <MapComponent userLocation={userLocation} />}</div>
  );
};

export default HomePage;
