import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthenticationService } from '../../service/AuthenticationService';
import { useState } from 'react';

function Login() {

  const [login, setLogin] = useState({
    "username": "",
    "password": ""
  })
  
  function saveInfo(event){
    event.preventDefault();
    AuthenticationService.login(login)
    .then((response) => {
      if (response) {
          localStorage.setItem("user", login.username);
          window.location.href = '/home';
      } else {
        document.getElementById("name").classList.add("wrongAnswer");
        document.getElementById("password").classList.add("wrongAnswer");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <Form className='container-content' onSubmit={saveInfo}>
      <Form.Group className="mb-3">
        <Form.Label >Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name" 
          id='name' 
          name='username' 
          value={login.username} 
          onChange={(event) => setLogin({...login, username : event.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          id='password'
          name='password' 
          value={login.password} 
          onChange={(event) => setLogin({...login, password : event.target.value})} />
      </Form.Group>

      <div id='column'>
        <Button variant="primary" type="submit" className='submit' id='button-submit'>
          Submit
        </Button>

        <a id="link" href="/register-person">Não possui uma conta?</a>
      </div>
    </Form>
  );
}

export default Login;