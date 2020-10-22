import React from 'react';
import styled from 'styled-components';

import PlayersContainer from '@containers/players-container';

const LayoutStyled = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 330px 1fr;
  grid-template-areas: 'started game finished';
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <PlayersContainer />
      <Container>{children}</Container>
    </LayoutStyled>
  );
};

export default Layout;
