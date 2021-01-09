import React, { FC } from 'react';
import './Navbar.css'

export const Navbar:FC = () => {

  return <nav className="ml-auto mr-auto Navbar">
  <a className="link" href="/#">Contact</a>
  <a className="link" href="/#">Blog</a>
  <a className="link" href="/#">About Us</a>
  <a className="link" href="/#">Restaurant</a>
  <a className="link" href="/#">Rooms</a>
  <a className="link" href="/#">Home</a>
  <a className="link brand-link" href="/#">Zetta Hotel</a>
</nav>  
}