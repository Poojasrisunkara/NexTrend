import React from 'react';

export default function ChatBox() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-800 p-4 text-white w-[244px] h-[160px] max-w-[20vw] mt-[30px] border border-white rounded-lg flex flex-col justify-between text-[14px]">
      
      {/* Bot message on the right */}
      <div className="flex justify-end mb-1">
        <div className="bg-slate-700 text-blue-300 p-1 rounded-md">
          Hi! How can I help you?
        </div>
      </div>

      {/* User message on the left */}
      <div className="flex justify-start mb-1">
        <div className="bg-slate-700 text-blue-300 p-1 rounded-md">
          Can you help me order?
        </div>
      </div>

      {/* Bot message on the right */}
      <div className="flex justify-end">
        <div className="bg-slate-700 text-blue-300 p-1 rounded-md">
          Yes! I sure can.
        </div>
      </div>
    </div>
  );
}
