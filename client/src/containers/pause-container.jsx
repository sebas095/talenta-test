import React, { useState, useContext } from 'react';
import Pause from '@components/game/pause';

import { GameContext } from '@context/game';

const PauseContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setGame } = useContext(GameContext);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleNewGame = () => {
    setIsOpen(false);
    localStorage.removeItem('gameId');
    setGame({ board: Array(9).fill(null), winner: '' });
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
