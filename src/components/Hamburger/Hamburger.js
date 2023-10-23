import React, { useState } from 'react';
import "./Hamburger.css";

function Hamburger() {

  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show)
  }
  return (
    <div className='menu-wrap'>
      <input onClick={handleMenu} type="checkbox" name="" id=""  className='toggler'/>
      <div className="hamburger">
        <div></div>
      </div>
     { show && <div className="menu-background">
        <div>
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
        </div>
      </div>}
    </div>
  );
}

export default Hamburger;
