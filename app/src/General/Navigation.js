import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Nav } from "./styles";

export default function Navigation() {
    return (
      <Nav>
        <NavLink to="/"><Link>Home</Link></NavLink>
        <NavLink to="/about"><Link>About</Link></NavLink>
        <NavLink to='/' onClick={() => alert("Coming Soon")}>
          <Link>Portfolio</Link>
        </NavLink>
        <NavLink to='' onClick={() => alert("Coming Soon")}>
          <Link>Blog</Link>
        </NavLink>
      </Nav>
    );
}