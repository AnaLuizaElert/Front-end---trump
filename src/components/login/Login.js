import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserService } from '../../service/UserService';
import { AuthenticationService } from '../../service/AuthenticationService';

function Login() {

  function saveInfo(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let pas = document.getElementById("password").value;

    AuthenticationService.authenticate({ "username": name, "password": pas })
      .then((response) => {
        if(response != undefined){
          localStorage.setItem("user", name);
          window.location.href = '/home';
        } else {
          document.getElementById("name").classList.add("wrongAnswer");
          document.getElementById("password").classList.add("wrongAnswer");
          alert("Dados incorretos!");
        }
      }).catch((error) => {
        console.error(error);
      });

    // UserService.showOneByName(name)
    // .then((responseName) => {
    //   if (responseName) {
    //     console.log(pas);
    //     console.log(responseName.data.password);
    //     if (responseName.data.password == pas) {
    //       localStorage.setItem("user", name);
    //       window.location.href = '/home';
    //     } else {
    //       alert("Dados incorretos!");
    //       document.getElementById("name").classList.add("wrongAnswer");
    //       document.getElementById("password").classList.add("wrongAnswer");
    //     }
    //   } else {
    //     document.getElementById("name").classList.add("wrongAnswer");
    //     document.getElementById("password").classList.add("wrongAnswer");
    //     alert("Dados incorretos!");
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }

  return (
    <Form className='container-content' onSubmit={saveInfo}>
      <Form.Group className="mb-3">
        <Form.Label >Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" id='name' />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id='password' />
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