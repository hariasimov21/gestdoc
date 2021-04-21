import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Row className="bg-default">
          <Col xs={12} md={6} lg={4}>
            <h2>Contáctanos</h2>
            <h3>Nro. +569 454 676 44</h3>
            <h3>Email: Administrador@ccpingenieria.cl</h3>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h1>Siguenos</h1>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faPinterest} />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <h1>Datos Legales</h1>
            <p>
              Copyright © 2021 Esta y todas las app de JJesentialsJJ todos los
              derechos reservados
            </p>
          </Col>
        </Row>
      </>
    );
  }
}
