/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import GameItem from './game-item';

import colors from '../../styles/colors';

const GameListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    text-transform: uppercase;
    color: ${colors.secondary};
  }
`;

const GameListContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  height: ${({ height }) => height || '170px'};
`;

const GameList = ({ games, title, height }) => (
  <GameListStyled>
    <h1>{title}</h1>
    <GameListContainer height={height}>
      {games.map((game, index) => (
        <GameItem
          key={game._id}
          playNumber={index + 1}
          {...game}
          turn={game.winner || game.turn}
        />
      ))}
    </GameListContainer>
  </GameListStyled>
);

export default GameList;
