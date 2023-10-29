//style
import "./EditCard.css";
import "../../utils/ButtonGame.css";
import { Button, Col, Form, Row } from "react-bootstrap";

//react
import React, { useEffect, useState } from "react";

//components
import NavBar from "../../components/nav-bar/Nav";
import SelectCard from "../../components/select-card/SelectCard";

//service
import { CardService } from "../../service/CardService";

//utils
import { addWrongAnswer, removeWrongAnswer } from "../../utils/statusAnswer";
import { toastError } from "../../utils/ToastError";

function EditCard() {
  const [card, setCard] = useState({
    name: "",
    qtyCalories: 0,
    qtyGlucose: 0,
    qtyProteins: 0,
    ranking: 0,
    url: "",
  });

  const arrayIds = [
    "name-value",
    "qty-calories",
    "qty-glucose",
    "qty-proteins",
    "ranking",
    "url",
  ];

  const [cardId, setCardId] = useState(null);

  useEffect(() => {
    CardService.showFirstOne()
      .then((response) => {
        setCardId(response.id);
      })
      .catch((error) => {
        toastError(error);
      });
  }, []);

  useEffect(() => {
    if (cardId) {
      CardService.showOne(cardId)
        .then((response) => {
          setCard(response);
        })
        .catch((error) => {
          toastError(error);
        });
    }
  }, [cardId]);

  const editCard = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  async function register(event) {
    event.preventDefault();
    removeWrongAnswer(arrayIds);
    if (addWrongAnswer(arrayIds)) {
      CardService.edit(card, card.id)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          toastError(error);
        });
    }
  }

  return (
    <>
      <NavBar />
      <Form className="container-content" onSubmit={register}>
        <Form.Select
          value={card.id}
          aria-label="Default select example"
          className="select-card"
          id="form"
          onChange={(e) => setCardId(e.target.value)}
        >
          <SelectCard />
        </Form.Select>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fruit name"
              id="name-value"
              name="name"
              onChange={editCard}
              value={card.name}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Quantity of proteins (1g)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Qty proteins"
              id="qty-proteins"
              name="qtyProteins"
              onChange={editCard}
              value={card.qtyProteins}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Quantity of calories (1g)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Qty calories"
              id="qty-calories"
              name="qtyCalories"
              onChange={editCard}
              value={card.qtyCalories}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Fruit image url</Form.Label>
            <Form.Control
              type="url"
              placeholder="url"
              id="url"
              name="url"
              onChange={editCard}
              value={card.url}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>What is the glycemic index of this fruit? </Form.Label>
            <Form.Control
              type="number"
              placeholder="Glycemic index"
              id="qty-glucose"
              name="qtyGlucose"
              onChange={editCard}
              value={card.qtyGlucose}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Like ranking</Form.Label>
            <Form.Select
              id="ranking"
              name="ranking"
              onChange={editCard}
              value={card.ranking}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button
          variant="primary"
          type="submit"
          className="button-submit button-game"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default EditCard;
