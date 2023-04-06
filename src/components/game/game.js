import './game.css';
import CardComponent from "../card/Card"
import Button from 'react-bootstrap/Button';

function Game() {

  return (
    <div id='container-content'>
        <Button variant="info">Info</Button>
        <CardComponent name={"Melancia"} qtyCalories={1111} qtyProteins={111} glycemiclevel={222} ranking={4} srcRanking={8}/>
        <div id='other-cards'></div>
    </div>
  );
}

export default Game;