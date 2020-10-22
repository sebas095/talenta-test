import React from 'react';
import styled from 'styled-components';

import Square from './square';
import Restart from '../game/restart';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

const BoardStyled = styled.div`
  width: 100%;
  grid-area: game;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: center;
  margin: 30px 0;
`;

const Board = () => {
  const createBoard = () => {
    const board = [];
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        const index = row * 3 + col;
        board.push(<Square key={index} player={index % 2 === 0 ? 'X' : 'O'} />);
      }
    }

    return board;
  };

  return (
    <Container>
      <BoardStyled>{createBoard()}</BoardStyled>
      <Restart />
    </Container>
  );
};

export default Board;
