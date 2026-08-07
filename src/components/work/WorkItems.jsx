import React from "react";

// Add a row here to support a new kind of link; the card renders whichever
// of these keys the project actually has.
const linkButtons = [
  { key: "github", label: "Github", icon: "uil uil-github" },
  { key: "live", label: "Website", icon: "bx bx-code-block" },
];

const WorkItems = ({ item }) => {
  const { image, title, award, description, tech, links = {} } = item;
  const buttons = linkButtons.filter(({ key }) => links[key]);

  return (
    <article className="work__card">
      <img src={image} alt={title} className="work__img" loading="lazy" />

      {award && (
        <span className="work__award">
          <i className="bx bx-trophy"></i>
          {award}
        </span>
      )}

      <h3 className="work__title">{title}</h3>

      {description && <p className="work__description">{description}</p>}

      {tech && (
        <ul className="work__tech">
          {tech.map((name) => (
            <li className="work__tech-item" key={name}>
              {name}
            </li>
          ))}
        </ul>
      )}

      {buttons.length > 0 && (
        <div className="work__card-site">
          {buttons.map(({ key, label, icon }) => (
            <a
              key={key}
              href={links[key]}
              className="work__button"
              target="_blank"
              rel="noreferrer"
            >
              <i className={icon}></i>
              {label}
              <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

export default WorkItems;
