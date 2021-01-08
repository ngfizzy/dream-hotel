import React, {FC} from 'react';

import aboutImage from '../../assets/img/about.png';
import serviceIcon from '../../assets/img/service-icon.svg';
import johnDoeImage from '../../assets/img/marius-ciocirlan-vMV6r4VRhJ8-unsplash.png';
import rhemaUnsplashImage from '../../assets/img/rhema-unsplash.png';
import fishImage from '../../assets/img/fish.png';
import chocolateImage from '../../assets/img/chocolate.png';
import foodAndLifeImage from '../../assets/img/food-and-life.png';
import beachUnsplashImage from '../../assets/img/beach-unsplash.png';
import sofaImage from '../../assets/img/sofa.png';
import barImage from '../../assets/img/bar.png';
import hallImage from '../../assets/img/hall.png';
import facebookImage from '../../assets/img/001-facebook.svg';
import twitterImage from '../../assets/img/002-twitter.svg';
import gPlusImage from '../../assets/img/004-google-plus.svg';
import sendImage from '../../assets/img/send.svg';
import bannerImage from '../../assets/img/banner.png';
import { Section } from '../../components/Section';
import { Navbar } from '../../components/Navbar';
import { PageHeading } from '../../components/PageHeading';
import { ImageDescriptionSection } from '../../components/ImageDescriptionSection';
import { SectionDescription } from '../../components/SectionDescription';

const pageHeading = {
  heading: 'The best hotel you will ever need',
  subheading: `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.`
}

const about1 = {
  label: 'About',
  heading: 'Trust and quality are our atuus',
  subheading: `Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed 
  do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut 
  aliquip ex ea commodo consequat.`,
  details: `          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
  ullamco laboris nisi ut aliquip ex ea commodo consequat.`
}

export const Home: FC = () => {
  return (
    <main className="Container">
      {/* Banner section */}
      <Section
        isBanner={true}
        bgImage={bannerImage}
      >
        <Navbar />
        <PageHeading {...pageHeading} />
      </Section>

      <Section>
        <ImageDescriptionSection image={aboutImage}>
          <SectionDescription 
            label={about1.label}
            heading={about1.heading}
            subheading={about1.subheading}
            details={about1.details}
          >
            <button className="button-primary d-inline-flex fit-content">read more → </button>
          </SectionDescription>
        </ImageDescriptionSection>
        {/* <div className="left">
          <div className="section-content-wrapper">
            <h2 className="color-primary font-normal section-label">About us</h2>
              <h3 className="section-heading">Trust and quality are our atuus</h3>
              <h4 className="section-subheading">
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed 
                  do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat.
              </h4>
              <p className="font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="button-primary">read more → </button>
            </div>
          </div> */}
        {/* <div className="right">
            <div className="section-content-wrapper">
                <img  className="img" src={aboutImage} alt="about" />
            </div>
          </div> */}

      </Section>

      <section className="section  about-section  bg-center bg-dark-transparent about-section2">
        <div className="section-content">
          <div className="left text-white">
            <div className="section-content-wrapper">
              <h2 className="font-normal section-label text-primary">About us</h2>
              <h3 className="section-heading">We bring you the finest details</h3>
            </div>
          </div>
          <div className="carousel">
            <span className="carousel-control control-left text-center">←</span>
            <span className="carousel-control control-right text-center">→</span>

            <div className="carousel-card">
              <div className="bg-primary icon-wrapper">
                  <img className="img icon" src={serviceIcon} alt="services" />
              </div>
              <h3 className="text-center font-weight-600 font-black">4K Television and Netflix included</h3>
              <p className="font-normal color-muted description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="carousel-card">
              <div className="bg-primary icon-wrapper">
                  <img className="img icon" src={serviceIcon} alt="services" />
              </div>
              <h3 className="text-center font-weight-600 font-black">4K Television and Netflix included</h3>
              <p className="font-normal color-muted description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="carousel-card">
              <div className="bg-primary icon-wrapper">
                  <img className="img icon" src={serviceIcon} alt="services" />
              </div>
              <h3 className="text-center font-weight-600 font-black">4K Television and Netflix included</h3>
              <p className="font-normal color-muted description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="carousel-card">
              <div className="bg-primary icon-wrapper">
                <img   className="icon" src={serviceIcon} alt="services" />
              </div>
              <h3 className="text-center font-weight-600 font-black">4K Television and Netflix included</h3>
              <p className="font-normal color-muted description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section image-section testimonials-section">
        <div className="section-content">
          <div className="left">
            <div className="section-content-wrapper">
              <h2 className="color-primary font-normal section-label">Testimonials</h2>
              <h3 className="section-heading">We trust our customers and they trust us too</h3>
              <div className="testimonial">
                <div className="profile">
                  <div className="picture-wrapper">
                    <img  className="picture" src={johnDoeImage} alt="marcus" />
                  </div>
                  <div className="info">
                    <h5 className="font-normal font-black">John Doe</h5>
                    <h6 className="color-muted profession">IT Engineer</h6>
                  </div>
                </div>
                  <p className="">
                    I'm very glad I had the opportunity to visit this hotel. 
                    The stuff is very friendly and I will definetly visit the
                    hotel again next year.
                  </p>
                  <ul className="pages color-primary">
                    <li className=" d-inline"><span className="bullet"></span></li>
                    <li className=" d-inline"><span className="bullet selected"></span></li>
                    <li className=" d-inline"><span className="bullet"></span></li>
                    <li className=" d-inline"><span className="bullet"></span></li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="section-content-wrapper">
              <img className="img" src={rhemaUnsplashImage} alt="icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="section  about-section bg-center text-black food-section">
        <div className="section-content">
          <div className="left text-black">
            <div className="section-content-wrapper">
              <h2 className="font-normal section-label text-primary">Restaurant</h2>
              <h3 className="section-heading text-black">Explore our menu
                <br />
                and eat what you want
              </h3>   
            </div>
          </div>
          <div className="food-wrapper">
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
        </div>
      </section>

      <section className="section about-section bg-center text-black food-section flexible-section-662">
        <div className="section-content">
          <div className="left text-black">
            <div className="section-content-wrapper">
              <h2 className="font-normal section-label text-primary">Blog</h2>
              <h3 className="section-heading text-black">Read our newest blog <br /> post right away</h3>   
            </div>
          </div>
          <div className="blog-wrapper">
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
        </div>
      </section>

      <section className="section  about-section  bg-center bg-white photos-section">
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
      <footer className="footer">
        <div className="wrapper">
          <div className="info">
            <div className="info-wrapper">
              <h2 className="text-white">Zetta Hotels</h2>
              <p className="text-muted">
                Our hotel is an image of quality and profesionalism combined
                with hard work and precision. You can expect only the best services
                from our staff.
              </p>
              <span className="social-icons">
                <img src={facebookImage} alt="" />
                <img src={twitterImage} alt="" />
                <img src={gPlusImage}  alt="" />
              </span>
            </div>
          </div>
          <div className="useful-links">
            <div className="left">
              <h3 className="text-white">Useful Links</h3>
              <ul className="links ">
                <li><a className="text-normal text-primary" href="/#">Blog</a></li>
                <li><a className="text-normal text-primary" href="/#">Rooms</a></li>
                <li><a className="text-normal text-primary" href="/#">Gift Card</a></li>
                <li><a className="text-normal text-primary" href="/#">Testimonials</a></li>
                <br />
                <br/>
              </ul>
            </div>
            <div className="right">
              <h3 className="text-white">Privacy</h3>
              <ul className="links ">
                <li><a className="text-normal text-primary" href="/#">Career</a></li>
                <li><a className="text-normal text-primary" href="/#">About Us</a></li>
                <li><a className="text-normal text-primary" href="/#">Contact Us</a></li>
                <li><a className="text-normal text-primary" href="/#">Services</a></li>
                <br />
                <br />
              </ul>
            </div>
          </div>
          <div className="contact">
            <div className="contact-wrapper">
              <h3>Contact Info</h3>
              <div className="contact-item">
                <img className="color-primary d-inline-block v-align-middle mr-5" src="assets/img/mail.svg" alt="" />
                <span className="font-normal d-inline-block v-align-middle mr-5">example@yahoo.com</span>
              </div>
              <div className="contact-item">
                <img className="color-primary d-inline-block v-align-middle mr-5" src="assets/img/phone.svg" alt="" />
                <span className="font-normal d-inline-block v-align-middle mr-5"> +0 320 422 4254</span>
              </div>
              <div className="contact-item">
                <img className="color-primary d-inline-block v-align-middle mr-5" src="assets/img/map-pin.svg" alt="" />
                <span className="font-normal d-inline-block v-align-middle mr-5">Main Str Chicago Illinois</span>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
          </div>
          <div className="license">
            <span className="font-normal">
              Copyright ©2020 All rights reserved |
              This template is made with love by
              <span className="text-primary">@ngfizzy</span>
            </span>
            <span className="text-primary">www.protfolioname.com</span>
          </div>
      </footer>
      <div className="page-controls">
        <div className="checkin-wrapper">
          <form className="checkin">
            <div className="form-group">
              <label className="color-primary font-noraml">Check In Date</label>
              <input type="text" placeholder="check in date" />
            </div>
            <div className="form-group">
              <label className="text-primary tfont-normal">Check In Date</label>
              <input type="text" placeholder="check in date" />
            </div>
            <div className="form-group">
              <label className="text-primary font-normal">Rooms</label>
              <input type="text" placeholder="rooms" />
            </div>
            <div className="form-group button-wrapper">
              <button className="button submit-button bg-primary" type="button" placeholder="rooms">
                <img src={sendImage} alt="" />
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white banner-control">
          <span className="carousel-control font-black  text-center">←</span>
          <span className="carousel-control right bg-primary text-black text-center">→</span> 
        </div>
      </div>
    </main>
  )
}
