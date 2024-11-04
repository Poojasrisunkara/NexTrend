import React from 'react';
import Convo from './Convo';
import { Link } from 'react-router-dom';

export default function Button(){
    return( <div className="fixed z-20 p-4 w-[23vw] h-[90vh] flex flex-col gap-10 justify-between  right-0 text-[18px] mt-[11vh] top-0 bg-gradient-to-r from-slate-900 to-blue-800 text-white  border rounded-xl">
         <div className=" mt-1 flex justify-center">{<Convo />}</div>
         <div>
         <p className="text-white font-headland text-shadow" >Need a Hand? </p>
         <p className="text-white mt-1 text-[13px] font-headlande">Meet our friendly little Bot! It’s here to make things easier, answer your questions, and guide you along the way.</p>
         </div><div><Link to='/chatbot'><button className="h-[44px] w-[160px] bg-black border rounded-2xl text-white font-ced mb-[8vh] mt-2">Start Chat</button></Link>
         </div>
         </div>);
}