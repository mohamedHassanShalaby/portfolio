import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocial = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/mohamed-shalaby-6155072bb/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/mohamedHassanShalaby" target='_blank'><FaGithub /></a>
      </div>
  )
}

export default HeaderSocial