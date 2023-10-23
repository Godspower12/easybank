import React from 'react';
import Online from "../Assets/images/icon-online.svg";
import Budgeting from "../Assets/images/icon-budgeting.svg";
import Onboarding from "../Assets/images/icon-onboarding.svg";
import Api from "../Assets/images/icon-api.svg";

const Options = () => {
  return (
    <div className='options-container'>
    <div className="options-header">
    <h1>Why choose Easybank?</h1>
      <p>We leverage Open Banking to turn your bank account into your financial hub <br />
       control your finances like never before.
      </p> 
    </div>
      <div className="options">
      <div className="online-banking">
        <img src={Online} alt="online" />
        <h2>Online Banking</h2>
        <p>Our web and mobile application allow you to keep track of your finances wherever you are in the world.</p>
       </div>

       <div className="simple-budgeting">
        <img src={Budgeting} alt="budgeting" />
        <h2>Simple Budgeting</h2>
        <p>See exactly where your money goes each month. Recieve notifications whenever you are close to your limit</p>
       </div>
       <div className="fast-onboarding">
        <img src={Onboarding} alt="onboarding" />
        <h2>Fast Onboarding</h2>
        <p>We don't do branches. Open your account in minutes online and start taking control of your finance right away.</p>
       </div>
       <div className="Open-api">
        <img src={Api} alt="api" />
        <h2>Open API</h2>
        <p>Manage your savings, investment, pensions, and much more from one account. trackign your moneys has never got easier</p>
       </div>
       
      </div>

    </div>
  );
}

export default Options;
