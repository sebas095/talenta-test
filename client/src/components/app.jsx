import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { LoadingContextProvider } from '@context/loading';
import { StatsContextProvider } from '@context/stats';
import { GamesContextProvider } from '@context/games';
import { GameContextProvider } from '@context/game';
import { ErrorContextProvider } from '@context/error';

import GamesStartedContainer from '@containers/games-started-container';
import GamesFinishedContainer from '@containers/games-finished-container';

import Layout from './layout/layout';
import Board from './board/board';

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
  <LoadingContextProvider>
    <ErrorContextProvider>
      <GamesContextProvider>
        <GameContextProvider>
          <StatsContextProvider>
            <GlobalStyle />
            <Layout>
              <GamesStartedContainer />
              <Board />
              <GamesFinishedContainer />
            </Layout>
          </StatsContextProvider>
        </GameContextProvider>
      </GamesContextProvider>
    </ErrorContextProvider>
  </LoadingContextProvider>
);

export default App;
