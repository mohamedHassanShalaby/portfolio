import React from "react";
import "./about.css";
import ME from "../../assets/mo1.jpg";
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="ME about Img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about_card">
              <LuUsers className="about_icon" />
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dignissimos incidunt, repellendus vitae architecto veritatis quaerat
            itaque porro dolore libero consectetur vero provident illum aliquid
            nihil temporibus nemo perspiciatis sit.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
