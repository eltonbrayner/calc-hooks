import React, { useState } from "react";
import "./calculadora.css";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculadoraService from "./calculadora.service";

function Calculadora() {
  const [calcular] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] = useState("0");

  function addNumber(event) {
    let number = event.target.textContent;
    if (txtNumeros == "0" && !isNaN(parseFloat(number)))
      return setTxtNumeros(number);
    if (txtNumeros == "0" && number == ".") return setTxtNumeros("0" + number);
    if (number == "." && txtNumeros.split("").indexOf(".") > -1)
      return setTxtNumeros(txtNumeros);
    return setTxtNumeros(txtNumeros + number);
  }

  function defineOperation(event) {
    let op = event.target.textContent;
    return setTxtNumeros(txtNumeros + op);
  }

  return (
    <Container className="d-flex justify-content-center card-body">
      <Jumbotron
        style={{
          background: "transparent !important",
          backgroundColor: "rgba(10, 80,150,0.8)",
          padding: "5px",
          margin: "5px",
          width: "400px",
        }}
      >
        <Container>
          <Row>
            <Col xs="3">
              <Button variant="danger" onClick={() => setTxtNumeros("0")}>
                C
              </Button>
            </Col>
            <Col xs="9">
              <Form.Control
                type="text"
                name="txtNumeros"
                className="text-right"
                readOnly="readonly"
                value={txtNumeros}
                data-testid="txtNumeros"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={addNumber}>
                7
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={addNumber}>
                8
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={addNumber}>
                9
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={addNumber}>
                /
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={addNumber}>
                4
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={addNumber}>
                5
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={addNumber}>
                6
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={addNumber}>
                *
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={addNumber}>
                1
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={addNumber}>
                2
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={addNumber}>
                3
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={addNumber}>
                -
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={addNumber}>
                0
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={addNumber}>
                .
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={addNumber}>
                =
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={addNumber}>
                +
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Container>
  );
}

export default Calculadora;
