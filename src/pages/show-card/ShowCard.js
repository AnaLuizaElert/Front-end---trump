//style
import './ShowCard.css';
import { Form } from 'react-bootstrap';

//react
import React, { useState, useEffect } from 'react';

//components
import CardComponent from '../../components/card/Card';
import NavBar from '../../components/nav-bar/Nav';
import SelectCard from '../../components/select-card/SelectCard';

//service
import { CardService } from '../../service/CardService';

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
          setCard(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedCardId]);

  return (
    <>
      <NavBar />
      <Form className='container-content center-itens'>
        <Form.Select
          value={card.id}
          aria-label="Default select example"
          className='select-card'
          id="form"
          onChange={(e) => setSelectedCardId(e.target.value)}>
          <SelectCard />
        </Form.Select>
        <CardComponent id="card" card={card} />
      </Form>
    </>
  );
}

export default ShowCard;