import React, { FC } from 'react';

import './ImageDescriptionSection.css';

interface Props {
  image?:string;
  full?: boolean;
  reversed?: boolean;
}

export const ImageDescriptionSection :FC<Props> =({children, image, full, reversed}) => {
  return <div className="ImageDescriptionSection">
    <div className={`ImageDescriptionSectionContent ${reversed? 'FlexReversed' : ''}`}>
      {children}
      {image? <div className={`Image ${full? 'Full': ''}`} >
          <img src={image}  alt="ad" />
      </div>: null}
    </div>
  </div>
}