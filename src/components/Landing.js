import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD

=======
>>>>>>> f4a881a324761d64d5a215758f3303871c9d01b9
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
>>>>>>> f4a881a324761d64d5a215758f3303871c9d01b9
  }
}
