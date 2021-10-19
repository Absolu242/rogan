import React from "react";
import Layout from "../components/Layout";
import { NavItems } from "../components/Navbar/navbar.styles";
import {
  AboutSection,
  Heading,
  HeroSection,
  WedoSection,
} from "../styles/home.styles";

const services = [
  {
    icon: "/assets1/Icon1.png",
    name: "Strategy & Research",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
  {
    icon: "/assets1/Icon2.png",
    name: "Design & Development",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
  {
    icon: "/assets1/Icon3.png",
    name: "Management & Marketing",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
];

export default function Home() {
  return (
    <Layout>
      <HeroSection
        className="hero"
        style={{
          backgroundImage: `url(/assets1/heroImage.png)`,
        }}
      >
        <div className="hero__content">
          <div className="promo">
            <p>
              <span>70% Off</span> for first 3 months
            </p>
          </div>
          <div className="heading">
            <h1>
              Digital Agency <br /> With Exellence <br /> Services
            </h1>
          </div>
          <div className="text">
            <p>
              The 3 golden rules of professional graphic designer don't want you
              to know about
            </p>
          </div>

          <div className="cta">
            <button className="btn-primary">More About us ></button>

            <button className="btn-video">
              See live video <img src="/assets1/video.png" alt="video icon" />
            </button>
          </div>
        </div>
      </HeroSection>

      <WedoSection>
        <div className="wedo__content">
          <Heading
            style={{
              backgroundImage: `url(/assets1/bgShape.png)`,
            }}
          >
            <div className="title">What we do</div>
            <div className="text">
              The Things motivates me is common <br /> form of motivation.
            </div>
          </Heading>

          <div className="services">
            {services.map((item, i) => (
              <div className="services-item">
                <img src={item.icon} alt="icon" />
                <p className="name">{item.name}</p>
                <p className="text">{item.text}</p>
                <a href="#" className="link">
                  <p>More About {item.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </WedoSection>

      <AboutSection
        style={{
          backgroundImage: `url(/assets1/Group.png)`,
        }}
      >
        <div className="about__content">
          <img className="about-img" src="/assets1/ceo.png" alt="ceo" />

          <div className="about__content--main">
            <Heading left>
              <div className="title">About us</div>
              <div className="text">
                Leading digital agency <br /> for business solution
              </div>
            </Heading>

            <div className="text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium commodi tempora doloribus, quo esse porro, quas
                nobis autem enim, voluptas id nisi beatae facere! Totam?
                <br />
                <br />
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam ipsum excepturi tempore. Dicta, hic molestias.
                </span>
              </p>
            </div>

            <div className="author">
              <p>
                Rashed Kabir, <span>CEO CreativeGigs</span>
              </p>
            </div>

            <div className="more">
              <button className="btn-primary">Learn More ></button>
            </div>
          </div>
        </div>
      </AboutSection>
    </Layout>
  );
}
