//style
import { Button, Col, Form, Row } from 'react-bootstrap';

//react
import { useState } from 'react';

//service
import { UserService } from "../../service/UserService.js";

function RegisterPerson() {

  const [user, setUser] = useState({
    "name": "",
    "password": ""
  })

  const editUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  function register(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let pass = document.getElementById("password").value;
    let verPass = document.getElementById("verifyPassword").value;

    if (document.getElementById("name").classList.contains("wrongAnswer")) {
      document.getElementById("name").classList.remove("wrongAnswer");
    }
    if (document.getElementById("password").classList.contains("wrongAnswer")) {
      document.getElementById("password").classList.remove("wrongAnswer");
    }
    if (document.getElementById("verifyPassword").classList.contains("wrongAnswer")) {
      document.getElementById("verifyPassword").classList.remove("wrongAnswer");
    }

    if (name && pass && verPass) {
      if (pass === verPass) {

        UserService.create(user)
          .then(() => {
            window.location.href = '/';
          })
          .catch((error) => {
            console.error("Erro na criação do usuário:", error);
          });

      } else {
        alert("Senhas diferentes!");
        document.getElementById("password").classList.add("wrongAnswer");
        document.getElementById("verifyPassword").classList.add("wrongAnswer");
      }
    } else {
      if (name == '') {
        document.getElementById("name").classList.add("wrongAnswer");
      }
      if (pass == '') {
        document.getElementById("password").classList.add("wrongAnswer");
      }
      if (verPass == '') {
        document.getElementById("verifyPassword").classList.add("wrongAnswer");
      }
    }
  }

  return (
    <Form className='container-content' onSubmit={register}>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Nickname</Form.Label>
          <Form.Control type="text" placeholder="Your nickname" id='name' name='name' onChange={editUser} value={user.name} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Create a password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='password' name='password' onChange={editUser} value={user.password} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Confirm your password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='verifyPassword' />
        </Form.Group>
      </Row>

      <div id='column'>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <a id="link" href="/">Go to login</a>
      </div>
    </Form>
  );
}

export default RegisterPerson;