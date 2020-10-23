import React from 'react';
import styled from 'styled-components';

import colors from '@styles/colors';

import Button from '@components/common/button';
import Turn from './turn';

const GameItemStyled = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  background-color: ${({ active }) => (active ? colors.secondary : 'white')};
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
`;

const GameItem = ({ playNumber, turn, id, winner, showGame, currentGame }) => {
  const getInfo = () => {
    if (winner) {
      if (winner === 'D') return <></>;
      return <Turn player={turn} text="Ganador: " />;
    }
    return (
      <Turn
        player={
          currentGame.turn && !currentGame.winner && currentGame._id === id
            ? currentGame.turn
            : turn
        }
        text="Turno de "
      />
    );
  };

  return (
    <GameItemStyled active={currentGame?._id && currentGame._id === id}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p>Juego N° {playNumber}</p>
      {getInfo()}
      <Button
        width={`${winner ? '80px' : '130px'}`}
        onClick={() => showGame(id)}
      >
        {winner ? 'Ver' : 'Reanudar'}
      </Button>
    </GameItemStyled>
  );
};

export default GameItem;
