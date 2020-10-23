import React, { useContext, useEffect } from 'react';
import Board from '@components/board/board';

import { GameContext } from '@context/game';
import { ErrorContext } from '@context/error';

import useCreateGame from '@hooks/useCreateGame';
import useUpdateGame from '@hooks/useUpdateGame';

import {
  calculateWinner,
  calculateWinnerIndex,
  isDraw,
} from '@utils/calculate';
import { GameStatus } from '@utils/constants';

const BoardContainer = () => {
  const { game, setGame } = useContext(GameContext);
  const { setError } = useContext(ErrorContext);

  const createGame = useCreateGame({
    setError,
    setGame,
    game,
  });

  const updateGame = useUpdateGame({
    game,
    setError,
  });

  useEffect(() => {
    if (!localStorage.getItem('gameId')) {
      createGame();
    }
    updateGame();
  }, [game.board]);

  const handleClick = index => {
    const board = [...game.board];
    let turn = game?.turn ? game.turn : 'X';
    let winner = '';
    let status = GameStatus.STARTED;
    board[index] = turn;

    if (game.winner) return;
    if (isDraw(board)) {
      turn = '';
      winner = 'D';
      status = GameStatus.GAME_OVER;
    } else if (calculateWinner(board)) {
      turn = '';
      winner = calculateWinner(board);
      status = GameStatus.GAME_OVER;
    } else {
      turn = turn === 'X' ? 'O' : 'X';
    }

    setGame({ ...game, board, turn, winner, status });
  };

  const handleRestartClick = () => {
    localStorage.removeItem('gameId');
    setGame({ board: Array(9).fill(null), winner: '' });
  };

  return (
    <Board
      handleClick={handleClick}
      board={game.board}
      hasWinner={!!game.winner}
      isWinner={calculateWinnerIndex(game.board)}
      handleRestartClick={handleRestartClick}
    />
  );
};

export default BoardContainer;
