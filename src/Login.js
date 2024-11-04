import React from 'react';
import {useState,useEffect} from 'react';
import './Login.css';
import Image from './Images/Chat bot-amico.svg'
import Signin from './Signin';
import Signup from './Signup';

export default function Login(){
    const [isToggle,setToggle] = useState(false);
    const [iToggle,seToggle] = useState(true);
    const updateToggleState = () => {
        if (window.innerWidth < 940) {
            seToggle(false);
 
        } 
        else{
            seToggle(true);
 
        }
    }
    useEffect(() => {
        updateToggleState();
        window.addEventListener('resize', updateToggleState);
        return () => {
            window.removeEventListener('resize', updateToggleState);
        };
    }, []);
    return(
        <div className="flex absolute h-screen w-screen top-0 left-0">
            {(iToggle) &&  <div className="im"><img src={Image} className="img"/>  </div> }
            {(!isToggle) ? <Signin setToggle={setToggle}/> : <Signup setToggle={setToggle} />}
            
        </div>
    );
}