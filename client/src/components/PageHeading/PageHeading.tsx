import React, { FC } from 'react';
import './PageHeading.css';

interface Props {
  heading: string;
  subheading: string
}

export const PageHeading: FC<Props> = ({ heading, subheading }) => {

  return <header className="PageHeading">
    <h1 className="Heading">{heading}</h1>
    <p className="font-normal">{subheading}</p>
  </header>
}