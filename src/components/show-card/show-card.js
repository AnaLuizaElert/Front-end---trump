import {Form, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import './show-card.css';

function ShowCard() {

  const [selectValue, setSelectValue] = useState(1);  
  const list = [
      {id: 0, name: 'Abacaxi'},
      {id: 1, name: 'Melancia'},
      {id: 2, name: 'Melão'},
      {id: 3, name: 'Caqui'},
  ];

  let verify = false;

  return (
    <Form className='form-register-card'>
      <Form.Select value={selectValue} aria-label="Default select example" className='select-card' onChange={e => setSelectValue(e.target.value)}>
        {list.map((item, index) => (
            <option value={item.id}>{item.name}</option>
          ))}        
      </Form.Select>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default ShowCard;