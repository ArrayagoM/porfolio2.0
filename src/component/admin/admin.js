import React from "react";
import { Link } from "react-router-dom";
import Registro from "./Registro";
import Login from "./Login";
import { Container, Row, Col } from "react-bootstrap";
import "./Admin.css"; // Importa el archivo de estilos CSS

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="d-flex justify-content-between mb-3">
        <Link to={'/proyec'} className="btn btn-primary">
          Agregar Proyecto
        </Link>
        <Link to={'/admin/contac'} className="btn btn-secondary">
          Obtener Contactos
        </Link>
      </div>
      <Container className="form-container">
        <Row>
          <Col md={6}>
            <div className="mb-4" style={{ marginTop: '20px' }}>
              <h2>Registro</h2>
              <Registro />
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-4" style={{ marginTop: '20px' }}>
              <h2>Iniciar Sesión</h2>
              <Login />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
