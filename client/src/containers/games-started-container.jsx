import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import GameList from '@components/game/game-list';

import { GameContext } from '@context/game';
import { GamesContext } from '@context/games';
import { ErrorContext } from '@context/error';
import { LoadingContext } from '@context/loading';

import useGetGame from '@hooks/useGetGame';
import useListGames from '@hooks/useListGames';

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
  const { loading, setLoading } = useContext(LoadingContext);

  const fetchGame = useGetGame({ game, setGame, setError });
  const fetchGames = useListGames({ setLoading, setError, setGames });

  const showGame = id => {
    setGame({ ...game, _id: id });
    localStorage.setItem('gameId', id);
  };

  useEffect(() => {
    if (localStorage.getItem('gameId')) {
      fetchGame();
    }
    fetchGames();
  }, [game.winner, localStorage.getItem('gameId')]);

  return (
    <GamesStartedContainerStyled>
      <GameList
        games={games.started}
        currentGame={game}
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
