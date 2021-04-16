import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <Nav
          className=" navbar navbar-dark bg-dark justify-content-end "
          /*  activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} */
        >
          <Nav.Item>
            <Nav.Link className="text-white" href="/home">
              CCP Ingenieria
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Quienes somos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Contacto</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Inicia Sesión
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Header;
