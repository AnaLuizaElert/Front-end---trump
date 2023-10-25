import "./modal.css"
import Modal from 'react-bootstrap/Modal';

const ModalChooseAtribute = ({ setModalChooseAtribute, chooseAtribute }) => {
    return (
        <Modal
            show={setModalChooseAtribute}
            onHide={setModalChooseAtribute}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            contentClassName="modal"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Choose an attribute to dispute
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <button
                    className="choose-attribute"
                    onClick={() => chooseAtribute("qtyProteins")}>
                    Qty proteins
                </button>

                <button
                    className="choose-attribute"
                    onClick={() => chooseAtribute("qtyCalories")}>
                    Qty calories
                </button>

                <button
                    className="choose-attribute"
                    onClick={() => chooseAtribute("qtyGlucose")}>
                    Glycemic index
                </button>

                <button
                    className="choose-attribute"
                    onClick={() => chooseAtribute("ranking")}>
                    Ranking
                </button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalChooseAtribute;