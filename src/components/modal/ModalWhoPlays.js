import Modal from 'react-bootstrap/Modal';

const ModalWhoPlays = ({ isPlayer, numRound, setModalPlayerRound }) => {
    return (
        <Modal show={setModalPlayerRound}
            onHide={setModalPlayerRound}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Round: {numRound}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{isPlayer ? "Your turn" : "Computer turn"}</h4>
            </Modal.Body>
        </Modal>
    )
}

export default ModalWhoPlays;