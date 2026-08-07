import React from "react";

// Every section repeats the same title/subtitle header, so this owns it.
const Section = ({ id, title, subtitle, className = "", children }) => (
  <section className={`${className} section`.trim()} id={id}>
    <h2 className="section__title">{title}</h2>
    {subtitle && <span className="section__subtitle">{subtitle}</span>}
    {children}
  </section>
);

export default Section;
