import React, {FC} from 'react';
import serviceIcon from '../../assets/img/service-icon.svg';

import './CarouselCard.css'

interface Props {
  heading: string;
  body: string;
}
export const CarouselCard:FC<Props> = ({ heading, body }) => {
  return   <div className="CarouselCard">
    <div className="bg-primary icon-wrapper">
        <img className="img icon" src={serviceIcon} alt="services" />
    </div>
    <h3 className="text-center font-weight-600 font-black">{heading}</h3>
    <p className="font-normal color-muted description text-center">
       {body}
    </p>
  </div>
}