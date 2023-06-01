import { CardService } from "../../service/CardService";
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react";
import CardComponent from "../card/Card";
import { v4 as uuidv4 } from 'uuid';
import NavBar from '../nav-bar/Nav';
import './ShowCards.css';

function ShowCards() {
  const [cards, setCards] = useState([]);
  const [active, setActive] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const qtyCards = await CardService.qtyCards();
        const response = await CardService.page(active, 9);
        setCards(response.data.content);
        console.log(response.data)

        let number = Math.ceil(qtyCards.data / 9);
        const newItems = [];
        for (let i = 1; i <= number; i++) {
          newItems.push(
            <Pagination.Item key={uuidv4()} active={i === active} onClick={() => setActive(i)}>
              {i}
            </Pagination.Item>
          );
        }
        setItems(newItems);

        setLoading(false); // Indicar que o carregamento está completo

      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, [active]);

  return (
    <>
      <NavBar />
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <>
          {cards.length > 0 ? (
            <div className="show-all-cards-container">
              {cards.map((card) => (
                <CardComponent key={uuidv4()} card={card} />
              ))}
            </div>
          ) : (
            <div>Nenhum card encontrado</div>
          )}
          <div className="pagination">
            <Pagination>{items}</Pagination>
          </div>
        </>
      )}
    </>
  );
}

export default ShowCards;
