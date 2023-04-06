import {Card, ListGroup} from 'react-bootstrap';
import './Card.css';

const CardComponent = ({name, qtyProteins, qtyCalories, glycemiclevel, ranking, srcRanking}) => {
  return (
      <Card style={{ width: '18rem' }} className="item-card">
        <div className='item-img' style={{backgroundImage: `url(${srcRanking})`}}>
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <p className='bold'>Qty proteins</p><p>{qtyProteins}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className='bold'>Qty Calories</p><p>{qtyCalories}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className='bold'>Glycemic index</p><p>{glycemiclevel}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className='bold'>Ranking</p><p>{ranking}</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
  );
}

export default CardComponent;