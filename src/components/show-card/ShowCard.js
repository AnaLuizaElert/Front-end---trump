import {Form, Button, Card} from 'react-bootstrap';
import React, { useState, useEffect} from 'react';
import SelectCard from '../select-card/SelectCard';
import CardComponent from '../card/Card';
import { CardService } from '../../service/CardService';
import NavBar from '../nav-bar/Nav';
import './ShowCard.css';

function ShowCard() {

  const [card, setCard] = useState({
    "name": "",
    "qtyCalories": 0,
    "qtyGlucose": 0,
    "qtyProteins": 0,
    "ranking": 0,
    "url": ""
  });

  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    if (selectedCardId) {
      CardService.showOne(selectedCardId)
        .then((response) => {
          setCard(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedCardId]);

  return (
    <>
    <NavBar/>
    <Form className='container-content'>
      <Form.Select value={card.id} aria-label="Default select example" className='select-card' id="form" onChange={(e) => setSelectedCardId(e.target.value)}>
        <SelectCard />
      </Form.Select>
      <CardComponent card={card}/>
    </Form>
    </>
  );
}

export default ShowCard;