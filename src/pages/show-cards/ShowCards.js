//style
import './ShowCards.css';
import Pagination from 'react-bootstrap/Pagination';

//react
import { useEffect, useState } from "react";

//component
import CardComponent from "../../components/card/Card";
import NavBar from '../../components/nav-bar/Nav';

//service
import { CardService } from "../../service/CardService";

//external
import { v4 as uuidv4 } from 'uuid';

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
        setLoading(false); // Indica que o carregamento está completo
        
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
