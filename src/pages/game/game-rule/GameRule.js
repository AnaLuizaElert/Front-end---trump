//style
import "./GameRule.css";
import "../../../utils/ButtonGame.css";

//react
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//images
import BackCard from "../../../img/back-card.png";
import Computer from "../../../img/computer.png";
import You from "../../../img/you.png";

//components
import CardComponent from "../../../components/card/Card";
import ModalWhoPlays from "../../../components/modal/ModalWhoPlays";
import ModalChooseAtribute from "../../../components/modal/ModalChooseAtribute";
import ModalWinner from "../../../components/modal/ModalWinner";

//services
import { CardService } from "../../../service/CardService";
import { UserService } from "../../../service/UserService";
import { toast } from "react-toastify";

function GameRule() {
  const navigate = useNavigate();
  const { level } = useParams();
  const [modalPlayerRoundOpen, setModalPlayerRoundOpen] = useState(false);
  const [modalChooseAtributeOpen, setModalChooseAtributeOpen] = useState(false);
  const [modalWinnerOpen, setModalWinnerOpen] = useState(false);

  const [playerFirstCard, setPlayerFirstCard] = useState({
    name: "",
    qtyCalories: 0,
    qtyGlucose: 0,
    qtyProteins: 0,
    ranking: 0,
    url: "",
  });

  const [computerFirstCard, setComputerFirstCard] = useState({
    name: "",
    qtyCalories: 0,
    qtyGlucose: 0,
    qtyProteins: 0,
    ranking: 0,
    url: "",
  });

  const [computerCards, setComputerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [chosenAttribute, setChosenAttribute] = useState({
    attribute: "",
    numRound: 1,
  });
  const [roundWinner, setRoundWinner] = useState(null);
  const [hasWinner, setHasWinner] = useState(false);

  // muda o estado do modal que indica o jogador da rodada
  const setModalPlayerRound = () => {
    setModalPlayerRoundOpen(!modalPlayerRoundOpen);
  };

  // muda o estado do modal que mostra os atributos para o player
  const setModalChooseAtribute = () => {
    setModalChooseAtributeOpen(!modalChooseAtributeOpen);
  };

  // muda o estado do modal que mostra o vencedor
  const setModalWinner = () => {
    setModalWinnerOpen(!modalWinnerOpen);
  };

  //Inicia o jogo
  useEffect(() => {
    distributeCards();
    playRound();
  }, []);

  // Distribui as cartas para os jogadores de forma randomica
  async function distributeCards() {
    let allCards = [];
    allCards = await CardService.showAll();
    randomArray(allCards);
    if (level === "easy") {
      allCards = allCards.slice(0, 8);
    } else if (level === "normal") {
      allCards = allCards.slice(0, 16);
    } else {
      allCards = allCards.slice(0, 28);
    }

    let cardQty = allCards.length;
    setPlayerCards(allCards.slice(0, cardQty / 2));
    setComputerCards(allCards.slice(cardQty / 2, cardQty));
  }

  //Executa cada partida
  function playRound() {
    setModalWinnerOpen(false);
    if (!hasWinner) {
      setModalPlayerRoundOpen(true);

      setTimeout(() => {
        setModalPlayerRoundOpen(false);

        if (chosenAttribute.numRound % 2 !== 0) {
          // Logic for the player
          setModalChooseAtributeOpen(true);
        } else {
          // Logic for the computer
          chooseAtributeComputer();
        }
      }, 3000); // Closes the "PlayerRound" modal after 3 seconds
    } else {
      updateUser();
      navigate("/profile");
    }
  }

  // Recebe do modal o atributo escolhido pelo usuário
  const chooseAtribute = (attribute) => {
    setChosenAttribute({
      attribute: attribute,
      numRound: chosenAttribute.numRound + 1,
    });
    setModalChooseAtributeOpen(false);
  };

  // Escolhe de forma aleatória a jogada do computador
  function chooseAtributeComputer() {
    let attributes = ["qtyCalories", "qtyGlucose", "qtyProteins", "ranking"];
    randomArray(attributes);
    setChosenAttribute({
      attribute: attributes[0],
      numRound: chosenAttribute.numRound + 1,
    });
  }

  // Lógica da desistencia
  function giveUp() {
    updateUser();
    navigate("/profile");
  }

  // Misturar um array
  function randomArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Editar o usuário
  async function updateUser() {
    try {
      const user = await UserService.showOneByName(
        localStorage.getItem("user")
      );
      let editedUser;
      if (computerCards.length === 0) {
        editedUser = {
          points: parseInt(user.points) + 2,
          qtyLosses: parseInt(user.qtyLosses),
          qtyVictories: parseInt(user.qtyVictories) + 1,
        };
      } else {
        editedUser = {
          points: parseInt(user.points),
          qtyLosses: parseInt(user.qtyLosses) + 1,
          qtyVictories: parseInt(user.qtyVictories),
        };
      }
      UserService.editBySytem(user.id, editedUser);
    } catch (error) {
      toast.error(error);
    }
  }

  // Chame essa função sempre que as cartas do jogador ou do computador mudarem
  useEffect(() => {
    if (playerCards.length !== 0 || computerCards.length !== 0) {
      updateFirstCards();
    }
  }, [computerCards, playerCards]);

  // Mover a lógica de atualização das primeiras cartas para uma função
  function updateFirstCards() {
    setComputerFirstCard(computerCards[0]);
    setPlayerFirstCard(playerCards[0]);
  }

  useEffect(() => {
    if (chosenAttribute.attribute) {
      registerResultGame();
    }
  }, [chosenAttribute]);

  const registerResultGame = () => {
    if (chosenAttribute) {
      const playerValue = parseFloat(playerFirstCard[chosenAttribute]);
      const computerValue = parseFloat(computerFirstCard[chosenAttribute]);

      let cardWithdrawn = {};

      if (playerValue > computerValue) {
        setRoundWinner("player");
        cardWithdrawn = computerCards.shift();
        playerCards.push(cardWithdrawn);
      } else {
        setRoundWinner("computer");
        cardWithdrawn = playerCards.shift();
        computerCards.push(cardWithdrawn);
      }

      if (playerCards.length === 0 || computerCards.length === 0) {
        setHasWinner(true);
      } else {
        randomArray(playerCards);
        randomArray(computerCards);
      }

      setModalWinnerOpen(true);

      if (computerCards.length === 0 || playerCards.length === 0) {
        setTimeout(() => {
          updateUser();
          navigate("/profile");
        }, 2000);
      }
    }
  };

  return (
    <div className="simple-background-game" id="game">
      <div className="mySide cardSide">
        <img src={You} className="player-title" />
        {playerFirstCard && <CardComponent id="card" card={playerFirstCard} />}
        <p className="cardQty button-85">
          Cards quantity: {playerCards.length}
        </p>
      </div>

      <div className="battle">
        <button className="buttonGiveUp buttonGame" onClick={() => giveUp()}>
          Give up
        </button>
      </div>

      <div className="enemySide cardSide">
        <img src={Computer} className="player-title" />
        {chosenAttribute.numRound % 2 !== 0 && (
          <img src={BackCard} className="card" />
        )}
        {computerFirstCard && chosenAttribute.numRound % 2 === 0 && (
          <CardComponent id="card" card={computerFirstCard} />
        )}
        <p className="cardQty button-85">
          Cards quantity: {computerCards.length}
        </p>
      </div>

      {modalPlayerRoundOpen && (
        <ModalWhoPlays
          numRound={chosenAttribute.numRound}
          setModalPlayerRound={setModalPlayerRound}
        />
      )}
      {modalChooseAtributeOpen && (
        <ModalChooseAtribute
          setModalChooseAtribute={setModalChooseAtribute}
          chooseAtribute={chooseAtribute}
        />
      )}
      {modalWinnerOpen && (
        <ModalWinner
          setModalWinner={setModalWinner}
          gameOver={hasWinner}
          roundWinner={roundWinner}
          chosenAttribute={chosenAttribute}
          computerFirstCard={computerFirstCard}
          playerFirstCard={playerFirstCard}
          playRound={playRound}
        />
      )}
    </div>
  );
}

export default GameRule;
