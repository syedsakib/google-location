import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import NewModal from './NewModal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
  },
};

const MapComponent = (userLocation) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD3wm5QdlolRqcAUp0hxg2e_ExSFOhENLE',
  });
  if (loadError) return 'Error loading map';
  if (!isLoaded) return 'Loading Map';

  const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
  };

  const { latitude, longitude } = userLocation.userLocation;
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ zindex: -1 }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={{ lat: lat, lng: lon }}
      >
        {
          <Marker
            onClick={() => openModal()}
            position={{ lat: lat, lng: lon }}
          />
        }
      </GoogleMap>

      <div>
        <NewModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          customStyles={customStyles}
          userLocation={userLocation.userLocation}
        />
      </div>
    </div>
  );
};

export default MapComponent;
