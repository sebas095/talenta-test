import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Board from './board/board';
import Layout from './layout/layout';
import GamesStartedContainer from '../containers/games-started-container';
import GamesFinishedContainer from '../containers/games-finished-container';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: repeating-linear-gradient(90deg, whitesmoke 0, whitesmoke 5%, transparent 0, transparent 50%) 0 / 15px 15px, repeating-linear-gradient(180deg, whitesmoke 0, whitesmoke 5%, transparent 0, transparent 50%) 0 / 15px 15px;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Layout>
      <GamesStartedContainer />
      <Board />
      <GamesFinishedContainer />
    </Layout>
  </>
);

export default App;
