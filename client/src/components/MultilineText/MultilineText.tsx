import React, { FC } from 'react';

export const MultilineText:FC<{text: string}> = ({ text }) => {
  return (
    <>
      {
        text.split('\n').map((paragraph, index) => (
          <p className="p" key={index}>
            {paragraph}
          </p>
        ))
      }
    </>
  )
}
