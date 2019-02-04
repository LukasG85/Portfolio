import React, { Component } from "react";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

export default class SocialIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/%C5%82ukasz-gancarz-780506158/"
      },
      {
        id: 2,
        icon: <FaGithub />,
        path: "https://github.com/LukasG85/"
      },
      {
        id: 3,
        icon: <FaCodepen />,
        path: "https://codepen.io/Lukas85b/"
      }
    ]
  };
  render() {
    return (
      <>
        {this.state.icons.map(icon => (
          <a
            key={icon.id}
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </>
    );
  }
}
