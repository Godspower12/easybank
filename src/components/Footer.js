import React from 'react';
import Logo from  "../Assets/images/logo.svg";
import Fb from  "../Assets/images/icon-facebook.svg";
import Twitter from  "../Assets/images/icon-twitter.svg";
import Youtube from  "../Assets/images/icon-youtube.svg";
import Pinterest from  "../Assets/images/icon-pinterest.svg";
import Instagram from  "../Assets/images/icon-instagram.svg";
import "./styles.css";


const Footer = () => {
  return (
    <>
    <div className='footer-wrapper'>
    <div className="footer-contents">
    <div className="footer-logo">
      <img src={Logo} alt='logo'/> 
      <div className="icons">
<img src={Fb} alt="fb" />
<img src={Youtube} alt="youtube" />
<img src={Twitter} alt="twitter" />
<img src={Pinterest} alt="pinterest" />
<img src={Instagram} alt="instagram" />
      </div>
      </div>
      <div className="list-1">
        <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
      </div>
      <div className="list-2">
        <ul>
            <li>Career</li>
            <li>Support</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div className="footer-right">
        <button>Request Invite</button>
        <p> © Easybank. All Rights Reserved</p>
    </div>

    </div>
    <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Gp</a>.
  </div>
    <div className="mobile-attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Gp</a>.
  </div>
    </>

  );
}

export default Footer;
