//style
import "./Login.css";
import "../../utils/ButtonGame.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//react
import { useState } from "react";

//service
import { AuthenticationService } from "../../service/AuthenticationService";

//utils
import { addWrongAnswerLogin } from "../../utils/statusAnswer";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const arrayIds = ["name", "password"];

  function saveInfo(event) {
    event.preventDefault();
    AuthenticationService.login(login)
      .then((response) => {
        if (response) {
          localStorage.setItem("user", login.username);
          window.location.href = "/home";
        } else {
          addWrongAnswerLogin(arrayIds);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Form className="container-content" onSubmit={saveInfo}>
      <Form.Group className="mb-3">
        <p className="login-title">SuperTrunfo</p>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          id="name"
          name="username"
          value={login.username}
          onChange={(event) =>
            setLogin({ ...login, username: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={login.password}
          onChange={(event) =>
            setLogin({ ...login, password: event.target.value })
          }
        />
      </Form.Group>
      <div id="column">
        <Button
          variant="primary"
          type="submit"
          className="button-submit button-game"
          id="button-submit"
        >
          Submit
        </Button>
        <a id="link" href="/register-person">
          Don't you have an account?
        </a>
      </div>
    </Form>
  );
}

export default Login;
