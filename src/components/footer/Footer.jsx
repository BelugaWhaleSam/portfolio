import React from "react";
import "./footer.css";
import { profile, socials } from "../../data/profile";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Projects" },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <h1 className="footer__title">{profile.shortName}</h1>

      <ul className="footer__list">
        {footerLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="footer__link">
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${profile.email}`} className="footer__link">
            Email
          </a>
        </li>
      </ul>

      <div className="footer__social">
        {socials.map(({ name, icon, url }) => (
          <a
            key={name}
            href={url}
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label={name}
          >
            <i className={icon}></i>
          </a>
        ))}
      </div>

      <span className="footer__copy">
        &#169; BelugaSam. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
