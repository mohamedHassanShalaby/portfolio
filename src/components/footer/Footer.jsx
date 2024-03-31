import React from 'react'
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        SHALABY
      </a>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/mohamed.shalby.1426876"><FaFacebookF /></a>
        <a href="www.linkedin.com/in/mohamed-shalaby-6155072bb"><FaLinkedin /></a>
        <a href="https://github.com/mohamedHassanShalaby"><FaGithub /></a>
      </div>
      <div className="copy_right">&copy; SHALABY. All rights reserved.</div>
    </footer>
  );
}

export default Footer