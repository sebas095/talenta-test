import React from 'react';
import styled from 'styled-components';

import { spinAnimation } from '@styles/keyFrames';
import colors from '@styles/colors';

const LoaderStyled = styled.div`
  display: grid;
  place-items: center;
`;

const LoaderContentStyled = styled.div`
  border: 8px solid ${colors.secondary};
  border-radius: 50%;
  border-top: 8px solid white;
  width: 80px;
  height: 80px;
  animation: ${spinAnimation} 2s linear infinite;
`;

const Loader = () => (
  <LoaderStyled>
    <LoaderContentStyled />
  </LoaderStyled>
);

export default Loader;
