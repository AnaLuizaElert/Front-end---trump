//style
import "./modal.css";
import "../../utils/ButtonGame.css";
import Modal from "react-bootstrap/Modal";

const ModalChooseAtribute = ({ setModalChooseAtribute, chooseAtribute }) => {
  return (
    <Modal
      show={setModalChooseAtribute}
      onHide={setModalChooseAtribute}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      contentClassName="modal"
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose an attribute to dispute
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <button
          className="choose-attribute button-game"
          onClick={() => chooseAtribute("qtyProteins")}
        >
          Qty proteins
        </button>

        <button
          className="choose-attribute button-game"
          onClick={() => chooseAtribute("qtyCalories")}
        >
          Qty calories
        </button>

        <button
          className="choose-attribute button-game"
          onClick={() => chooseAtribute("qtyGlucose")}
        >
          Glycemic index
        </button>

        <button
          className="choose-attribute button-game"
          onClick={() => chooseAtribute("ranking")}
        >
          Ranking
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalChooseAtribute;
