import React, { FC } from 'react';
import './SleekButton.css';

export const SleekButton:FC<{text: string, invertColor?: boolean}> = ({text, invertColor}) => {
  return <span className={`SleekButton text-center ${invertColor ? ' ColorInverted': ''}`}>
    {text}
  </span>
}
