import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { LiaUser } from "react-icons/lia";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        className={active === "#about" ? "active" : ""}
        href="#about"
        onClick={() => setActive("#about")}
      >
        <LiaUser />
      </a>
      <a
        className={active === "#experience" ? "active" : ""}
        href="#experience"
        onClick={() => setActive("#experience")}
      >
        <BiBook />
      </a>
      <a
        className={active === "#services" ? "active" : ""}
        href="#services"
        onClick={() => setActive("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        className={active === "#contact" ? "active" : ""}
        href="#contact"
        onClick={() => setActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
