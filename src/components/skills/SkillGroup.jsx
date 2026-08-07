import React from "react";

const SkillGroup = ({ index, title, items }) => (
  <div className="skills__content">
    <div className="skills__header">
      <span className="skills__index">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="skills__title">{title}</h3>
    </div>

    <ul className="skills__list">
      {items.map((item) => (
        <li className="skills__tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillGroup;
