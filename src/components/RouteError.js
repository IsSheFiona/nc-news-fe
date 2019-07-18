import React from "react";
import styles from "./ErrorAndLoading.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function RouteError(props) {
  return (
    <>
      <div className={styles.errorHandling}>
        <h1>
          <FontAwesomeIcon icon={faRobot} />
        </h1>
        <h3>Beep Beep Beep</h3>
        <h3>Does Not Compute.</h3>
        <h3>That page does not exist.</h3>
        <h3>
          01000110 01101001 01101111 01101110 01100001 00100000 01101001
          01110011 00100000 01110100 01101000 01100101 00100000 01110010
          01101111 01100010 01101111 01110100 00100000 01110001 01110101
          01100101 01100101 01101110
        </h3>
      </div>
    </>
  );
}

export default RouteError;
