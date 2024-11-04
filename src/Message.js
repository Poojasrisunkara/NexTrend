import React from 'react';
// You can add styles for messages

const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      <span>{text}</span>
    </div>
  );
};

export default Message;
