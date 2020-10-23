/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import colors from '@styles/colors';

import Loader from '@components/common/loader';
import GameItem from './game-item';

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

const GameListContainerStyled = styled.div`
  overflow-y: auto;
  width: 100%;
  height: ${({ height }) => height || '170px'};
  direction: ${({ scrollOrientation }) => scrollOrientation || 'ltr'};

  div {
    direction: ltr;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #000;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.mainColor};
    border-radius: 5px;

    &:active,
    &:hover {
      background-color: ${colors.secondary};
    }
  }
`;

const GameList = ({
  games,
  title,
  height,
  scrollOrientation,
  showGame,
  loading,
  message,
}) => {
  const render = () => {
    if (games.legth > 0) {
      return (
        <GameListContainerStyled
          height={height}
          scrollOrientation={scrollOrientation}
        >
          {games.map((game, index) => (
            <GameItem
              key={game._id}
              id={game._id}
              playNumber={index + 1}
              {...game}
              turn={game.winner || game.turn}
              showGame={showGame}
            />
          ))}
        </GameListContainerStyled>
      );
    }

    return <div className="fallback">{message}</div>;
  };

  return (
    <GameListStyled>
      <h1>{title}</h1>
      {loading ? <Loader /> : render()}
    </GameListStyled>
  );
};

export default GameList;
