import React, { useState } from 'react';
import Pause from '@components/game/pause';

const PauseContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return <Pause isOpen={isOpen} toggleModal={toggleModal} />;
};

export default PauseContainer;
