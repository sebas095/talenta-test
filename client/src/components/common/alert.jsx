import React, { useState } from 'react';
import styled from 'styled-components';

const AlertStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 125px;
  width: 520px;
  height: 95px;
  border-radius: 15px;
  background-color: #f8d7da;
  color: #a35f66;
  padding: 1rem;

  button {
    background: none;
    outline: none;
    border: none;
    position: absolute;
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    right: 15px;
    top: 10px;
    cursor: pointer;
    color: inherit;

    &:hover {
      color: #000;
    }
  }
`;

const Alert = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(false);
  };

  if (show) {
    return (
      <AlertStyled>
        <button type="button" onClick={handleShow}>
          X
        </button>
        <p>{message}</p>
      </AlertStyled>
    );
  }

  return <></>;
};

export default Alert;