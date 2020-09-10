import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import ModalComponent from './ModalComponent';
//import Modal from 'react-modal';

const MapComponent = (userLocation) => {
  const [modal, setmodal] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD3wm5QdlolRqcAUp0hxg2e_ExSFOhENLE',
  });
  if (loadError) return 'Error loading map';
  if (!isLoaded) return 'Loading Map';

  const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
  };

  //console.log(userLocation.userLocation);
  const { latitude, longitude } = userLocation.userLocation;
  //console.log(latitude);

  //
  const onClick = () => {
    setmodal(false);
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={{ lat: latitude, lng: longitude }}
      >
        {
          <Marker
            onClick={() => console.log('000')}
            position={{ lat: latitude, lng: longitude }}
          />
        }
      </GoogleMap>

      {/* <button onClick={() => setmodal(true)}>Close</button> */}

      {modal ? (
        <ModalComponent
          userLocation={userLocation.userLocation}
          onClick={onClick}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default MapComponent;
