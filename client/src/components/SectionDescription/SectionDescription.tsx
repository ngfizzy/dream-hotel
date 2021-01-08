import React, { FC } from 'react';
import './SectionDescription.css';


interface Props {
  label: string; 
  heading?: string;
  subheading?: string;
  details?: string;
}

export const SectionDescription:FC<Props> = ({children, label, heading, subheading, details})  => {
  return <div className="SectionDescription">
        <h2 className="color-primary font-normal SectionLabel">{label}</h2>
        <h3 className="SectionHeading">{heading}</h3>
        <h4 className="SectionSubheading">{subheading}</h4>
        <p className="font-normal">
          {details}
        </p>

        {children}
    </div>
}