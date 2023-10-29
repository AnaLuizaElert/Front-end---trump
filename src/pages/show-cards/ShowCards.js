//style
import "./ShowCards.css";
import Pagination from "react-bootstrap/Pagination";

//react
import { useEffect, useState } from "react";

//component
import CardComponent from "../../components/card/Card";
import NavBar from "../../components/nav-bar/Nav";

//service
import { CardService } from "../../service/CardService";

//external
import { v4 as uuidv4 } from "uuid";

function ShowCards() {
  const [cards, setCards] = useState([]);
  const [active, setActive] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        window.scrollTo(0, 0);
        const qtyCards = await CardService.qtyCards();
        const response = await CardService.page(active, 9);
        setCards(response.content);

        let number = Math.floor(qtyCards / 9);
        const newItems = [];
        for (let i = 0; i <= number; i++) {
          newItems.push(
            <Pagination.Item
              key={uuidv4()}
              active={i === active}
              onClick={() => setActive(i)}
            >
              {i + 1}
            </Pagination.Item>
          );
        }
        setItems(newItems);
        setLoading(false);
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
          <div className="container-pagination">
            <Pagination>{items}</Pagination>
          </div>
        </>
      )}
    </>
  );
}

export default ShowCards;
