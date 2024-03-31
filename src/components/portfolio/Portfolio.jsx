import React from "react";
import "./portfolio.css";
import react1 from '../../assets/react1.png';
import js1 from '../../assets/js1.png';
import sass1 from '../../assets/sass1.png';
import boots1 from '../../assets/bootsr1.png';
import tailw1 from '../../assets/tailw1.png';
import resp1 from '../../assets/resp1.png';
import css1 from '../../assets/css1.png';
import css2 from '../../assets/css2.png';
import css3 from '../../assets/css3.png';
import css4 from '../../assets/css4.png';

const data = [
  {
    id: 1,
    image: react1,
    title: "E-commerce restaurant",
    github: "https://github.com/mohamedHassanShalaby/e-restaurant",
    demo: "https://ecommercerestaurant-19131.web.app/",
  },
  {
    id: 2,
    image: js1,
    title: "Special Website Show Skills",
    github: "https://github.com/mohamedHassanShalaby/specialDesign",
    demo: "https://mohamedhassanshalaby.github.io/specialDesign/",
  },
  {
    id: 3,
    image: sass1,
    title: "Website By SASS",
    github: "https://github.com/mohamedHassanShalaby/websitebySass",
    demo: "https://mohamedhassanshalaby.github.io/websitebySass/",
  },
  {
    id: 4,
    image: boots1,
    title: "Responsive Design By Bootstrap",
    github: "https://github.com/mohamedHassanShalaby/bandiDesign",
    demo: "https://mohamedhassanshalaby.github.io/bandiDesign/",
  },
  {
    id: 5,
    image: tailw1,
    title: "Design By TailwindCss",
    github: "https://github.com/mohamedHassanShalaby/websiteTailwind",
    demo: "https://mohamedhassanshalaby.github.io/websiteTailwind/",
  },
  {
    id: 6,
    image: resp1,
    title: "Responsive Design Without Framework",
    github: "https://github.com/mohamedHassanShalaby/responsiveDesign",
    demo: "https://mohamedhassanshalaby.github.io/responsiveDesign/",
  },
  {
    id: 7,
    image: css1,
    title: "Dashboard By HTML and Css",
    github: "https://github.com/mohamedHassanShalaby/Dashboard",
    demo: "https://mohamedhassanshalaby.github.io/Dashboard/",
  },
  {
    id: 8,
    image: css3,
    title: "Kasper By HTML and CSS",
    github: "https://github.com/mohamedHassanShalaby/kasper",
    demo: "https://mohamedhassanshalaby.github.io/kasper/",
  },
  {
    id: 9,
    image: css2,
    title: "Design With Animation Simple",
    github: "https://github.com/mohamedHassanShalaby/shalaby",
    demo: "https://mohamedhassanshalaby.github.io/shalaby/",
  },
  {
    id: 10,
    image: css1,
    title: "Frist Design By HTML and CSS",
    github: "https://github.com/mohamedHassanShalaby/Leon",
    demo: "https://mohamedhassanshalaby.github.io/Leon/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-img">
                  <img src={image} alt="portfolio img" />
                </div>
                <h3>{ title }</h3>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
