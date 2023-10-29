//style
import "./DeleteCard.css";
import "../../utils/ButtonGame.css";
import { Button, Form } from "react-bootstrap";

//react
import React, { useEffect, useState } from "react";

//components
import NavBar from "../../components/nav-bar/Nav";
import SelectCard from "../../components/select-card/SelectCard";

//service
import { CardService } from "../../service/CardService";

function DeleteCard() {
  const [cardId, setCardId] = useState("");

  function remove() {
    const isSwitchSelected = document.getElementById("custom-switch").checked;

    if (isSwitchSelected) {
      CardService.remove(cardId)
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          alert("Erro");
        });
    } else {
      alert("Switch não selecionado.");
    }
  }

  useEffect(() => {
    CardService.showFirstOne()
      .then((response) => {
        setCardId(response.id);
      })
      .catch(() => {
        alert("Erro");
      });
  }, []);

  return (
    <>
      <NavBar />
      <Form className="container-content">
        <Form.Select
          value={cardId}
          aria-label="Default select example"
          className="select-card"
          onChange={(e) => setCardId(e.target.value)}
        >
          <SelectCard />
        </Form.Select>
        <Form.Check
          className="confirm-delete-card"
          type="switch"
          id="custom-switch"
          label="Are you sure to delete this card?"
        />
        <Button
          variant="primary"
          type="submit"
          className="button-submit button-game"
          onClick={remove}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default DeleteCard;
