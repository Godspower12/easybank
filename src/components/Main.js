import React from 'react';
import BgDesktop from "../Assets/images/bg-intro-desktop.svg";
import PhoneMockup from "../Assets/images/image-mockups.png";

const Main = () => {
  return (
    <div className='main'>
      <div className="main-left">
      <h1>Next Generation Digital Banking</h1>
      <p>Take your financial life online. Easybank is your one stop shop for spending, saving, budgeting,
        investing, and much more.</p>
        <button>Request Invite</button>
      </div>
      <div className="main-right">
       <div className='main-background'>
        <img src={BgDesktop} alt="main-img" />
       </div>
      <div className="mockup">
        <img src={PhoneMockup} alt="main-img" />  
        </div>
      </div>
    </div>
  );
}

export default Main;
