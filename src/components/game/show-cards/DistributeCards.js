//style
import './DistributeCards.css';

//react
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//images
import BackCard from '../../../img/back-card.png';
import Computer from '../../../img/computer.png';
import You from '../../../img/you.png';

//components
import CardComponent from '../../card/Card';
import ModalWhoPlays from '../../modal/ModalWhoPlays';
import ModalChooseAtribute from '../../modal/ModalChooseAtribute';
import ModalWinner from '../../modal/ModalWinner';

//services
import { CardService } from '../../../service/CardService';
import { UserService } from '../../../service/UserService';
import { toast } from 'react-toastify';

function DistributeCards() {
  const navigate = useNavigate()
  const [modalPlayerRoundOpen, setModalPlayerRoundOpen] = useState(false);
  const [modalChooseAtributeOpen, setModalChooseAtributeOpen] = useState(false);
  const [modalWinnerOpen, setModalWinnerOpen] = useState(false);

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
  const [numRound, setNumRound] = useState(1);
  const [chosenAttribute, setChosenAttribute] = useState(null);
  const [roundWinner, setRoundWinner] = useState(null);
  const [hasWinner, setHasWinner] = useState(false);
  const [playerUpdate, setPlayerUpdate] = useState({});

  const setModalPlayerRound = () => {
    setModalPlayerRoundOpen(!modalPlayerRoundOpen);
  };

  const setModalChooseAtribute = () => {
    setModalChooseAtributeOpen(!modalChooseAtributeOpen);
  };

  const setModalWinner = () => {
    setModalWinnerOpen(!modalWinnerOpen);
  };

  // Recebe do modal o atributo escolhido pelo usuário
  const chooseAtribute = (attribute) => {
    setChosenAttribute(attribute);
    setModalChooseAtributeOpen(false);
  };

  // Escolhe de forma aleatória a jogada do computador
  function chooseAtributeComputer() {
    setTimeout(() => {
      let attributes = ["qtyCalories", "qtyGlucose", "qtyProteins", "ranking"];
      randomArray(attributes);
      setChosenAttribute(attributes[0]);
    }, 3000)
  };

  // Lógica da desistencia
  function giveUp() {
    updateUser();
    navigate("/profile");
  }

  // Misturar um array
  function randomArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Distribui as cartas para os jogadores de forma randomica
  async function distributeCards() {
    let allCards = [];
    allCards = await CardService.showAll();
    allCards = allCards.slice(0, 6);
    let cardQty = allCards.length;
    randomArray(allCards);
    if (cardQty % 2 != 0) {
      allCards.pop();
    }
    setPlayerCards(allCards.slice(0, cardQty / 2));
    setComputerCards(allCards.slice(cardQty / 2, cardQty));
  }

  // Editar o usuário
  async function updateUser() {
    try {
      const user = await UserService.showOne(localStorage.getItem("user"));
      let editedUser;
      if (computerCards.length === 0) {
        editedUser = {
          "points": (parseInt(user.points) + 2),
          "qtyLosses": user.qtyLosses,
          "qtyVictories": (parseInt(user.qtyVictories) + 1)
        }
      } else {
        editedUser = {
          "points": user.points,
          "qtyLosses": (parseInt(user.qtyLosses) + 1),
          "qtyVictories": user.qtyVictories
        }
      }
      UserService.editBySytem(editedUser);
    } catch (error) {
      toast.error(error);
    }
  }

  function playRound() {
    setTimeout(() => {
      setModalPlayerRoundOpen(true);

      setTimeout(() => {
        setModalPlayerRoundOpen(false);

        if (isPlayer) {
          console.log("IsPlayer: " + isPlayer);
          setTimeout(() => {
            // Lógica do jogador
            setModalChooseAtributeOpen(true);
          }, 1000); // Abre o modal "ChooseAtribute" após 3 segundos
        } else {
          // Lógica do computador
          console.log("IsPlayer: " + isPlayer);
          chooseAtributeComputer();
        }
      }, 3000); // Fecha o modal "PlayerRound" após 3 segundos
    }, 1000); // Abre o modal "PlayerRound" após 1 segundo
  };

  function initializeGame() {
    distributeCards();
    playRound();
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    setComputerFirstCard(computerCards[0]);
    setPlayerFirstCard(playerCards[0]);
  }, [computerCards, playerCards]);

  useEffect(() => {
    setNumRound(numRound + 1);
    console.log("numRound: " + numRound);

    const playerValue = parseFloat(playerFirstCard[chosenAttribute]);
    const computerValue = parseFloat(computerFirstCard[chosenAttribute]);

    console.log("player chosenAttribute: " + playerValue);
    console.log("computer chosenAttribute: " + computerValue);
    console.log("player: ");
    console.log(playerFirstCard);
    console.log("computer: ");
    console.log(computerFirstCard);

    let cardWithdrawn = {};

    if (playerValue > computerValue) {
      setRoundWinner("player");
      console.log("roundWinner: player");
      cardWithdrawn = computerCards.shift();
      playerCards.push(cardWithdrawn);
    } else {
      setRoundWinner("computer");
      console.log("roundWinner: computer");
      cardWithdrawn = playerCards.shift();
      computerCards.push(cardWithdrawn);
    }

    randomArray(playerCards);
    randomArray(computerCards);
    console.log("playerCards");
    console.log(playerCards);
    console.log("computerCards");
    console.log(computerCards);

    setModalWinnerOpen(true);
    setTimeout(() => {
      setModalWinnerOpen(false);
      setIsPlayer(!isPlayer);
      if (playerCards.length === 0 || computerCards.length === 0) {
        setHasWinner(true);
        updateUser();
        navigate("/profile");
      }
    }, 5000);

    playRound();
  }, [chosenAttribute]);

  return (
    <div className='simple-background-game' id='game'>
      <div className='mySide cardSide'>
        <img src={You} className='player-title' />
        {playerFirstCard &&
          <CardComponent id="card" cardProps={playerFirstCard} />
        }
        <p className='cardQty button-85'>Cards quantity: {playerCards.length}</p>
      </div>
      <div className='battle'>
        <button className='buttonGiveUp' onClick={() => giveUp}>Give up</button>
      </div>
      <div className='enemySide cardSide'>
        <img src={Computer} className='player-title' />
        {isPlayer &&
          <img src={BackCard} className='card' />
        }
        {computerFirstCard && !isPlayer &&
          <CardComponent id="card" cardProps={computerFirstCard} />
        }
        <p className='cardQty button-85'>Cards quantity: {computerCards.length}</p>
      </div>
      {modalPlayerRoundOpen && (
        <ModalWhoPlays
          isPlayer={isPlayer}
          numRound={numRound}
          setModalPlayerRound={setModalPlayerRound} />
      )}
      {modalChooseAtributeOpen && (
        <ModalChooseAtribute
          setModalChooseAtribute={setModalChooseAtribute}
          chooseAtribute={chooseAtribute} />
      )}
      {modalWinnerOpen && (
        <ModalWinner
          setModalWinner={setModalWinner}
          gameOver={hasWinner}
          roundWinner={roundWinner} />
      )}
    </div>
  );
}

export default DistributeCards;