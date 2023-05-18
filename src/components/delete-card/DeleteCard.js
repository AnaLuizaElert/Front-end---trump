import React, { useState } from 'react';
import { CardService } from '../../service/CardService';
import NavBar from '../nav-bar/Nav';
import SelectCard from '../select-card/SelectCard';
import './DeleteCard.css';
import { Button, Form } from 'react-bootstrap';

function DeleteCard() {
  const [card, setCard] = useState({ id: '' });

  function remove() {
    const isSwitchSelected = document.getElementById("custom-switch").checked;
    const id = document.getElementById("form").value;

    if (isSwitchSelected) {
      CardService.remove(id)
        .then(() => {
          alert("Carta deletada com sucesso!");
          window.location.reload();
        })
        .catch(() => {
          alert("Erro");
        });
    } else {
      alert("Switch não selecionado.");
    }
  }

  return (
    <>
      <NavBar />
      <Form className='container-content'>
        <Form.Select
          value={card.id}
          aria-label="Default select example"
          className='select-card'
          id="form"
          onChange={(e) => setCard({ id: e.target.value })}
        >
          <SelectCard />
        </Form.Select>

        <Form.Check
          className='confirm-delete-card'
          type="switch"
          id="custom-switch"
          label="Are you sure to delete this card?"
        />

        <Button variant="primary" type="submit" className='submit' onClick={remove}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default DeleteCard;
