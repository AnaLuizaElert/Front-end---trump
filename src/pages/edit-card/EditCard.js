import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/nav-bar/Nav';
import { CardService } from '../../service/CardService';
import SelectCard from '../../components/select-card/SelectCard';
import './EditCard.css';

function EditCard() {

  const [card, setCard] = useState({
    "name": "",
    "qtyCalories": 0,
    "qtyGlucose": 0,
    "qtyProteins": 0,
    "ranking": 0,
    "url": ""
  });
  const arrayIds = ["nameValue", "qtyCalories", "qtyGlucose", "qtyProteins", "ranking", "url"]

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

  const editCard = (event) => {
    if (event.target.name == "qtyProteins" || event.target.name == "gramsProteins") {
      setCard({ ...card, ["qtyProteins"]: getQtyProteins() })
    } else if (event.target.name == "qtyCalories" || event.target.name == "gramsCalories") {
      setCard({ ...card, ["qtyCalories"]: getQtyCalories() })
    } else {
      setCard({ ...card, [event.target.name]: event.target.value })
    }
  }

  function getQtyProteins() {
    let qtyProteinsGram = document.getElementById('gramsProteins').value;
    let qtyProteins = document.getElementById('qtyProteins').value;
    return qtyProteins / qtyProteinsGram;
  }

  function getQtyCalories() {
    let qtyCaloriesGram = document.getElementById('gramsCalories').value;
    let qtyCalories = document.getElementById('qtyCalories').value;
    return qtyCalories / qtyCaloriesGram;
  }

  function removeWrongAnswer() {
    for (let id of arrayIds) {
      const element = document.getElementById(id);
      if (element?.classList.contains("wrongAnswer")) {
        element.classList.remove("wrongAnswer");
      }
    }
  }

  function addWrongAnswer() {
    let isFull = true;
    for (let id of arrayIds) {
      const element = document.getElementById(id);
      if (element?.value === '') {
        element.classList.add("wrongAnswer");
        isFull = false;
      }
    }
    return isFull;
  }

  function register(event) {
    event.preventDefault();
    removeWrongAnswer();

    if (addWrongAnswer()) {
      CardService.edit(card, card.id).then(() => {
        window.location.reload();
      })
        .catch((error) => {
          console.error("Erro na criação da carta:", error);
        });
    }
  }


  return (
    <>
      <NavBar />
      <Form className='container-content' onSubmit={register}>
        <Form.Select value={card.id} aria-label="Default select example" className='select-card' id="form" onChange={(e) => setSelectedCardId(e.target.value)}>
          <SelectCard />
        </Form.Select>

        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Fruit name" id='nameValue' name='name' onChange={editCard} value={card.name} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Quantity of proteins</Form.Label>
            <Form.Control type="number" placeholder="Qty proteins" id='qtyProteins' name='qtyProteins' onChange={editCard} value={card.qtyProteins} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>This amount of protein came from how many grams?</Form.Label>
            <Form.Control type="number" placeholder="Qty grams" id='gramsProteins' name='gramsProteins' onChange={editCard} value={1} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Quantity of calories</Form.Label>
            <Form.Control type="number" placeholder="Qty calories" id='qtyCalories' name='qtyCalories' onChange={editCard} value={card.qtyCalories} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>This amount of calories came from how many grams?</Form.Label>
            <Form.Control type="number" placeholder="Qty grams" id='gramsCalories' name='gramsCalories' onChange={editCard} value={1} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Fruit image url</Form.Label>
            <Form.Control type="url" placeholder="url" id='url' name='url' onChange={editCard} value={card.url} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>What is the glycemic index of this fruit? </Form.Label>
            <Form.Control type="number" placeholder="Glycemic index" id='qtyGlucose' name='qtyGlucose' onChange={editCard} value={card.qtyGlucose} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Like ranking</Form.Label>
            <Form.Select id='ranking' name='ranking' onChange={editCard} value={card.ranking}>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default EditCard;