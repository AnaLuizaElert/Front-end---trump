import {Button, Form} from 'react-bootstrap';
import './DeletePerson.css';
import NavBar from '../nav-bar/Nav';

function DeletePerson() {

function handleCreate(){
    window.location.reload();
}

  return (
    <>
    <NavBar/>
    <Form className='container-content'>
      <Form.Check 
        className='confirm-delete-person'
        type="switch"
        id="custom-switch"
        label="Are you sure to delete this account?"
      />

      <Button variant="primary" type="submit"  onClick={handleCreate}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default DeletePerson;