import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Signin({setToggle}){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSignin=() =>{
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username===username && user.password===password);
        if(user){
            navigate('/home');
        }
        else{
            alert('Invalid Username or Password');
        }
    };
    return(
        <div className="flex flex-col items-center h-[100vh]  w-screen text-xl gap-10 justify-center">
            <div>
            <p className="text-center font-serif text-bold text-[22px] pb-2">Welcome to NexTrend!</p>
            <p className="text-[12px] text-center font-headland text-gray-500">Log in to access your personalized shopping experience, exclusive deals, and curated recommendations tailored just for you.</p>
            </div>
            <div className="flex flex-col gap-2 pt-0 pb-5 justify-center w-[316px] h-[340px] p-5 shadow">
                <span className="material-icons text-5xl text-center mb-4 text-gray-700">account_circle</span>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange = { (e) => setUsername(e.target.value)}
                className=" border border-[#e5e6e7] rounded-sm h-[39px] p-3  text-[14px]" />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                className="border border-[#e5e6e7] rounded-sm h-[39px] p-3 text-[14px]"/>

                <button
                onClick={handleSignin}
                className="border border-[#e5e6e7] rounded-sm h-[39px] bg-[#37474f] text-[white] text-[17px] mt-7">Login</button>
                <div className="flex justify-between text-[13px] text-blue-800">
                    <p className="cursor-pointer">forgot password?</p>
                    <p onClick={() => setToggle(true)} className="cursor-pointer">Sign Up</p>
                </div>
            </div>
            
        </div>
    );
}