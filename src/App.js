import React, { Component } from "react";
import Articles from "./components/Articles";
//import "./App.css";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/articles">
          <h3>Home</h3>
        </Link>
        <Link to="/coding">
          <h3>Coding</h3>
        </Link>
        <Link to="/football">
          <h3>Football</h3>
        </Link>
        <Link to="/cooking">
          <h3>Cooking</h3>
        </Link>
      </nav>
      <Router>
        <Articles path="/home" />
      </Router>
    </React.Fragment>
  );
}

export default App;
