import React from "react";
import { Link } from "@reach/router";

function Nav() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/home">
          <h3>Home</h3>
        </Link>
        <Link to="/topics/coding">
          <h3>Coding</h3>
        </Link>
        <Link to="/topics/football">
          <h3>Football</h3>
        </Link>
        <Link to="/topics/cooking">
          <h3>Cooking</h3>
        </Link>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
