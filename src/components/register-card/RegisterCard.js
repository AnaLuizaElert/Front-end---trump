import {Button, Col, Form, Row} from 'react-bootstrap';
import NavBar from '../nav-bar/Nav';
import { useState } from 'react';
import { CardService } from '../../service/CardService';

function RegisterCard() {
  
  const [card, setCard] = useState({
    "name": "",
    "qtyCalories": 0,
    "qtyGlucose": 0,
    "qtyProteins": 0,
    "ranking": 1,
    "url": ""
  })

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

  function register(event) {
    event.preventDefault();
    let name = document.getElementById("nameValue").value;
    let qtyCalories = document.getElementById("qtyCalories").value;
    let qtyGlucose = document.getElementById("qtyGlucose").value;
    let qtyProteins = document.getElementById("qtyProteins").value;
    let ranking = document.getElementById("ranking").value;
    let url = document.getElementById("url").value;

    if(document.getElementById("nameValue").classList.contains("wrongAnswer")){
      document.getElementById("nameValue").classList.remove("wrongAnswer");
    }
    if(document.getElementById("qtyCalories").classList.contains("wrongAnswer")){
      document.getElementById("qtyCalories").classList.remove("wrongAnswer");
    }
    if(document.getElementById("qtyGlucose").classList.contains("wrongAnswer")){
      document.getElementById("qtyGlucose").classList.remove("wrongAnswer");
    }
    if(document.getElementById("qtyProteins").classList.contains("wrongAnswer")){
      document.getElementById("qtyProteins").classList.remove("wrongAnswer");
    }
    if(document.getElementById("ranking").classList.contains("wrongAnswer")){
      document.getElementById("ranking").classList.remove("wrongAnswer");
    }
    if(document.getElementById("url").classList.contains("wrongAnswer")){
      document.getElementById("url").classList.remove("wrongAnswer");
    }

    if(name != '' && qtyCalories != '' && qtyGlucose != '' && qtyGlucose != '' && qtyProteins != '' && ranking != '' && url != ''){
      CardService.showOneByName(card.name)
        .then((result) => {
          if (result) {
            alert("Esse nome já existe!");
            document.getElementById("nameValue").classList.add("wrongAnswer");
          } else {
            CardService.create(card)
              .then(() => {
                window.location.reload();
              })
              .catch((error) => {
                console.error("Erro na criação do usuário:", error);
              });
          }
        })
        .catch((error) => {
          // Lidar com erros na busca do usuário
          console.error("Erro na busca do usuário:", error);
          CardService.create(card)
            .then(() => {
              window.location.reload();
            })
            .catch((error) => {
              console.error("Erro na criação do usuário:", error);
            });
        });
    } else {
      alert("Preencha todos os campos!")
      if(name == ''){
        document.getElementById("nameValue").classList.add("wrongAnswer");
      }
      if(qtyCalories == ''){
        document.getElementById("qtyCalories").classList.add("wrongAnswer");
      }
      if(qtyGlucose == ''){
        document.getElementById("qtyGlucose").classList.add("wrongAnswer");
      }
      if(qtyProteins == ''){
        document.getElementById("qtyProteins").classList.add("wrongAnswer");
      }
      if(ranking == ''){
        document.getElementById("ranking").classList.add("wrongAnswer");
      }
      if(url == ''){
        document.getElementById("url").classList.add("wrongAnswer");
      }
    }
  }

  return (
    <>
    <NavBar/>
    <Form className='container-content' onSubmit={register}>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Fruit name" id='nameValue' name='name' onChange={editCard} value={card.name}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Quantity of proteins</Form.Label>
          <Form.Control type="number" placeholder="Qty proteins" id='qtyProteins' name='qtyProteins' onChange={editCard}/>
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
          <Form.Label>Fruit image url</Form.Label>
          <Form.Control type="url" placeholder="url" id='url' name='url' onChange={editCard} value={card.url}/>
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

export default RegisterCard;