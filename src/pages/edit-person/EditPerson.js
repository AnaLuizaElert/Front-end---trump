import { Button, Col, Form, Row } from 'react-bootstrap';
import './EditPerson.css';
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/nav-bar/Nav';
import { UserService } from '../../service/UserService';

function EditPerson() {
  const actualUser = UserService.showOneByName(localStorage.getItem('user'));

  const [user, setUser] = useState({
    name: localStorage.getItem('user'),
    password: ''
  });

  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    if (selectedUserId) {
      UserService.showOne(selectedUserId)
        .then((response) => {
          setUser(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedUserId]);

  const editUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  function register(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const pass = document.getElementById('password').value;
    const verPas = document.getElementById('verifyPassword').value;
    const acPas = document.getElementById('actualPassword').value;

    const nameInput = document.getElementById('name');
    const passInput = document.getElementById('password');
    const verPasInput = document.getElementById('verifyPassword');
    const acPasInput = document.getElementById('actualPassword');

    nameInput.classList.remove('wrongAnswer');
    passInput.classList.remove('wrongAnswer');
    verPasInput.classList.remove('wrongAnswer');
    acPasInput.classList.remove('wrongAnswer');

    if (name !== '' && pass !== '' && verPas !== '' && acPas !== '') {
      if (pass === verPas) {
        UserService.edit(user, user.id)
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.error('Erro na edição do usuário:', error);
          });
      } else {
        alert('Senha incorreta!');
        acPasInput.classList.add('wrongAnswer');
      }
    } else {
      alert('Preencha todos os campos!');
      if (name === '') {
        nameInput.classList.add('wrongAnswer');
      }
      if (pass === '') {
        passInput.classList.add('wrongAnswer');
      }
      if (verPas === '') {
        verPasInput.classList.add('wrongAnswer');
      }
      if (acPas === '') {
        acPasInput.classList.add('wrongAnswer');
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
            <Form.Label>Put your actual password</Form.Label>
            <Form.Control type="password" placeholder="Actual password" id="actualPassword" />
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
            <Form.Control type="password" placeholder="Password" id="verifyPassword" />
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
