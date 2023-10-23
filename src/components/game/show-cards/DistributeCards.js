import './DistributeCards.css';
import BackCard from '../../../img/back-card.png';

function DistributeCards() {

  return (
    <div className='game' id='simple-background-game'>
      <div className='first-row row-distribute'>
        <div className='border-colorful border-give-up'>
          <a variant="info" className='button-give-up' href="/">Give up</a>
        </div>
        <img src={BackCard} className='bottom'/>
        <p className='cards-number'>Cartas Restantes: 8</p> 
      </div>
      <div className='second-row row-distribute'>
          <img src={BackCard} className='top'/>
          <p className='cards-number'>Cartas Restantes: 8</p>
      </div>
    </div>
  );
}

export default DistributeCards;