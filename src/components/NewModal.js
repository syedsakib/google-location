import React, { useState } from 'react';
import Modal from 'react-modal';

const NewModal = ({ modalIsOpen, closeModal, customStyles, userLocation }) => {
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
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div>
        <h1>User Location Details</h1>
        <label>Enter Your Name</label>
        <input
          type='text'
          name='userName'
          value={userCredentials.userName}
          placeholder='Enter your name'
          onChange={handleChange}
          required
        />

        <label>Location Details:</label>
        <label>Latitude</label>
        <input type='text' name='latitude' value={latitude} disabled />
        <label>Longitude</label>
        <input type='text' name='longitude' value={longitude} disabled />
        <div className='buttonContainer'>
          <button onClick={closeModal}>Close Modal</button>
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

export default NewModal;
