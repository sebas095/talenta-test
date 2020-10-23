import React from 'react';
import styled from 'styled-components';

import Button from '@components/common/button';
import Modal from '@components/common/modal';

import colors from '@styles/colors';

const PauseStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.4rem;
`;

const ContentStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors.secondary};
  }

  .modal__close {
    background: none;
    outline: none;
    border: none;
    position: absolute;
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    right: 15px;
    top: 10px;
    cursor: pointer;
    color: #000;

    &:hover {
      color: ${colors.secondary};
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Pause = ({ isOpen, toggleModal, handleNewGame }) => (
  <PauseStyled>
    <Button width="100px" onClick={toggleModal}>
      Pausar
    </Button>
    <Modal isOpen={isOpen}>
      <ContentStyled>
        <button type="button" className="modal__close" onClick={toggleModal}>
          X
        </button>
        <p>Pausa</p>
        <ButtonsContainer>
          <Button onClick={toggleModal}>Reanudar</Button>
          <Button invertColor onClick={handleNewGame}>
            Nueva Partida
          </Button>
        </ButtonsContainer>
      </ContentStyled>
    </Modal>
  </PauseStyled>
);

export default Pause;
