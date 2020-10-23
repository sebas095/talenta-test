import React from 'react';
import styled from 'styled-components';
import colors from '@styles/colors';

const PlayerStyled = styled.div`
  width: 350px;
  padding: 0.5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 20px;
  border-bottom: ${({ active }) =>
    active ? `solid 5px ${colors.mainColor}` : 'none'};

  .players__score {
    color: ${colors.secondary};
  }
`;

const Player = ({ score, player, turn, winner }) => {
  return (
    <PlayerStyled active={player === turn && !winner}>
      <div className="players__player">{player}</div>
      <div className="players__score">{score > 0 ? score : '-'}</div>
    </PlayerStyled>
  );
};

export default Player;
