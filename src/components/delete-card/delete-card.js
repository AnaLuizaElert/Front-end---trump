import {Button, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import './delete-card.css';

function DeleteCard() {

    const [selectValue, setSelectValue] = useState(1);  
    const list = [
      {id: 0, name: 'Abacaxi'},
      {id: 1, name: 'Melancia'},
      {id: 2, name: 'Melão'},
      {id: 3, name: 'Caqui'},
    ];

    function handleCreate(e) {
        e.preventDefault();
        window.location.reload();
    }

  return (
    <Form className='form-delete-card'>
      <Form.Select value={selectValue} aria-label="Default select example" className='select-card' onChange={e => setSelectValue(e.target.value)}>
        {list.map((item, index) => (
            <option value={item.id}>{item.name}</option>
          ))}        
      </Form.Select>

      <Form.Check 
        className='confirm-delete-card'
        type="switch"
        id="custom-switch"
        label="Are you sure to delete this card?"
      />

      <Button variant="primary" type="submit"  onClick={handleCreate}>
        Submit
      </Button>
    </Form>
  );
}

export default DeleteCard;