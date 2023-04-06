import {Button, Form} from 'react-bootstrap';
import './delete-person.css';

function DeletePerson() {

function handleCreate(){
    window.location.reload();
}

  return (
    <Form className='form-delete-person'>
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
  );
}

export default DeletePerson;