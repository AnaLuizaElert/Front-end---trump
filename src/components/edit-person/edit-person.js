import {Button, Col, Form, Row} from 'react-bootstrap';
import './edit-person.css';
import NavBar from '../nav-bar/Nav';

function EditPerson() {

    function handleCreate(){
        window.location.reload();
    }

  return (
    <>
    <NavBar/>
    <Form className='container-content'>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Edit Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Edit Password</Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit"  onClick={handleCreate}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default EditPerson;