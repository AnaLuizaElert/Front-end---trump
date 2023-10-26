import { Card, ListGroup } from 'react-bootstrap';
import './Card.css';
import { useEffect, useState } from 'react';

const CardComponent = ({ cardProps }) => {

  const [card, setCard] = useState(cardProps);

  useEffect(() => {
    setCard(cardProps);
  }, [card])


  return (
    <Card style={{ width: '18rem' }} className="item-card">
      <div className='item-img' style={{ backgroundImage: `url(${card.url})` }}>
        <Card.Body>
          <Card.Title className='card-title'>{card.name}</Card.Title>
        </Card.Body>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className='bold'>Qty proteins</p><p>{card.qtyProteins}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className='bold'>Qty Calories</p><p>{card.qtyCalories}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className='bold'>Glycemic index</p><p>{card.qtyGlucose}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className='bold'>Ranking</p><p>{card.ranking}</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardComponent;