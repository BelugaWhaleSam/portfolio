import React from "react";
import { socials } from "../../data/profile";

const Social = () => (
  <div className="home__social">
    {socials.map(({ name, icon, url }) => (
      <a
        key={name}
        href={url}
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label={name}
        title={name}
      >
        <i className={icon}></i>
      </a>
    ))}
  </div>
);

export default Social;
