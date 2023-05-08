import {Button, Col, Form, Row} from 'react-bootstrap';
import React, { useState } from 'react';
import NavBar from '../nav-bar/Nav';
import { CardService } from '../../service/CardService';
import SelectCard from '../select-card/SelectCard';
import './EditCard.css';

function EditCard() {

  const [card, setCard] = useState({
    "name": "", 
    "qtyCalories": 0,
    "qtyGlucose": 0,
    "qtyProteins": 0,
    "ranking": 0
  });  

  const editCard = (event) => {
    if(event.target.name == "qtyProteins" || event.target.name == "gramsProteins"){
      setCard({...card, ["qtyProteins"] : getQtyProteins()})
    } else if(event.target.name == "qtyCalories" ||  event.target.name == "gramsCalories"){
      setCard({...card, ["qtyCalories"] : getQtyCalories()})
    } else {
      setCard({...card, [event.target.name] : event.target.value})
    }
  }

  function getQtyProteins(){
    let qtyProteinsGram = document.getElementById('gramsProteins').value;
    let qtyProteins = document.getElementById('qtyProteins').value;
    return qtyProteins/qtyProteinsGram;
  }

  function getQtyCalories(){
    let qtyCaloriesGram = document.getElementById('gramsCalories').value;
    let qtyCalories = document.getElementById('qtyCalories').value;
    return qtyCalories/qtyCaloriesGram;
  }

  function register(event){
    event.preventDefault();
    CardService.edit(card, card.id);
    console.log(card);
  }

  function showDataCard(){
    let valueSelect = document.getElementById("form").value;

    console.log(valueSelect);

    let chosenCard = CardService.showOne(valueSelect);

    console.log(chosenCard)
    
    setCard({...card, ["name"] : chosenCard.name})
    setCard({...card, ["ranking"] : chosenCard.ranking})
    setCard({...card, ["qtyCalories"] : chosenCard.qtyCalories})
    setCard({...card, ["qtyProteins"] : chosenCard.qtyProteins})
    setCard({...card, ["qtyCalories"] : chosenCard.qtyCalories}) 

    document.getElementById("name").value = chosenCard.name;
    console.log(chosenCard.name)
    }

  return (
    <>
    <NavBar/>
    <Form className='container-content' onSubmit={register}>
      <Form.Select value={card.id} aria-label="Default select example" className='select-card' id="form" onChange={e => showDataCard()}>
          <SelectCard />        
      </Form.Select>

      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Fruit name" id='nameValue' name='name' onChange={editCard} value={card.name}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Quantity of proteins</Form.Label>
          <Form.Control type="number" placeholder="Qty proteins" id='qtyProteins' name='qtyProteins' onChange={editCard} />
        </Form.Group>

      <Form.Group as={Col}>
          <Form.Label>This amount of protein came from how many grams?</Form.Label>
          <Form.Control type="number" placeholder="Qty grams"  id='gramsProteins' name='gramsProteins' onChange={editCard}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Quantity of calories</Form.Label>
          <Form.Control type="number" placeholder="Qty calories" id='qtyCalories' name='qtyCalories' onChange={editCard}/>
        </Form.Group>

      <Form.Group as={Col}>
          <Form.Label>This amount of calories came from how many grams?</Form.Label>
          <Form.Control type="number" placeholder="Qty grams" id='gramsCalories' name='gramsCalories' onChange={editCard} />
        </Form.Group>
      </Row>     

      <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>What is the glycemic index of this fruit? </Form.Label>
            <Form.Control type="number" placeholder="Glycemic index" id='qtyGlucose' name='qtyGlucose' onChange={editCard} value={card.qtyGlucose}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Like ranking</Form.Label>
          <Form.Select id='ranking' defaultValue={1} name='ranking' onChange={editCard} value={card.ranking}>
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