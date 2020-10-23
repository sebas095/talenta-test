import React, { useContext } from 'react';
import styled from 'styled-components';

import GameList from '@components/game/game-list';

import { GameContext } from '@context/game';
import { GamesContext } from '@context/games';
import { LoadingContext } from '@context/loading';

const GamesFinishedContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  grid-area: finished;
`;

const GamesFinishedContainer = () => {
  const { game, setGame } = useContext(GameContext);
  const { games } = useContext(GamesContext);
  const { loading } = useContext(LoadingContext);

  const showGame = id => {
    setGame({ ...game, gameId: id });
  };

  return (
    <GamesFinishedContainerStyled>
      <GameList
        games={games.finished.wons}
        title="Ganados"
        showGame={showGame}
        loading={loading}
        message="No hay victorias registradas..."
      />
      <GameList
        games={games.finished.tied}
        title="Empatados"
        showGame={showGame}
        loading={loading}
        message="No hay empates registrados..."
      />
    </GamesFinishedContainerStyled>
  );
};

export default GamesFinishedContainer;
