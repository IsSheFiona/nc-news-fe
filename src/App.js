import React from "react";
import { Router } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import Articles from "./components/Articles";
//import "./App.css";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import RouteError from "./components/RouteError";

class App extends React.Component {
  state = {
    loggedInUser: "grumpy19"
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <h2>
            nc newsbot...{"  "}
            <FontAwesomeIcon icon={faRobot} />
          </h2>
          <Nav />
        </header>

        <Router>
          <Articles path="/home" />
          <Articles path="topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          <Comments
            path="/articles/:article_id/comments"
            loggedInUser={this.state.loggedInUser}
          />
          <RouteError path="/*" />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
