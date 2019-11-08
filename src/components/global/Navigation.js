import React, { Component } from "react";
import { Link } from "gatsby";

export default class Navigation extends Component {
  state = {
    showMenu: false,
    links: [
      {
        id: 1,
        path: "/",
        name: "Home"
      },
      {
        id: 2,
        path: "/about/",
        name: "About me"
      },
      {
        id: 3,
        path: "/work/",
        name: "Projects"
      }
    ]
  };

  handleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  handleCloseNavigation = () => {
    this.setState({
      showMenu: false
    });
  };

  render() {
    return (
      <header>
        <div
          className={this.state.showMenu ? `menu-btn close` : `menu-btn`}
          onClick={this.handleMenu}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={this.state.showMenu ? `menu show` : `menu`}>
          <div
            className={
              this.state.showMenu ? `menu-branding show` : `menu-branding`
            }
          >
            <div className="portrait" />
          </div>
          <ul className={this.state.showMenu ? `menu-nav show` : `menu-nav`}>
            {this.state.links.map(link => (
              <li
                className={this.state.showMenu ? `nav-item show` : `nav-item`}
                key={link.id}
              >
                <Link
                  to={link.path}
                  activeStyle={{
                    color: "#eece1a"
                  }}
                  className="nav-link"
                  onClick={this.handleCloseNavigation}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
