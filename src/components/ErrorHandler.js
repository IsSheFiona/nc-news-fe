import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function ErrorHandler(props) {
  return (
    <React.Fragment>
      <div className="errorHandling">
        <h1>
          <FontAwesomeIcon icon={faRobot} />
        </h1>
        <h3>Beep Beep Beep</h3>
        <h3>Does Not Compute.</h3>
        <h3>{props.err.response.data.msg}</h3>
        <h3>Status {props.err.response.status}</h3>
      </div>
    </React.Fragment>
  );
}

export default ErrorHandler;
