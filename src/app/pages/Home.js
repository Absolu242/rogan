import React from "react";
import Layout from "../components/Layout";
import { HeroSection } from "../styles/home.styles";

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
    </Layout>
  );
}
