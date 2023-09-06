import React from 'react'
import { Modal, ModalHeader, Button } from 'react-bootstrap'

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  onHide: () => void;
  header?: string

}

const ModalCenter = ({children, show, onHide, header}: ModalProps) => { 
    return (
      <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      show={show}
      scrollable={true}
      >
        <ModalHeader closeButton>
          {header}
        </ModalHeader>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    )
}

export default ModalCenter
