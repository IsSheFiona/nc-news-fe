import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Voter.module.css";
import { vote } from "../api";

class Voter extends React.Component {
  state = {
    voteChanger: 0
  };
  render() {
    const { voteChanger } = this.state;
    return (
      <>
        <p>
          Human approval level{":  "}
          {this.props.votes + voteChanger}
        </p>
        <form onSubmit={e => e.preventDefault()} className={styles.voteForm}>
          <label>This human is fully operational</label>
          <button
            onClick={() => this.voteHandler(1)}
            value={1}
            disabled={voteChanger}
            className={styles.voteButton}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          <label>This human is malfunctioning</label>
          <button
            onClick={() => this.voteHandler(-1)}
            value={-1}
            disabled={voteChanger}
            className={styles.voteButton}
          >
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </button>
        </form>
      </>
    );
  }
  voteHandler = value => {
    const { type, id } = this.props;
    this.setState(prevState => {
      return { voteChanger: prevState.voteChanger + value };
    });
    vote(type, id).catch(err => {
      this.setState({ err });
    });
  };
}

export default Voter;
