import React from 'react';
import BgDesktop from "../Assets/images/bg-intro-mobile.svg";
import PhoneMockup from "../Assets/images/image-mockups.png";


const MainMobile = () => {
  return (
    <div>
       <div className="mobile-setup">
     
     <div className="main-right">
      <div className='main-background'>
       <img src={BgDesktop} alt="main-img" />
      </div>
     <div className="mockup">
       <img src={PhoneMockup} alt="main-img" />  
       </div>
     </div>
     <div className="main-left">
     <h1>Next Generation Digital Banking</h1>
     <p>Take your financial life online. Easybank is your one stop shop for spending, saving, budgeting,
       investing, and much more.</p>
       <button>Request Invite</button>
     </div>
     </div>
    </div>
  );
}

export default MainMobile;
