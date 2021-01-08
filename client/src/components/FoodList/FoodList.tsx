import React, { FC } from 'react';
import fishImage from '../../assets/img/fish.png';
import chocolateImage from '../../assets/img/chocolate.png';

export const FoodList: FC = () => {
  return  <div className="food-wrapper">
  <div className="food-card">
    <div className="icon-wrapper">
      <img className="img icon" src={fishImage} alt="fish" />
    </div>
    <div className="description-wrapper">
      <h2 className="font-normal font-primary text-upper">Food</h2>
      <h3 className="font-weight-600 font-black">Fresh fish and onions</h3>
      <p className="font-normal color-muted description">
        Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
    </div>
  </div>
  <div className="food-card">
    <div className="icon-wrapper">
        <img className="img icon" src={chocolateImage} alt="choco" />
    </div>
    <div className="description-wrapper">
      <h2 className="font-normal font-primary text-upper">Desert</h2>
      <h3 className="font-weight-600 font-black">Chocolate cupcakes</h3>
      <p className="font-normal color-muted description">
          Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
    </div>
  </div>
  <div className="food-card">
    <div className="icon-wrapper">
    <img className="img icon" src={chocolateImage} alt="choco" />
  </div>
    <div className="description-wrapper">
    <h2 className="font-normal font-primary text-upper">Desert</h2>
    <h3 className="font-weight-600 font-black">Chocolate cupcakes</h3>
    <p className="font-normal color-muted description">
      LFresh food directly from our restaurant ready coocked for you and you familly
    </p>
  </div>
  </div>
  <div className="food-card">
    <div className="icon-wrapper">
      <img className="img icon" src={fishImage} alt="fish" />
    </div>
    <div className="description-wrapper">
      <h2 className="font-normal font-primary text-upper">Food</h2>
      <h3 className="font-weight-600 font-black">Fresh fish and onions</h3>
      <p className="font-normal color-muted description">
        Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
    </div>
  </div>
</div>
}