

import React, { FC } from 'react'

import './Section.css';

interface Props {
  style?: {[key: string]: string}
  isBanner?: boolean;
  bgImage?: string;
  fill?: boolean;
  label?: string;
}

const getSectionClasses = ({isBanner}: Omit<Props, 'style'>) => {
  let className = 'Section bg-center ';

  if(isBanner)  {
    className += 'Banner ';
  }


  return className;
}

const getSectionContentClasses = (fill?: boolean) => {
  let className = 'SectionContent ';

  if(fill) {
    className += 'Fill ';
  }

  return className;
}
export const Section: FC<Props> = ({children, isBanner, style, bgImage, fill}) => {
  return (
    <section
      className={getSectionClasses({isBanner, fill})}
      style={{...style, backgroundImage: `url(${bgImage})`}}
    >
      <div className={getSectionContentClasses(fill)}>
        {children}
      </div>
    </section>
  )
}
