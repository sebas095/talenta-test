import React from 'react';
import styled from 'styled-components';

import Player from '../components/game/player';
import Turn from '../components/game/turn';

const PlayersContainerStyled = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const PlayersContainer = () => (
  <PlayersContainerStyled>
    <Player score={0} player="X" active />
    <Player score={0} player="O" />
    <Turn player="X" text="Turno de " />
  </PlayersContainerStyled>
);

export default PlayersContainer;
