import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function RouteError(props) {
  return (
    <React.Fragment>
      <div className="errorHandling">
        <h1>
          <FontAwesomeIcon icon={faRobot} />
        </h1>
        <h3>Beep Beep Beep</h3>
        <h3>Does Not Compute.</h3>
        <h3>That page does not exist.</h3>
        <h3>
          01010100 01101000 01100001 01110100 00100000 01110000 01100001
          01100111 01100101 00100000 01100100 01101111 01100101 01110011
          00100000 01101110 01101111 01110100 00100000 01100101 01111000
          01101001 01110011 01110100 00101110
        </h3>
      </div>
    </React.Fragment>
  );
}

export default RouteError;
