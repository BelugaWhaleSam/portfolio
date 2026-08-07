import React from "react";
import "./work.css";
import Section from "../shared/Section";
import Works from "./Works";

const Work = () => (
  <Section
    id="project"
    className="work"
    title="Projects"
    subtitle="Things I've built"
  >
    <Works />
  </Section>
);

export default Work;
