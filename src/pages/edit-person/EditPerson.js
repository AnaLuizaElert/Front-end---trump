//style
import './EditPerson.css';
import { Button, Col, Form, Row } from 'react-bootstrap';

//react
import React, { useEffect, useState } from 'react';

//components
import NavBar from '../../components/nav-bar/Nav';

//service
import { UserService } from '../../service/UserService';

//utils
import { addWrongAnswer, addWrongAnswerLogin, removeWrongAnswer } from '../../utils/statusAnswer';

function EditPerson() {
  const [user, setUser] = useState({
    name: localStorage.getItem('user'),
    password: '',
    currentPassword: ''
  });

  const [verPassword, setVerPassword] = useState("");

  const [selectedUserId, setSelectedUserId] = useState(null);
  const arrayIds = ["name", "password", "verifyPassword", "actualPassword"]

  const editUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    UserService.showOneByName(localStorage.getItem('user'))
      .then((response) => {
        setSelectedUserId(response.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedUserId]);

  const handleVerPasswordChange = (event) => {
    setVerPassword(event.target.value);
  };

  function register(event) {
    event.preventDefault();

    removeWrongAnswer(arrayIds);

    if (addWrongAnswer(arrayIds)) {
      if (user.password === verPassword) {
        UserService.edit(user, selectedUserId)
          .then(() => {
            // window.location.reload();
          })
          .catch((error) => {
            console.error('Erro na edição do usuário:', error);
          });
      } else {
        addWrongAnswerLogin(['password']);
      }
    }
  }

  return (
    <>
      <NavBar />
      <Form className="container-content">
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Nickname</Form.Label>
            <Form.Control type="text" id="name" name="name" value={user.name} readOnly />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Put your current password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Current password"
              id="actualPassword" 
              name="currentPassword"
              onChange={editUser}
              value={user.currentPassword}
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
            <Form.Label>Confirm your new password</Form.Label>
            <Form.Control
              type="password"
              value={verPassword}
              placeholder="Password"
              id="verifyPassword"
              onChange={handleVerPasswordChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onClick={register}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default EditPerson;
