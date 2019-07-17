import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function LoadingPage() {
  return (
    <React.Fragment>
      <div className="loadingPage">
        <h1>
          <FontAwesomeIcon icon={faRobot} />
        </h1>
        <h3>Beep Beep Beep...</h3>
        <h3>
          01011001 01101111 01110101 01110010 00100000 01110000 01100001
          01100111 01100101 00100000 01101001 01110011 00100000 01101100
          01101111 01100001 01100100 01101001 01101110 01100111
        </h3>
        <h3>Please be patient...</h3>
        <h3>Your page is loading...</h3>
      </div>
    </React.Fragment>
  );
}

export default LoadingPage;
