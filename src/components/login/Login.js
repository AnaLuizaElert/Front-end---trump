import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserService } from '../../service/UserService';
import React, { useEffect, useState } from 'react';

function Login() {
  
  const [user, setUser] = useState({
    "name": "",
    "password": "" 
  })
  
  function saveInfo(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    localStorage.setItem("user", name);
  }
  
  useEffect(() => {
    let name = document.getElementById("name").value;
    UserService.showOneByName(name)
      .then((response) => {
        setUser(response.data);
        console.log(user)
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <Form className='container-content' onSubmit={saveInfo}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" id='name' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" className='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default Login;