import CardComponent from "../card/Card";
import { v4 as uuidv4 } from 'uuid';
import './ShowCards.css';
import NavBar from '../nav-bar/Nav';
import { useEffect, useState } from "react";
import { CardService } from "../../service/CardService";

function ShowCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Simulação de chamada de API para obter as cartas cadastradas
    // Substitua este código pela chamada real à sua API
    const fetchCards = async () => {
      try {
        const response = await CardService.showAll(); // Substitua "CardService.getAll()" pela sua chamada real à API
        setCards(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, []);

  return (
    <>
      <NavBar />
      <div className="show-all-cards-container">
        {cards.map((card) => (
          <CardComponent key={uuidv4()} card={card} />
        ))}
      </div>
    </>
  );
}

export default ShowCards;
