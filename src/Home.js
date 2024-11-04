import React from 'react';
import Nav from './Nav';
import Side from './Side';
import Button from './Button';

export default function Home(){
    return(
        <div>
            <Nav/>
            <Side />
            <Button />
        </div>
    );
}