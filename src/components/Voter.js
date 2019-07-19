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
    return (
      <>
        <p>
          Human approval level{":  "}
          {this.props.votes + this.state.voteChanger}
        </p>
        <form onSubmit={e => e.preventDefault()} className={styles.voteForm}>
          <label>This human is fully operational</label>
          <button
            onClick={() => this.voteHandler(1)}
            value={1}
            disabled={this.state.voteChanger}
            className={styles.voteButton}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          <label>This human is malfunctioning</label>
          <button
            onClick={() => this.voteHandler(-1)}
            value={-1}
            disabled={this.state.voteChanger}
            className={styles.voteButton}
          >
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </button>
        </form>
      </>
    );
  }
  voteHandler = value => {
    this.setState(prevState => {
      return { voteChanger: prevState.voteChanger + value };
    });
    vote(this.props.type, this.props.id).catch(err => {
      this.setState({ err });
    });
  };
}

export default Voter;
