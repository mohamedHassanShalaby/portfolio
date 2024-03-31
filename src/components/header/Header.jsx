import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/mo1.jpg';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mohamed Shalaby</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="ME Header Img" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header