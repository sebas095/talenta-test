import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { scaleAnimation } from '@styles/keyFrames';

const modalRoot = document.getElementById('modal');

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${scaleAnimation} 0.7s ease;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  width: 500px;
  height: 250px;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: whitesmoke;
`;

const Modal = ({ isOpen, children }) => {
  // element to which the modal will be rendered
  const element = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(element);

    // cleanup
    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);

  return (
    isOpen &&
    createPortal(
      <ModalStyled>
        <ModalContent>{children}</ModalContent>
      </ModalStyled>,
      element,
    )
  );
};

export default Modal;
