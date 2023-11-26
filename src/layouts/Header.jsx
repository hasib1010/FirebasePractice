import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../layouts/header.css"
const Header = () => {
     
    return (
        <div className='container mx-auto flex justify-between items-center '>

            <h1 className='text-5xl font-bold text-purple-500'>Hasib & CO.</h1>

            <div className='flex gap-6'>
                <NavLink  to={'/login'}>Login </NavLink>
                <NavLink to={'/registration'}>Registration </NavLink>

            </div>
        </div>
    );
};

export default Header;
