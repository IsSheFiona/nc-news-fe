import React, { Component } from "react";
import Articles from "./components/Articles";
//import "./App.css";
import { Router, Link } from "@reach/router";
import Nav from "./components/Nav";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Articles path="/home" />
      </Router>
    </React.Fragment>
  );
}

export default App;
