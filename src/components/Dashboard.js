import React, { Component } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export class Dashboard extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Button variant="outline-success" size="lg">
              Subir Documento
            </Button>
            <Button variant="outline-success" size="lg">
              Documentos Recibidos
            </Button>
            <Button variant="outline-success" size="lg">
              Enviar Documento
            </Button>
            <Button variant="outline-success" size="lg">
              Buscar Documento
            </Button>
            <Button variant="outline-success" size="lg">
              Administrar usuarios
            </Button>
          </Col>
          <Col xs={12} md={8} lg={8}></Col>
        </Row>
      </>
    );
  }
}

export default Dashboard;
