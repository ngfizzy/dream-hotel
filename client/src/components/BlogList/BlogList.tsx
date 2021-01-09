import React, { FC } from 'react';
import chocolateImage from '../../assets/img/chocolate.png';
import fishImage from '../../assets/img/fish.png';
import foodAndLifeImage from '../..//assets/img/food-and-life.png';

export const BlogList = () => {
  return           <div className="blog-wrapper">
  <div className="blog-card">
    <div className="icon-wrapper">
      <img className="img icon" src={foodAndLifeImage} alt="food" />
    </div>
    <div className="description-wrapper text-center">
      <h2 className="font-normal font-primary text-upper">Food and Life</h2>
      <h3 className="font-weight-600 font-black">Success in hotel business</h3>
      <p className="font-normal color-muted description">
          Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
    </div>
  </div>
  <div className="blog-card">
    <div className="icon-wrapper">
      <img className="img icon" src={fishImage} alt="fish" />
    </div>
    <div className="description-wrapper text-center">
      <h2 className="font-normal font-primary text-upper">Cooking</h2>
      <h3 className="font-weight-600 font-black">Cooking delicious food</h3>
      <p className="font-normal color-muted description">
        Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
    </div>
  </div>
  <div className="blog-card">
    <div className="icon-wrapper">
      <img className="img icon" src={chocolateImage} alt="chocolate image2" />
    </div>
    <div className="description-wrapper text-center">
      <h2 className="font-normal font-primary text-upper">Fruits</h2>
      <h3 className="font-weight-600 font-black">Getting fresh fruits</h3>
      <p className="font-normal color-muted description">
        Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
    </div>
  </div>
  <div className="blog-card">
    <div className="icon-wrapper">
      <img className="img icon" src={chocolateImage} alt="chocolate image3" />
    </div>
    <div className="description-wrapper text-center">
      <h2 className="font-normal font-primary text-upper">Fruits</h2>
      <h3 className="font-weight-600 font-black">Getting fresh fruits</h3>
      <p className="font-normal color-muted description">
        Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
    </div>
  </div>
  <div className="blog-card">
    <div className="icon-wrapper">
      <img className="img icon" src={fishImage} alt="fish" />
    </div>
    <div className="description-wrapper text-center">
      <h2 className="font-normal font-primary text-upper">Cooking</h2>
      <h3 className="font-weight-600 font-black">Cooking delicious food</h3>
      <p className="font-normal color-muted description">
        Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
    </div>
  </div>
  <div className="blog-card">
      <div className="icon-wrapper">
        <img className="img icon" src={foodAndLifeImage} alt="food and life" />
      </div>
      <div className="description-wrapper text-center">
        <h2 className="font-normal font-primary text-upper">Food and Life</h2>
        <h3 className="font-weight-600 font-black">Succeed in hotel business</h3>
        <p className="font-normal color-muted description">
            Fresh food directly from our restaurant ready coocked for you and you familly
        </p>
      </div>
  </div>
</div>
}