import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ userLocation, onClick }) => {
  const [userCredentials, setUserCredentials] = useState({
    userName: '',
  });
  const { latitude, longitude } = userLocation;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { userName } = userCredentials;

  const handleSubmit = () => {
    console.log({ userName, userLocation });
  };

  return (
    <Modal style={{ zIndex: 100000, background: '#f1f1f1' }}>
      <div className='modalForm'>
        <h1>User Location Details</h1>
        <label>Enter Your Name</label>
        <input
          type='text'
          name='userName'
          value={userCredentials.userName}
          onChange={handleChange}
          required
        />

        <label>Location Details:</label>
        <label>Latitude</label>
        <input
          type='text'
          name='latitude'
          value={latitude}
          onChange={handleChange}
          disabled
        />
        <label>Longitude</label>
        <input
          type='text'
          name='longitude'
          value={longitude}
          onChange={handleChange}
          disabled
        />
        <div className='buttonContainer'>
          <button
            onClick={() => {
              onClick();
            }}
          >
            Close Modal
          </button>
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Console Result
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
