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
        <h3>1111000111011101110!!!!!!!!</h3>
        <h3>100110110110100001110????</h3>
        <h3>Please be patient...</h3>
        <h3>Your page is loading...</h3>
      </div>
    </React.Fragment>
  );
}

export default LoadingPage;
