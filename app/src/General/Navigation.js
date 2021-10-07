import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Nav } from "./styles";

export default function Navigation() {
    return (
      <Nav>
        <NavLink to="/">
          <Link>Home</Link>
        </NavLink>
        <NavLink to="/about">
          <Link>About</Link>
        </NavLink>
        <NavLink to="/portfolio">
          <Link>Portfolio</Link>
        </NavLink>
        <a href="https://www.trailynne.org/blog" target='_blank'>
          <Link>Blog</Link>
        </a>
      </Nav>
    );
}