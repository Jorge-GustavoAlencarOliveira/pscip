import React from 'react'
import { Modal, ModalHeader, Button } from 'react-bootstrap'

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  onHide?: () => void;
  header?: string
  size?: 'sm' | 'lg' | 'xl' 
}

const ModalCenter = ({children, show, onHide, header, size = 'lg'}: ModalProps) => { 
    return (
      <Modal 
      size={size}
      centered
      onHide={onHide}
      show={show}
      scrollable={true}
      >
        <ModalHeader className='text-primary' closeButton>
          <h5>{header}</h5>
        </ModalHeader>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    )
}

export default ModalCenter
