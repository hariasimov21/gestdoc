import React, { Component } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

=======
>>>>>>> 7d0efff6f8fabe7a4dc2aec6b390519f3de91eb2
import Navigation from "./Navigation";

export default class Landing extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
<<<<<<< HEAD
    return (
      <>
        <Navigation />
        <div className="container">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </>
    );
=======
    return <Navigation />;
>>>>>>> 7d0efff6f8fabe7a4dc2aec6b390519f3de91eb2
  }
}
