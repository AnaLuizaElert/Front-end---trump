import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import NavBar from '../nav-bar/Nav';
import { UserService } from '../../service/UserService.js';
import './DeletePerson.css';

function DeletePerson() {
  const [isSwitchSelected, setIsSwitchSelected] = useState(false);

  function remove() {
    if (isSwitchSelected) {
      UserService.showOneByName(localStorage.getItem('user'))
        .then((response) => {
          UserService.remove(response.data.id)
            .then(() => {
              window.location.href = '/login';
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
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
          href={isSwitchSelected ? '/login' : '/delete-person'}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default DeletePerson;
