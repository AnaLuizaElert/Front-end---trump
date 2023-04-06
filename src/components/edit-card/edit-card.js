import {Button, Col, Form, Row} from 'react-bootstrap';
import React, { useState } from 'react';
import './edit-card.css';

function EditCard() {

    const [selectValue, setSelectValue] = useState(1);  
    const list = [
      {id: 0, name: 'Abacaxi'},
      {id: 1, name: 'Melancia'},
      {id: 2, name: 'Melão'},
      {id: 3, name: 'Caqui'},
    ];

    function handleCreate(e) {
        e.preventDefault()
        alert(selectValue)  
      }

  return (
    <Form className='form-register-card'>
      <Form.Select value={selectValue} aria-label="Default select example" className='select-card' onChange={e => setSelectValue(e.target.value)}>
        {list.map((item, index) => (
            <option value={item.id}>{item.name}</option>
          ))}        
      </Form.Select>

      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Fruit name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Quantity of proteins</Form.Label>
          <Form.Control type="number" placeholder="Qty proteins" />
        </Form.Group>

      <Form.Group as={Col}>
          <Form.Label>This amount of protein came from how many grams?</Form.Label>
          <Form.Control type="number" placeholder="Qty grams" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Quantity of calories</Form.Label>
          <Form.Control type="number" placeholder="Qty calories" />
        </Form.Group>

      <Form.Group as={Col}>
          <Form.Label>This amount of calories came from how many grams?</Form.Label>
          <Form.Control type="number" placeholder="Qty grams" />
        </Form.Group>
      </Row>     

      <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>What is the glycemic index of this fruit? </Form.Label>
            <Form.Control type="number" placeholder="Glycemic index" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Like ranking</Form.Label>
          <Form.Select defaultValue="1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit"  onClick={handleCreate}>
        Submit
      </Button>
    </Form>
  );
}

export default EditCard;