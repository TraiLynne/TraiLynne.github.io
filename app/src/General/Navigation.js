import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <nav>
            <Link exact to='Home'>Home</Link>
        </nav>
    )
}