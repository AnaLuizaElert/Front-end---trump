import {Card, ListGroup} from 'react-bootstrap';
import './Card.css';

const CardComponent = ({card}) => {
  return (
      <Card style={{ width: '18rem' }} className="item-card">
        <div className='item-img' style={{backgroundImage: `url(${card.url})`}}>
        </div>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
        </Card.Body>
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