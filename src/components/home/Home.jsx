import React from "react";
import "./home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => (
  <section className="home section" id="home">
    <div className="home__container container">
      <div className="home__content">
        <div className="home__img"></div>
        <Data />
      </div>
      <ScrollDown />
    </div>
  </section>
);

export default Home;
