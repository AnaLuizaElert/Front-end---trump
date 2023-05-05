import {Button, Col, Form, Row} from 'react-bootstrap';
import {UserService} from "../../service/UserService.js";
import { useState } from 'react';
import NavBar from '../nav-bar/Nav.js';


function RegisterPerson() {

  const [user, setUser] = useState({
      "name": "",
      "password": "" 
  })

  const editUser = (event) => {
    if(event.target.name == "password" || event.target.name == "verifyPassword"){
      let pass = document.getElementById("password");
      let verPass = document.getElementById("verifyPassword");
      if(pass == verPass){
        setUser({...user, ["password"] : event.target.value})
      }
    }
    setUser({...user, [event.target.name] : event.target.value})
  }
  
  function register(event){
    event.preventDefault();
    UserService.create(user);
    console.log(user);
  }

  return (
    <>
    <NavBar/>
    <Form className='container-content' onSubmit={register}>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Nickname</Form.Label>
          <Form.Control type="text" placeholder="Your nickname" id='name' name='name' onChange={editUser} value={user.name}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Create a password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='password' name='password' onChange={editUser} value={user.password}/>
        </Form.Group>
     </Row>

     <Row className="mb-3">
      <Form.Group as={Col}>
          <Form.Label>Confirm your password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='verifyPassword'/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" onClick={register}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default RegisterPerson;