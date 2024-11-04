import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export default function Tog  ({ children }){
    const [isTog, setIsTog] = useState(() => {
        // Get the initial value from localStorage or fallback to false
        const storedValue = localStorage.getItem('isTog');
        return storedValue === null ? true : JSON.parse(storedValue);
       
    }); 
    const [isT, setIsT] = useState(true);
    const [isTig, setIsTig] = useState(true);

    const handleTog = (e) => {
            setIsTog(prev => !prev);
    };
        const updateToggleState = () => {
        if (window.innerHeight > window.innerWidth) {
            setIsTig(false);
        } else {
            setIsTig(true);
        }
        if (window.innerWidth < 900) {
            setIsTog(false);
            setIsT(false);
        } else {
            setIsT(true);
        }
    };

    useEffect(() => {
        updateToggleState();
        window.addEventListener('resize', updateToggleState);
        return () => {
            window.removeEventListener('resize', updateToggleState);
        };
    }, []);
    useEffect(() => {
        localStorage.setItem('isTog', JSON.stringify(isTog));
    }, [isTog]);

    return (
        <AppContext.Provider value={{ isTog, isT,isTig, handleTog }}>
            {children}
        </AppContext.Provider>
    );
};
