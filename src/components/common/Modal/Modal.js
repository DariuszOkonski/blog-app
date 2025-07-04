import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmModal({ show, onHide, onConfirm, title, message }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Cancel
        </Button>
        <Button variant='danger' onClick={onConfirm}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
