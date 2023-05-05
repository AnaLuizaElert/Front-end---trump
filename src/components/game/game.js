import './Game.css';
import CardComponent from "../card/Card"
import Button from 'react-bootstrap/Button';
import BackCard from '../../img/back-card.png';

function Game() {

  return (
    <div className='game'>
      <div className='first-row row'>
        <Button variant="info" className='button' href="/">Desistir</Button>
      </div>
      <div  className='second-row rowGame'>
        <img src={BackCard} className='back-card bottom'/>
        <p className='cards-number'>Cartas Restantes: 8</p>
      </div>
      <div className='third-row row'>
          <img src={BackCard} className='back-card top'/>
          <p className='cards-number'>Cartas Restantes: 8</p>
          <CardComponent className="main-card" name={"Melancia"} qtyCalories={1111} qtyProteins={111} glycemiclevel={222} ranking={4} srcRanking={8}/>
      </div>
    </div>
  );
}

export default Game;