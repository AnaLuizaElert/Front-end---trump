//style
import './profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

//react
import React, { useEffect, useState } from 'react';

//components
import NavBar from '../../components/nav-bar/Nav';

//service
import { UserService } from '../../service/UserService';

function Profile() {
  const [userName, setUserName] = useState('');
  const [victoryQty, setVictoryQty] = useState(0);
  const [lossesQty, setLossesQty] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    UserService.showOneByName(localStorage.getItem('user'))
      .then((response) => {
        setUserName(response.name);
        setVictoryQty(response.qtyVictories);
        setLossesQty(response.qtyLosses);
        setPoints(response.points);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container className='container-content'>
        <Row>
          <Col className='name'>Name</Col>
          <Col className='ActName'>{userName}</Col>
        </Row>
        <Row>
          <Col className='victory quantity'>Victory quantity</Col>
          <Col className='ActVictoryQty'>{victoryQty}</Col>
        </Row>
        <Row>
          <Col className='losses quantity'>Losses quantity</Col>
          <Col className='ActLossesQty'>{lossesQty}</Col>
        </Row>
        <Row>
          <Col className='points'>Points</Col>
          <Col className='ActPoints'>{points}</Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
