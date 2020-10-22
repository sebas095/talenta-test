import React from 'react';
import styled from 'styled-components';

import colors from '@styles/colors';

const SquareStyled = styled.div`
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ color }) => color || '#000'};
  position: relative;
  cursor: pointer;

  &:nth-child(3n - 1) {
    border-right: 6px solid ${colors.secondary};
    border-left: 6px solid ${colors.secondary};
  }

  &:nth-child(n + 4) {
    border-top: 6px solid ${colors.secondary};
  }
`;

const Board = ({ player }) => (
  <SquareStyled color={player === 'X' ? 'black' : colors.mainColor}>
    {player}
  </SquareStyled>
);

export default Board;
