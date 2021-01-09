import React, { FC } from 'react';

import johnDoeImage from '../../assets/img/marius-ciocirlan-vMV6r4VRhJ8-unsplash.png';

import './Testimonial.css';

export const Testimonial:FC = () => {
  return <div className="Testimonial">
    <div className="Profile">
      <div className="picture-wrapper">
        <img  className="picture" src={johnDoeImage} alt="marcus" />
      </div>
      <div className="info">
        <h5 className="font-normal font-black">John Doe</h5>
        <h6 className="color-muted profession">IT Engineer</h6>
      </div>
    </div>
      <p className="">
        I'm very glad I had the opportunity to visit this hotel. 
        The stuff is very friendly and I will definetly visit the
        hotel again next year.
      </p>
      <ul className="pages color-primary">
        <li className=" d-inline"><span className="bullet"></span></li>
        <li className=" d-inline"><span className="bullet selected"></span></li>
        <li className=" d-inline"><span className="bullet"></span></li>
        <li className=" d-inline"><span className="bullet"></span></li>
      </ul>
  </div>
}