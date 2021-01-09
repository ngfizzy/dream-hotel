import React, {FC} from 'react';
import { SleekButton } from '../SleekButton';

import './Carousel.css'
import { CarouselCard } from '../CarouselCard';

const carouselCardsData = [
  {
    heading: 'K Television and Netflix included',
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `
  },
  {
    heading: 'K Television and Netflix included',
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `
  },
  {
    heading: 'K Television and Netflix included',
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `
  }, 
  {
    heading: 'K Television and Netflix included',
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `
  },
]

export const Carousel:FC = () => {

return <div className="Carousel">
  <span className="ControlLeft">
    <SleekButton text="←" />
  </span>
  <span className="ControlRight">
    <SleekButton text="→" invertColor={true}/>
  </span>

{carouselCardsData.map(data => <CarouselCard {...data} />)}

 
</div>
}