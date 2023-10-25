import Modal from 'react-bootstrap/Modal';

const ModalChooseAtribute = ({ openModalChooseAtribute, closeModalChooseAtribute }) => {
    return (
        <Modal
            show={openModalChooseAtribute}
            onHide={closeModalChooseAtribute}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className='modal'
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Choose an attribute to dispute
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <button
                    onClick={closeModalChooseAtribute}
                    value={"proteins"}>
                    Qty proteins
                </button>

                <button
                    onClick={closeModalChooseAtribute}
                    value={"calories"}>
                    Qty calories
                </button>

                <button
                    onClick={closeModalChooseAtribute}
                    value={"glycemic"}>
                    Glycemic index
                </button>

                <button
                    onClick={closeModalChooseAtribute}
                    value={"ranking"}>
                    Ranking
                </button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalChooseAtribute;