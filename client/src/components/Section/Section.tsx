

import React, { FC } from 'react'

import './Section.css';

interface Props {
  style?: {[key: string]: string}
  isBanner?: boolean;
  bgImage?: string;
}

const getSectionClasses = ({isBanner}: Omit<Props, 'style'>) => {
  let className = 'Section ';

  if(isBanner)  {
    className += 'bg-center Banner';
  }

  return className;
}
export const Section: FC<Props> = ({children, isBanner, style, bgImage}) => {
  return (
    <section
      className={getSectionClasses({isBanner})}
      style={{...style, backgroundImage: `url(${bgImage})`}}
    >
      <div className="SectionContent">
        {children}
      </div>
    </section>
  )
}
