import React from 'react'
import logo from '/logo.png'
import './Header.scss';
const Header=()=> {
  return (
    <div className='header'>
        <div className="logo">
            <img src={logo} alt='logo'/>
        </div>
    </div>
  )
};
export default Header;
