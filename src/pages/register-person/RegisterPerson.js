//style
import "./RegisterPerson.css";
import "../../utils/ButtonGame.css";
import { Button, Col, Form, Row } from "react-bootstrap";

//react
import { useState } from "react";

//service
import { UserService } from "../../service/UserService.js";
import { addWrongAnswer, removeWrongAnswer } from "../../utils/statusAnswer.js";

function RegisterPerson() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const editUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const arrayIds = ["name", "password", "verifyPassword"];

  function register(event) {
    event.preventDefault();
    removeWrongAnswer(arrayIds);

    if (addWrongAnswer(arrayIds)) {
      UserService.create(user)
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Erro na criação do usuário:", error);
        });
    }
  }

  return (
    <Form className="container-content" onSubmit={register}>
      <Row className="mb-3">
        <Form.Group>
          <p className="register-title">SuperTrunfo</p>
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your nickname"
            id="name"
            name="name"
            onChange={editUser}
            value={user.name}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Create a password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={editUser}
            value={user.password}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Confirm your password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="verifyPassword"
          />
        </Form.Group>
      </Row>
      <div id="column">
        <Button
          variant="primary"
          type="submit"
          className="button-submit button-game"
        >
          Submit
        </Button>
        <a id="link" href="/">
          Go to login
        </a>
      </div>
    </Form>
  );
}

export default RegisterPerson;
