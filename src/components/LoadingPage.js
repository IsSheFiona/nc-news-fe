import React from "react";
import styles from "./ErrorAndLoading.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function LoadingPage() {
  return (
    <>
      <div className={styles.loadingPage}>
        <h1>
          <FontAwesomeIcon icon={faRobot} />
        </h1>
        <h3>Beep Beep Beep...</h3>
        <h3>
          01010000 01101100 01100101 01100001 01110011 01100101 00100000
          01101000 01101001 01110010 01100101 00100000 01000110 01101001
          01101111 01101110 01100001
        </h3>
        <h3>Please be patient...</h3>
        <h3>Your page is loading...</h3>
      </div>
    </>
  );
}

export default LoadingPage;
