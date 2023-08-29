import React, { useState } from 'react';
import whatsapp from "../../styleitems/Whatsapp Logo.gif" 
import './Whatsapp.css';


const WhatsAppButton = () => {
  const [selectedMessage, setSelectedMessage] = useState('');
  const [showChatBox, setShowChatBox] = useState(false);
  const phoneNumber = '923041418406';

  const handleChangeMessage = (newMessage) => {
    setSelectedMessage(newMessage);
  };

  const handleClickWhatsApp = () => {
    const encodedMessage = encodeURIComponent(selectedMessage);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink);
  };

  return (
    <div className="whatsapp-container">
      <div
        className="whatsapp-image-container"
        onMouseEnter={() => setShowChatBox(true)}
        onMouseLeave={() => setShowChatBox(false)}
      >
        <img
          className="whatsapp-image"
          src={whatsapp}
          alt="WhatsApp"
        />
        {showChatBox && (
          <div className="chat-box">
            <h5 className="whatsapp-heading">Let's Chat on Whatsapp</h5>
            <textarea
              className="message-input"
              value={selectedMessage}
              onChange={(e) => handleChangeMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button className="send-button" onClick={handleClickWhatsApp}>
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppButton;
