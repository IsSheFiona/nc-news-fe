import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFutbol,
  faHamburger,
  faHome
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/home">
          <h3>
            Home {"  "}
            <FontAwesomeIcon icon={faHome} />
          </h3>
        </Link>
        <Link to="/topics/coding">
          <h3>
            Coding{"  "} <FontAwesomeIcon icon={faCode} />
          </h3>
        </Link>
        <Link to="/topics/cooking">
          <h3>
            Cooking{"  "}
            <FontAwesomeIcon icon={faHamburger} />
          </h3>
        </Link>
        <Link to="/topics/football">
          <h3>
            Football{"  "} <FontAwesomeIcon icon={faFutbol} />
          </h3>
        </Link>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
