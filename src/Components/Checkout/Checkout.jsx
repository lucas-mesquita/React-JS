import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const Checkout = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    };
    return (
      <div className="mx-auto text-center" style={{ maxWidth: "500px" }}>
        <h1>Datos de pago</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Pagar
          </Button>
        </Form>
      </div>
    );
  };