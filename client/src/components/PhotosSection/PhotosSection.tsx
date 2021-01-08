import React, { FC } from 'react';
import beachUnsplashImage from '../../assets/img/beach-unsplash.png';
import sofaImage from '../../assets/img/sofa.png';
import barImage from '../../assets/img/bar.png';
import hallImage from '../../assets/img/hall.png';

export const PhotosSection: FC = () =>  {
  return <section className="section  about-section  bg-center bg-white photos-section">
    <div className="section-content">
      <div className="left text-white">
        <div className="section-content-wrapper">
          <h2 className="font-normal section-label text-primary">Photos</h2>
          <h3 className="section-heading text-black">See our latest photos <br /> from restaurant and hotel</h3>   
        </div>
      </div>
      <div className="carousel">
        <span className="carousel-control control-left text-center">←</span>
        <span className="carousel-control control-right text-center bg-primary">→</span>
        <div className="carousel-card">
          <div className="bg-primary icon-wrapper">
            <img className="img icon" src={beachUnsplashImage} alt="services" />
          </div>
        </div>
        <div className="carousel-card">
          <div className="bg-primary icon-wrapper">
            <img className="img icon" src={sofaImage} alt="services" />
          </div>
        </div>
        <div className="carousel-card">
          <div className="bg-primary icon-wrapper">
            <img className="img icon" src={barImage} alt="services" />
          </div>
        </div>
        <div className="carousel-card">
          <div className="bg-primary icon-wrapper">
            <img className="icon" src={hallImage} alt="services" />
          </div>
        </div>
      </div>
    </div>
  </section>
}