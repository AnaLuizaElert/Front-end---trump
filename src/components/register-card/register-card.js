import {Button, Col, Form, Row} from 'react-bootstrap';
import NavBar from '../nav-bar/Nav';

function RegisterCard() {
  
  function showValues(){
    let name = document.getElementById('nameValue');
    let qtyProteins = document.getElementById('qtyProteins');
    let gramsProteins= document.getElementById('gramsProteins');
    let qtyCalories = document.getElementById('qtyCalories');
    let gramsCalories = document.getElementById('gramsCalories');
    let glycemicIndex = document.getElementById('glycemicIndex');
    let ranking = document.getElementById('ranking');
    if(name.value != '' &&
      qtyProteins.value != '' &&
      gramsProteins.value != '' &&
      qtyCalories.value != '' &&
      gramsCalories.value != '' &&
      glycemicIndex.value != '' &&
      ranking.value != ''){
        alert("Valores inseridos:"
         + "\nName -> " + name.value
         + "\nQty Proteins -> " + qtyProteins.value
         + "\nGramsProteins -> " + gramsProteins.value
         + "\nQty Calories -> " + qtyCalories.value
         + "\nGrams Calories -> " + gramsCalories.value
         + "\nGlycemic Index -> " + glycemicIndex.value
         + "\nRanking -> " + ranking.value);
      } else {
        alert("Insira todos os valores");
      }
  }

  return (
    <>
    <NavBar/>
    <Form className='container-content'>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Fruit name" id='nameValue'/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Quantity of proteins</Form.Label>
          <Form.Control type="number" placeholder="Qty proteins" id='qtyProteins'/>
        </Form.Group>

      <Form.Group as={Col}>
          <Form.Label>This amount of protein came from how many grams?</Form.Label>
          <Form.Control type="number" placeholder="Qty grams"  id='gramsProteins'/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Quantity of calories</Form.Label>
          <Form.Control type="number" placeholder="Qty calories" id='qtyCalories'/>
        </Form.Group>

      <Form.Group as={Col}>
          <Form.Label>This amount of calories came from how many grams?</Form.Label>
          <Form.Control type="number" placeholder="Qty grams" id='gramsCalories'/>
        </Form.Group>
      </Row>     

      <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>What is the glycemic index of this fruit? </Form.Label>
            <Form.Control type="number" placeholder="Glycemic index" id='glycemicIndex'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Like ranking</Form.Label>
          <Form.Select defaultValue="1" id='ranking'>
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

      <Button variant="primary" type="submit"  onClick={showValues}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default RegisterCard;