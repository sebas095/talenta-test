import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import ApiService from '@services/api.service';

import Player from '@components/game/player';
import Turn from '@components/game/turn';
import Alert from '@components/common/alert';

import { ErrorContext } from '@context/error';
import { GameContext } from '@context/game';
import { GamesContext } from '@context/games';
import { StatsContext } from '@context/stats';

import PauseContainer from './pause-container';

const PlayersContainerStyled = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayersContainer = () => {
  const { error, setError } = useContext(ErrorContext);
  const { stats, setStats } = useContext(StatsContext);
  const { game } = useContext(GameContext);
  const { games } = useContext(GamesContext);

  const fetchStats = async () => {
    const data = await ApiService.getStats();
    if (data.message) {
      setError(data.message);
    } else {
      setStats(data);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [games]);

  return (
    <PlayersContainerStyled>
      <ContainerStyled>
        <Player score={stats.playerOne} player="X" turn={game?.turn || 'X'} />
        <PauseContainer />
        <Player score={stats.playerTwo} player="O" turn={game?.turn || 'X'} />
      </ContainerStyled>
      {game?.winner ? (
        <Turn
          player={game.winner}
          winner={game.winner}
          text={game.winner === 'D' ? 'Empate' : 'Ganador '}
        />
      ) : (
        <Turn player={game?.turn || 'X'} text="Turno de " />
      )}
      <Alert message={error} />
    </PlayersContainerStyled>
  );
};

export default PlayersContainer;
