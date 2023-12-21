import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalAlert = ({ show, handleClose, bodyContent}) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oops 😅</Modal.Title>
        </Modal.Header>
        <Modal.Body>{bodyContent}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalAlert;
