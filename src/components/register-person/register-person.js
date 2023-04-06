import {Button, Col, Form, Row} from 'react-bootstrap';
import {UserService} from "../../service/UserService.js";
import { useState } from 'react';
import './register-person.css';

function RegisterPerson() {

  const [user, setUser] = useState({
      "name": "",
      "password": "" 
  })

  const editUser = (event) => {
    setUser({...user, [event.target.name] : event.target.value})
  }

  function showValues(){
    let verifyPassword = document.querySelector('#verifyPassword');
    if(user.name != '' &&
      user.password != '' &&
      verifyPassword.value != ''){
        if(user.password == verifyPassword.value){
          alert("Valores inseridos:"
           + "\nName -> " + user.name
           + "\nSenha -> " + user.password);
        } else {
          alert("Senhas não compatíveis");
        }
      } else {
        alert("Insira todos os valores");
      }
  }

  function register(event){
    event.preventDefault();
    showValues();
    UserService.create(user);
    console.log(user);
  }

  return (
    <Form className='form-register-person' onSubmit={register}>
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
  );
}

export default RegisterPerson;