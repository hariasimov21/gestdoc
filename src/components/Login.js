import React, { Component } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export class Login extends Component {
  render() {
    return (
      <>
        <Row className="row">
          <Col className="col-lg-6 p-5 left">
            <h1 className="text-start pt-5 h1login">JJDOCS</h1>
            <br />
            <p className="text-start pt-5 fs-1">
              Administre su documentación de la forma mas sencilla y segura
              posible
            </p>
            <br />
            <h3 className="pt-5">
              <small className="text-muted">¿Aun no tiene una cuenta?</small>
              <br />
              comuníquese con el administrador
            </h3>
          </Col>
          <Col className="col-lg-6 p-5 right">
            <h1 className="h1login pt-5">Inicio de sesión</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Mostrar Contraseña" />
              </Form.Group>
              <Button
                className="botonlogin"
                variant="primary"
                type="submit"
                block
              >
                Ingresar
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default Login;
