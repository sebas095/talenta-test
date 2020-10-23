import React from 'react';
import styled from 'styled-components';

import Restart from '@components/game/restart';
import Square from './square';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
`;

const BoardStyled = styled.div`
  width: 100%;
  grid-area: game;
  display: grid;
  grid-template-columns: repeat(3, 110px);
  justify-content: center;
  align-content: center;
  margin: 30px 0;
`;

const Board = ({
  handleClick,
  handleRestartClick,
  board,
  hasWinner,
  isWinner,
}) => {
  const createBoard = () => {
    const boardGame = [];
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        const index = row * 3 + col;
        boardGame.push(
          <Square
            key={index}
            player={board[index]}
            handleClick={() => handleClick(index)}
            active={isWinner.includes(index)}
          />,
        );
      }
    }

    return boardGame;
  };

  return (
    <Container>
      <BoardStyled>{createBoard()}</BoardStyled>
      <Restart handleClick={handleRestartClick} hasWinner={hasWinner} />
    </Container>
  );
};

export default Board;
