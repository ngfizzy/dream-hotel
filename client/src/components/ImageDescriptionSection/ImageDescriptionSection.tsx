import React, { FC } from 'react';

import './ImageDescriptionSection.css';

export const ImageDescriptionSection :FC<{image?: string;}> =({children, image}) => {
  return <div className="ImageDescriptionSection">
    <div className={`ImageDescriptionSectionContent`}>
      {children}
      {image? <div className="Image">
          <img src={image}  alt="ad" />
      </div>: null}
    </div>
  </div>
}