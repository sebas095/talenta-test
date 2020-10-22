import React from 'react';
import styled from 'styled-components';

import GameList from '../components/game/game-list';

const GamesStartedContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: started;
`;

const games = {
  started: [
    {
      _id: 'ljhljl',
      turn: 'X',
    },
    {
      _id: 'asdd',
      turn: 'O',
    },
    {
      _id: 'rtyrt',
      turn: 'X',
    },
    {
      _id: 'rtyh',
      turn: 'X',
    },
    {
      _id: 'poks',
      turn: 'O',
    },
    {
      _id: 'lklkb7',
      turn: 'X',
    },
  ],
};

const GamesStartedContainer = () => (
  <GamesStartedContainerStyled>
    <GameList
      games={games.started}
      title="Iniciados"
      height="400px"
      scrollOrientation="rtl"
    />
  </GamesStartedContainerStyled>
);

export default GamesStartedContainer;
