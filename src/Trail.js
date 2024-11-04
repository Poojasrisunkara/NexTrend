import React from 'react';
import Chatbot from './Chatbot';
import Nav from './Nav';


export default function Trail(){
    return( <div>
            {<Nav />}
            {<Chatbot />}
        </div>);
}