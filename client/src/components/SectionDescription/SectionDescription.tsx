import React, { FC } from 'react';
import { MultilineText } from '../MultilineText';
import './SectionDescription.css';


interface Props {
  label: string; 
  heading?: string;
  subheading?: string;
  details?: string;
  invertColor?: boolean;
  full?: boolean;
}

export const SectionDescription:FC<Props> = ({
  children, 
  label,
  heading,
  subheading,
  details,
  invertColor,
  full
})  => {
  return <div className={`SectionDescription ${full? 'Full': ''}`}>
        <h2 className={`color-primary font-normal SectionLabel`}>{label}</h2>
        <h3 className={`SectionHeading  ${invertColor ? 'text-white' : ''}`}>
          <MultilineText text={heading || ''} />
        </h3>
        <h4 className={`SectionSubheading ${invertColor ? 'text-white' : ''}`}>{subheading}</h4>
        <span className="font-normal Desc">
          {details}
        </span>

        {children}
    </div>
}