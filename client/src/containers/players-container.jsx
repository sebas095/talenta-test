import React from 'react';
import styled from 'styled-components';

import Player from '@components/game/player';
import Turn from '@components/game/turn';
import Alert from '@components/common/alert';

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

const PlayersContainer = () => (
  <PlayersContainerStyled>
    <ContainerStyled>
      <Player score={0} player="X" active />
      <PauseContainer />
      <Player score={0} player="O" />
    </ContainerStyled>
    <Turn player="X" text="Comenzar partida o seleccionar jugador " />
    <Alert message="El recurso no existe o no tienes privilegios para acceder. ID invalido" />
  </PlayersContainerStyled>
);

export default PlayersContainer;
