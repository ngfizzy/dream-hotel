import React, {FC} from 'react';

import aboutImage from '../../assets/img/about.png';
import rhemaUnsplashImage from '../../assets/img/rhema-unsplash.png';

import bannerImage from '../../assets/img/banner.png';
import aboutSectionBg from '../../assets/img/about2.png';

import { Section } from '../../components/Section';
import { Navbar } from '../../components/Navbar';
import { PageHeading } from '../../components/PageHeading';
import { ImageDescriptionSection } from '../../components/ImageDescriptionSection';
import { SectionDescription } from '../../components/SectionDescription';
import { Carousel } from '../../components/Carousel';
import { Testimonial } from '../../components/Testimonial';
import { FoodList } from '../../components/FoodList/Index';
import { BlogList } from '../../components/BlogList/BlogList';
import { PhotosSection } from '../../components/PhotosSection';
import { Footer } from '../../components/Footer/Footer';
import { SleekButton } from '../../components/SleekButton/SleekButton';
import CheckinForm from '../../components/CheckinForm/CheckinForm';

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

const about2 = {
  label: 'About us',
  heading: 'We bring you the \n finest details'
}

const testimonials = {
  label: 'Testimonials',
  heading: 'We trust our customers \n and they trust us too'
}


const restaurant = {
  label: 'Restaurant',
  heading: 'Explore our menu and \n eat what you want',
};

const blog = {
  label: 'Blog',
  heading: 'Read our newest blog \n post right away'
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

      </Section>

      <Section bgImage={aboutSectionBg}>
        <ImageDescriptionSection>
          <SectionDescription
            label={about2.label}
            heading={about2.heading}
            invertColor={true}
            full={true}
          >
            <Carousel />
          </SectionDescription>
        </ImageDescriptionSection>
      </Section>


      <Section fill={true} style={{backgroundColor: '#f8f8f8'}}>
        <ImageDescriptionSection full={true} image={rhemaUnsplashImage}>
          <SectionDescription 
            label={testimonials.label}
            heading={testimonials.heading}
          >
            <Testimonial />
          </SectionDescription>
        </ImageDescriptionSection>
      </Section>



      <Section style={{height: '801px'}}>
        <ImageDescriptionSection full={true} >
          <SectionDescription 
            label={restaurant.label}
            heading={restaurant.heading}
            full={true}
          >
            <FoodList />
          </SectionDescription>
        </ImageDescriptionSection>
      </Section>

  
      <Section style={{height: '1000px'}}>
        <ImageDescriptionSection full={true} >
          <SectionDescription 
            label={blog.label}
            heading={blog.heading}
            full={true}
          >
            <BlogList />
          </SectionDescription>
        </ImageDescriptionSection>
      </Section>

      <PhotosSection />
      <Footer />
      <div className="page-controls">
        <CheckinForm />
        <div className="bg-white banner-control">
          <span className="carousel-control font-black  text-center">
            <SleekButton text="←"/>
          </span>
          <span className="carousel-control right bg-primary text-black text-center">
            <SleekButton invertColor={true} text="→"/>
          </span> 
        </div>
      </div>
    </main>
  )
}
