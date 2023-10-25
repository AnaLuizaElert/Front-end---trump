import Modal from 'react-bootstrap/Modal';
import confetti from "https://esm.run/canvas-confetti@1";

const ModalWinner = ({ roundWinner, gameOver, setModalWinner }) => {

    function returnText() {
        if (roundWinner === "player") {
            confetti({
                particleCount: 150,
                spread: 60
            });
            if (gameOver) {
                return "You won the Game! Congratulations"
            } else {
                return "You won this round! Congratulations"
            }
        } else {
            if (gameOver) {
                return "You lost the Game! :("
            } else {
                return "You lost this round! :("
            }
        }
    }

    return (
        <Modal show={setModalWinner}
            onHide={setModalWinner}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <h4 className='text-winner'>{returnText()}</h4>
            </Modal.Body>
        </Modal>
    )
}

export default ModalWinner;