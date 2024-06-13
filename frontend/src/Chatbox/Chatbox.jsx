// src/Chatbox.js
import React from 'react';
import './Chatbox.css'; // Import some basic styles
import logo from '../assets/whatsapp.png'

const Chatbox = () => {
  const phoneNumber = '+9779804353544'; // Replace with the desired phone number
  const message = 'Hello! I would like to inquire about...'; // Replace with your pre-filled message

  const handleChatboxClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="chatbox" onClick={handleChatboxClick}>
      <img src={logo}/>
    </div>
  );
};

export default Chatbox;
