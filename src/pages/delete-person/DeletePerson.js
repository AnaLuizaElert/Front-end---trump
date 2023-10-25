//style
import './DeletePerson.css';
import { Button, Form } from 'react-bootstrap';

//react
import React, { useState } from 'react';

//components
import NavBar from '../../components/nav-bar/Nav';

//service
import { UserService } from '../../service/UserService.js';

function DeletePerson() {
  const [isSwitchSelected, setIsSwitchSelected] = useState(false);

  async function remove() {
    if (isSwitchSelected) {
      const response = await UserService.showOneByName(localStorage.getItem('user'));
      await UserService.remove(response.id)
      window.location.href = '/login';
    } else {
      alert('Switch não selecionado.');
    }
  }

  return (
    <>
      <NavBar />
      <Form className='container-content'>
        <Form.Check
          className='confirm-delete-person'
          type='switch'
          id='custom-switch'
          label='Are you sure you want to delete this account?'
          checked={isSwitchSelected}
          onChange={(e) => setIsSwitchSelected(e.target.checked)}
        />
        <Button
          variant='primary'
          type='submit'
          onClick={remove}
          href={isSwitchSelected ? '/' : '/delete-person'}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default DeletePerson;
