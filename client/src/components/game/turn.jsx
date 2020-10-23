import React from 'react';
import styled from 'styled-components';

import colors from '@styles/colors';
import { fadeAnimation } from '@styles/keyFrames';

const TurnStyled = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding-top: 1rem;
  animation: ${fadeAnimation} 0.7s ease;

  span {
    font-weight: bold;
    color: ${colors.mainColor};
  }
`;

const Turn = ({ player, text, winner }) => {
  return (
    <TurnStyled>
      {text}
      {(!winner || winner !== 'D') && <span>{player}</span>}
    </TurnStyled>
  );
};

export default Turn;
