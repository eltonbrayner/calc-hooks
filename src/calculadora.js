import React, { useState } from "react";
import "./calculadora.css";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculadoraService from "./calculadora.service";

function Calculadora() {
  const [calcular, SOMA, SUBTRAIR, DIVISAO, MULTI] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] = useState("0");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function addNumber(event) {
    let number = event.target.textContent;
    if (txtNumeros === "0" && !isNaN(parseFloat(number)))
      return setTxtNumeros(number);
    if (txtNumeros === "0" && number === ".")
      return setTxtNumeros("0" + number);
    if (number === "." && txtNumeros.split("").indexOf(".") > -1)
      return setTxtNumeros(txtNumeros);
    return setTxtNumeros(txtNumeros + number);
  }

  function setOperator(op) {
    if (op === "=" && operacao) {
      let result = calcular(number1, parseFloat(txtNumeros), operacao);
      return setTxtNumeros(result);
    } else {
      setOperacao(op);
      setNumber1(parseFloat(txtNumeros));
      setTxtNumeros("0");
    }
  }

  function sendResult() {
    let result = calcular(number1, number2, operacao);
    setTxtNumeros(result);
    return setOperacao(null);
  }

  function btnClear() {
    setTxtNumeros("0");
    setNumber1("0");
    setNumber2(null);
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
              <Button variant="danger" onClick={btnClear}>
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
              <Button variant="warning" onClick={() => setOperator(DIVISAO)}>
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
              <Button variant="warning" onClick={() => setOperator(MULTI)}>
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
              <Button variant="warning" onClick={() => setOperator(SUBTRAIR)}>
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
              <Button variant="success" onClick={() => setOperator("=")}>
                =
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={() => setOperator(SOMA)}>
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
