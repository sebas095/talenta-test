import React from 'react';
import styled from 'styled-components';

import GameList from '../components/game/game-list';

const GamesFinishedContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  grid-area: finished;
`;

const games = {
  finished: {
    wons: [
      {
        _id: 'ljhljl',
        winner: 'X',
      },
      {
        _id: 'asdd',
        winner: 'O',
      },
      {
        _id: 'rtyrt',
        winner: 'X',
      },
    ],
    tied: [
      {
        _id: 'pifaf',
        winner: 'D',
      },
      {
        _id: 'avser9',
        winner: 'D',
      },
      {
        _id: '78ah',
        winner: 'D',
      },
    ],
  },
};

const GamesFinishedContainer = () => (
  <GamesFinishedContainerStyled>
    <GameList games={games.finished.wons} title="Ganados" />
    <GameList games={games.finished.tied} title="Empatados" />
  </GamesFinishedContainerStyled>
);

export default GamesFinishedContainer;
