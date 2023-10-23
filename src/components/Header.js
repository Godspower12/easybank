import React from 'react';
import Logo from  "../Assets/images/logo.svg"
import "./styles.css";
import Hamburger from './Hamburger/Hamburger';
const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>
      <img src={Logo} alt='logo'/>  
    </div>
    <div className='menu-container'>
    <div className='menu'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
    </div>
    <button>Request Invite</button>

    </div>
    <Hamburger/>
    </div>
  );
}

export default Header;
