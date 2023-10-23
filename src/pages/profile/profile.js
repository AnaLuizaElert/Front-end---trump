import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/nav-bar/Nav';
import { UserService } from '../../service/UserService';
import './profile.css';

function Profile() {
  const [userName, setUserName] = useState('');
  const [victoryQty, setVictoryQty] = useState(0);
  const [lossesQty, setLossesQty] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    UserService.showOneByName(localStorage.getItem('user'))
      .then((response) => {
        setUserName(response.data.name);
        setVictoryQty(response.data.qtyVitories);
        setLossesQty(response.data.qtyLosses);
        setPoints(response.data.points);
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
