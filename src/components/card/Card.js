import { Card, ListGroup } from "react-bootstrap";
import "./Card.css";

const CardComponent = ({ card }) => {
  return (
    <Card style={{ width: "18rem" }} className="item-card">
      <div className="item-img" style={{ backgroundImage: `url(${card.url})` }}>
        <Card.Body>
          <Card.Title className="card-title">{card.name}</Card.Title>
        </Card.Body>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className="bold text-black">Qty proteins</p>
          <p className="text-black">{card.qtyProteins}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="bold text-black">Qty Calories</p>
          <p className="text-black">{card.qtyCalories}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="bold text-black">Glycemic index</p>
          <p className="text-black">{card.qtyGlucose}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="bold text-black">Ranking</p>
          <p className="text-black">{card.ranking}</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardComponent;
