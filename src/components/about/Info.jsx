import React from "react";
import { stats } from "../../data/stats";

const Info = () => (
  <div className="about__info grid">
    {stats.map(({ icon, title, value }) => (
      <div className="about__box" key={title}>
        <i className={`${icon} about__icon`}></i>
        <h3 className="about__title">{title}</h3>
        <span className="about__subtitle">{value}</span>
      </div>
    ))}
  </div>
);

export default Info;
