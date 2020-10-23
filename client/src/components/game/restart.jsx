import React from 'react';
import styled from 'styled-components';

import Button from '@components/common/button';

const RestartStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.4rem;

  .restart__space {
    width: 100px;
    height: 50px;
  }
`;

const Restart = ({ handleClick, hasWinner }) => {
  return (
    <RestartStyled>
      {hasWinner ? (
        <Button onClick={handleClick}>Nueva Partida</Button>
      ) : (
        <div className="restart__space" />
      )}
    </RestartStyled>
  );
};

export default Restart;
