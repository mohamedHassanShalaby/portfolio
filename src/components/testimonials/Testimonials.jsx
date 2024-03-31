import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.avif";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: avatar1,
    client_name: "Ahmed Hassan",
    client_review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam error doloribus exercitationem non, voluptate expedita sunt itaque aspernatur odit saepe corrupti accusamus? Repellat nulla doloribus temporibus sit maxime?",
  },
  {
    id: 2,
    image: avatar2,
    client_name: "Yara Hassan",
    client_review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam error doloribus exercitationem non, voluptate expedita sunt itaque aspernatur odit saepe corrupti accusamus? Repellat nulla doloribus temporibus sit maxime?",
  },
  {
    id: 3,
    image: avatar3,
    client_name: "Menna Hassan",
    client_review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam error doloribus exercitationem non, voluptate expedita sunt itaque aspernatur odit saepe corrupti accusamus? Repellat nulla doloribus temporibus sit maxime?",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, client_name, client_review }) => {
          return (
            <SwiperSlide key={id} className="testimonials">
              <div className="clients_avatar">
                <img src={image} alt="avatar" />
              </div>
              <h5 className="client_name">{client_name}</h5>
              <small className="client_review">{client_review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
