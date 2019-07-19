import React from "react";
import { Router, Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import styles from "./App.module.css";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import ErrorHandler from "./components/ErrorHandler";

class App extends React.Component {
  state = {
    loggedInUser: "grumpy19"
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <>
        <header className={styles.headerText}>
          <Link to="/home">
            <h2>
              nc newsbot...{"  "}
              <FontAwesomeIcon icon={faRobot} />
            </h2>
          </Link>
          <h4>Logged in as the droid known as {loggedInUser}</h4>
        </header>
        <Nav />

        <Router>
          <Articles path="/" />
          <Articles path="/home" />
          <Articles path="topics/:topic" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={loggedInUser}
          />
          <Comments
            path="/articles/:article_id/comments"
            loggedInUser={loggedInUser}
          />
          <ErrorHandler msg="That page does not exist." default />
        </Router>
      </>
    );
  }
}

export default App;
