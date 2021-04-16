import React, { Component } from "react";
import PropTypes from "prop-types";

import Navigation from "./Navigation";

export default class Landing extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
