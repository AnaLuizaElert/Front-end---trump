import './DistributeCards.css';
import BackCard from '../../../img/back-card.png';
import { useEffect, useState } from 'react';
import CardComponent from '../../card/Card';
import { CardService } from '../../../service/CardService';
import { useNavigate } from 'react-router-dom';
import ModalWhoPlays from '../../modal/ModalWhoPlays';
import ModalChooseAtribute from '../../modal/ModalChooseAtribute';

function DistributeCards() {
  const navigate = useNavigate()
  const [modalPlayerRoundIsOpen, setModalPlayerRoundIsOpen] = useState(false);
  const [modalChooseAtributeOpen, setModalChooseAtributeIsOpen] = useState(false);

  const [playerFirstCard, setPlayerFirstCard] = useState({
    "name": "",
    "qtyCalories": 0,
    "qtyGlucose": 0,
    "qtyProteins": 0,
    "ranking": 0,
    "url": ""
  });

  const [computerFirstCard, setComputerFirstCard] = useState({
    "name": "",
    "qtyCalories": 0,
    "qtyGlucose": 0,
    "qtyProteins": 0,
    "ranking": 0,
    "url": ""
  });

  const [computerCards, setComputerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [isPlayer, setIsPlayer] = useState(true);
  const [numRound, setNumRound] = useState(0);
  const hasWinner = useState(false);

  const openModalPlayerRound = () => {
    setModalPlayerRoundIsOpen(true);
  };

  const closeModalPlayerRound = () => {
    setModalPlayerRoundIsOpen(false);
  };

  const openModalChooseAtribute = () => {
    setModalChooseAtributeIsOpen(true);
  };

  const closeModalChooseAtribute = () => {
    setModalChooseAtributeIsOpen(false);
  };

  async function distributeCards() {
    let allCards = [];
    allCards = await CardService.showAll();
    let cardQty = allCards.length;
    allCards.sort(() => Math.random() - 0.5);
    if (cardQty % 2 != 0) {
      allCards.pop();
    }
    console.log(allCards);
    setPlayerCards(allCards.slice(0, cardQty / 2));
    setComputerCards(allCards.slice(cardQty / 2, cardQty));
  }

  function compareCards() {

  }

  const initializeGame = () => {
    distributeCards();

    const playRound = () => {
      setNumRound(numRound + 1);
      setTimeout(() => {
        setModalPlayerRoundIsOpen(true);
      }, 3000);
      setModalPlayerRoundIsOpen(false);
      if (isPlayer) {
        setTimeout(() => {
          setModalChooseAtributeIsOpen(true);
        }, 6000);
      } else {
        // Lógica do computador
      }
      if (!hasWinner) {
        setTimeout(playRound, 1000); // Chama playRound novamente após 1 segundo (ajuste o tempo conforme necessário)
        setIsPlayer(!isPlayer);
      }
    };

    playRound(); // Inicia o loop
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    setComputerFirstCard(computerCards[0]);
    setPlayerFirstCard(playerCards[0]);
  }, [computerCards, playerCards]);

  useEffect(() => )

  return (
    <div className='simple-background-game' id='game'>
      <div className='mySide cardSide'>
        <p className='sideIdentity'>You</p>
        {playerFirstCard &&
          <CardComponent id="card" card={playerFirstCard} />
        }
        <p className='cardQty'>Cards quantity: {playerCards.length}</p>
      </div>
      <div className='battle'>
        <div className=''>
          <button className='buttonGiveUp' onClick={() => navigate("/home")}>Give up</button>
        </div>
      </div>
      <div className='enemySide cardSide'>
        <p className='sideIdentity'>Computer</p>
        {isPlayer &&
          <img src={BackCard} className='card' />
        }
        {computerFirstCard && !isPlayer &&
          <CardComponent id="card" card={computerFirstCard} />
        }
        <p className='cardQty'>Cards quantity: {computerCards.length}</p>
      </div>
      {modalPlayerRoundIsOpen && (
        <ModalWhoPlays
          isPlayer={isPlayer}
          numRound={numRound}
          openModalPlayerRound={openModalPlayerRound}
          closeModalPlayerRound={closeModalPlayerRound} />
      )}
      {modalChooseAtributeOpen && (
        <ModalChooseAtribute
          openModalChooseAtribute={openModalChooseAtribute}
          closeModalChooseAtribute={closeModalChooseAtribute} />
      )}
    </div>
  );
}

export default DistributeCards;