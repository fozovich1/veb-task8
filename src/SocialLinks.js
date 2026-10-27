import React from "react";
import { social } from "./data";

const SocialLinks = () => {
  return (
    <ul className="social-icons">
      {social.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url}>{link.icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;