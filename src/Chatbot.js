import React, { useState } from 'react';
import Message from './Message';
import Image from './Images/Image2.svg'
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch('http://127.0.0.1:5000/search?query=' + encodeURIComponent(input));
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error fetching the response');
      }

      const data = await response.json();
      const botMessage = { text: data.answer || 'No response', sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching the response:', error);
      const errorMessage = { text: error.message, sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput('');
  };

  return (
    <div className="flex absolute top-0 mt-[10vh] left-0 overflow-hidden items-center  w-screen h-[90vh] m-0 p-0">
      <div className="justify-center items-center flex flex-col gap-3 px-20 w-[60vw] drop-shadow-2xl mt-0 py-0 ">
        <img src={Image} className="h-[200px] w-[200px] border rounded-full mb-4 border-black" />
        <p className="font-ced font-bold text-[25px] text-blue-900 drop-shadow-2xl">Need Support?</p>
        <p className=" text-[18px] text-gray-600 drop-shadow-2xl"> Don’t worry, you’re not alone! I’m here to answer 
          your questions, guide you through the site, or just 
          chat about what’s on your mind. Give it a try!</p>
        <Link to='/home'><button className="bg-gradient-to-r from-slate-600 to-blue-700 px-4 py-3 m-6 mt-10 border rounded-xl text-white font-ced text-[20px]">Shop Now</button></Link>
      </div>
      <div className="bg-gradient-to-r from-slate-900 to-blue-700 mr-[5vw] p-6 text-white w-[600px] h-[520px] max-w-[90vw] border border-white rounded-2xl flex flex-col justify-between">
        <div className="flex flex-col space-y-3 overflow-y-auto mb-4 pr-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="bg-slate-700 text-blue-300 p-3 rounded-md max-w-[80%]">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <form onSubmit={handleSend} className="flex mt-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow bg-slate-700 text-blue-200 p-3 border border-white rounded-xl focus:outline-none text-white text-[15px]"
          />
          <button
            type="submit"
            className="ml-2 border border-white bg-gradient-to-r from-black to-gray-400 hover:bg-blue-700 text-white px-4 h-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;


