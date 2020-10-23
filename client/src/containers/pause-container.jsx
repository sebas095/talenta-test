import React, { useState, useContext } from 'react';
import Pause from '@components/game/pause';

import { GameContext } from '@context/game';
import { ErrorContext } from '@context/error';

import useCreateGame from '@hooks/useCreateGame';

const PauseContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setError } = useContext(ErrorContext);
  const { game, setGame } = useContext(GameContext);
  const createGame = useCreateGame({
    setError,
    setGame,
    game,
    body: Array(9).fill(null),
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleNewGame = () => {
    setIsOpen(false);
    createGame();
  };

  return (
    <Pause
      isOpen={isOpen}
      toggleModal={toggleModal}
      handleNewGame={handleNewGame}
    />
  );
};

export default PauseContainer;
