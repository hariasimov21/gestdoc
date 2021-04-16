import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faFolder,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";

export default class Landing extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <Navigation />
        <Row>
          <Col xs={12} lg={6}>
            <h1>
              Administra tu documentación con el mejor gestor de documentos de
              todo Frutillar
            </h1>
          </Col>
          <Col xs={6} lg={3}>
            <div>
              <FontAwesomeIcon
                className="text-200 text-blue"
                icon={faFileAlt}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="text-200 text-whiteblue"
                icon={faFilePdf}
              />
            </div>
          </Col>
          <Col xs={6} lg={3}>
            <FontAwesomeIcon className="text-200" icon={faFolder} />
          </Col>
        </Row>
      </>
    );
  }
}
