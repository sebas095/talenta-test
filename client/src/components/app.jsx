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
    background-color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
