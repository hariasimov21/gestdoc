import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
=======

>>>>>>> 56e4da36fdf67a26e44da4a8c9bd3bab9c34bb04
import Navigation from "./Navigation";

export default class Landing extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <Navigation />
        <FontAwesomeIcon icon={faCoffee} />
      </>
    );
  }
}
