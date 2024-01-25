import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'react-bootstrap';
import ContextProjeto, { useContextProjeto } from '../../projeto/Context/contextProjeto';

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  onHide?: () => void;
  header?: string;
  size?: 'sm' | 'lg' | 'xl';
  fullscreen?: string | true;
}

const ModalCenter = ({
  children,
  show,
  onHide,
  header,
  size = 'lg',
  fullscreen,
}: ModalProps) => { 
  return (
    <Modal
      size={size}
      centered
      onHide={onHide}
      show={show}
      scrollable={true}
      fullscreen={fullscreen}
    
    >
      <ModalHeader className="text-primary" closeButton>
        <h5>{header}</h5>
      </ModalHeader>
      <ModalBody >{children}</ModalBody>
    </Modal>
  );
};

export default ModalCenter;
