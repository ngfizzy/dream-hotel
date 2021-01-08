import React from 'react';

import facebookImage from '../../assets/img/001-facebook.svg';
import twitterImage from '../../assets/img/002-twitter.svg';
import gPlusImage from '../../assets/img/004-google-plus.svg';

export  function Footer() {
  return (
    <footer className="footer">
    <div className="wrapper">
      <div className="info">
        <div className="info-wrapper">
          <h2 className="text-white">Zetta Hotels</h2>
          <p className="text-muted">
            Our hotel is an image of quality and profesionalism combined
            with hard work and precision. You can expect only the best services
            from our staff.
          </p>
          <span className="social-icons">
            <img src={facebookImage} alt="" />
            <img src={twitterImage} alt="" />
            <img src={gPlusImage}  alt="" />
          </span>
        </div>
      </div>
      <div className="useful-links">
        <div className="left">
          <h3 className="text-white">Useful Links</h3>
          <ul className="links ">
            <li><a className="text-normal text-primary" href="/#">Blog</a></li>
            <li><a className="text-normal text-primary" href="/#">Rooms</a></li>
            <li><a className="text-normal text-primary" href="/#">Gift Card</a></li>
            <li><a className="text-normal text-primary" href="/#">Testimonials</a></li>
            <br />
            <br/>
          </ul>
        </div>
        <div className="right">
          <h3 className="text-white">Privacy</h3>
          <ul className="links ">
            <li><a className="text-normal text-primary" href="/#">Career</a></li>
            <li><a className="text-normal text-primary" href="/#">About Us</a></li>
            <li><a className="text-normal text-primary" href="/#">Contact Us</a></li>
            <li><a className="text-normal text-primary" href="/#">Services</a></li>
            <br />
            <br />
          </ul>
        </div>
      </div>
      <div className="contact">
        <div className="contact-wrapper">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <img className="color-primary d-inline-block v-align-middle mr-5" src="assets/img/mail.svg" alt="" />
            <span className="font-normal d-inline-block v-align-middle mr-5">example@yahoo.com</span>
          </div>
          <div className="contact-item">
            <img className="color-primary d-inline-block v-align-middle mr-5" src="assets/img/phone.svg" alt="" />
            <span className="font-normal d-inline-block v-align-middle mr-5"> +0 320 422 4254</span>
          </div>
          <div className="contact-item">
            <img className="color-primary d-inline-block v-align-middle mr-5" src="assets/img/map-pin.svg" alt="" />
            <span className="font-normal d-inline-block v-align-middle mr-5">Main Str Chicago Illinois</span>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
      </div>
      <div className="license">
        <span className="font-normal">
          Copyright ©2020 All rights reserved |
          This template is made with love by
          <span className="text-primary">@ngfizzy</span>
        </span>
        <span className="text-primary">www.protfolioname.com</span>
      </div>
  </footer>
  )
}
