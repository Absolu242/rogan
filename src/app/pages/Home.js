import React from "react";
import Layout from "../components/Layout";
import {
  AboutSection,
  CompletedSection,
  Heading,
  HeroSection,
  WedoSection,
  WorkSection,
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

      <CompletedSection>
        <Heading>
          <div className="text">
            We completed 1500+ Projects Yearly <br />
            successfully & counting
          </div>
        </Heading>

        <div
          className="stats"
          style={{
            backgroundImage: `url(/assets1/ctaBg.png)`,
          }}
        >
          <div className="stats-item">
            <p className="numbers">16K</p>
            <p className="name">Global Customer</p>
          </div>
          <div className="stats-item">
            <p className="numbers">1500+</p>
            <p className="name">Completed Projects</p>
          </div>
          <div className="stats-item">
            <p className="numbers">460+</p>
            <p className="name">Experrs Worker</p>
          </div>
        </div>
        <div className="cta">
          <div className="text">
            <p>Have any question ?</p>
            <span>Don't hesitate to contact us</span>
          </div>

          <button className="btn-primary">Contact us</button>
        </div>
      </CompletedSection>

      <WorkSection
        style={{
          backgroundImage: `url(/assets1/WorkGallery.png)`,
        }}
      >
        <div className="work__content">
          <div className="work__content--top">
            <Heading left>
              <div className="text">
                Check some of our <br /> Recent Work
              </div>
              <p className="text2">
                {" "}
                Click the button on the side to check all of our work
              </p>
            </Heading>

            <div className="buttons">
              <button>View Gallery</button>
            </div>
          </div>

          <div className="work__content--list">
            <a href="http://google.com">
              <img src="/assets1/work1.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets1/work2.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets1/work3.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets1/work4.png" alt="project" />
            </a>
          </div>
        </div>
      </WorkSection>
    </Layout>
  );
}
