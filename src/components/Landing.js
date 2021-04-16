import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Navigation from "./Navigation";

export default class Landing extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <Navigation />
        <div className="container">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </>
    );
  }
}
