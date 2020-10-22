import React from 'react';
import styled from 'styled-components';

import Button from '../common/button';

const RestartStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Restart = () => {
  return (
    <RestartStyled>
      <Button>Nueva Partida</Button>
    </RestartStyled>
  );
};

export default Restart;
