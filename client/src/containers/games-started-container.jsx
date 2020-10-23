import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import GameList from '@components/game/game-list';

import ApiService from '@services/api.service';

import { GameContext } from '@context/game';
import { GamesContext } from '@context/games';
import { ErrorContext } from '@context/error';
import { LoadingContext } from '@context/loading';

const GamesStartedContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: started;
`;

const GamesStartedContainer = () => {
  const { game, setGame } = useContext(GameContext);
  const { games, setGames } = useContext(GamesContext);
  const { setError } = useContext(ErrorContext);
  const { loading } = useContext(LoadingContext);

  const showGame = id => {
    setGame({ ...game, gameId: id });
  };

  const fetchGame = async () => {
    const data = await ApiService.getGame(game.gameId);
    if (data.message) {
      setError(data.message);
    } else {
      setGame({ ...game, data });
    }
  };

  const fetchGames = async () => {
    const data = await ApiService.listGames();
    if (data.message) {
      setError(data.message);
    } else if (data.started[0]._id === game.gameId) {
      setGames({ ...data, started: data.started.slice(1) });
    } else {
      setGames(data);
    }
  };

  useEffect(() => {
    fetchGame();
    fetchGames();
  }, [game.gameId, game.winner]);

  return (
    <GamesStartedContainerStyled>
      <GameList
        games={games.started}
        title="Iniciados"
        height="400px"
        scrollOrientation="rtl"
        showGame={showGame}
        loading={loading}
        message="No hay juegos pendientes..."
      />
    </GamesStartedContainerStyled>
  );
};

export default GamesStartedContainer;
