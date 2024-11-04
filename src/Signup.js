import React,{useState} from 'react';

export default function Signup({setToggle}){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');
    const handleSignup=()=>{
        if(password!==confirmPassword){
            alert('passwords do not match!');
            return
        }
        let users = JSON.parse(localStorage.getItem('users')) || []
        if(users.some(user => user.username === username)){
            alert('Username already exists');
            return;
        }
        users.push({username,password});
        localStorage.setItem('users',JSON.stringify(users));
        alert('Account created Successfully!');
        setToggle(false);
    };
    return(
        <div className="flex flex-col justify-center items-center h-screen w-screen text-xl gap-11 ">
            <div>
            <p className="text-center font-serif text-[22px] mb-2">Welcome to NexTrend!</p>
            <p className="text-[12px] text-gray-500 font-headland text-center">Please Sign up to access your personalized shopping experience, exclusive deals, and curated recommendations tailored just for you.</p>
            </div>
            <div className="flex flex-col gap-2 pt-0 pb-3 justify-center w-[326px] h-[380px] p-5 shadow">
                <span className="material-icons text-5xl text-center mb-3 text-gray-700">account_circle</span>

                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange = { (e) => setUsername(e.target.value)}
                className="border border-[#e5e6e7] rounded-sm h-[39px] p-3 text-[14px]" />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} className="border border-[#e5e6e7] rounded-sm h-[39px] p-3 text-[14px]"/>

                <input
                type="password"
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                className="border border-[#e5e6e7] rounded-sm h-[40px] p-3 text-[14px] mb-5"/>

                <button
                onClick={handleSignup}
                className="border border-[#e5e6e7] rounded-sm h-[41px] bg-[#37474f] text-[white] text-[16px]">Sign up
                </button>

                <div className="flex justify-between text-[14px] text-blue-800">
                    <p>Already did?</p>
                    <p onClick={() => setToggle(false)} className="cursor-pointer">Sign in</p>
                </div>
            </div>
            
        </div>
    );
}