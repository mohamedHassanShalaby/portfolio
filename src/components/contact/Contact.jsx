import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from '../../assets/done.json';

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqyrkjo");
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>mh0337257@gmail.com</h5>
            <a href="mailto:mh0337257@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_icon" />
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/Mohamed.Shalaby" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>+01550325010</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+201550325010"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            id="name"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            autoComplete="off"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="btn btn-primary"
          >
            Send Message
          </button>
          {state.succeeded && (
            <p style={{ fontSize: "16px", marginTop: "1.5rem", display: "flex"}}>
              <Lottie loop={false} style={{height: "44px"}} animationData={doneAnimation} />
              Your Message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
