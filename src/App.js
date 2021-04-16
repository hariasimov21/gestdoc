import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Landing} />
    </Router>
  );
}

export default App;
