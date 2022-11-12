import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__card-site">
      <a href={item.link} className="work__button">
        <i class="uil uil-github"></i>
        Github
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <a href={item.wlink} className="work__button">
        <i class="bx bx-code-block"></i>
        Website
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      </div>
    </div>
  );
};

export default WorkItems;
