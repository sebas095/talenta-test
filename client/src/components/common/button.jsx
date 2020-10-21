import styled from 'styled-components';
import colors from '../../styles/colors';

const Button = styled.button`
  width: 180px;
  cursor: pointer;
  background: none;
  background-color: ${colors.mainColor};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 2px solid transparent;
  transition: color 0.3s, background-color 0.3s, border 0.3s;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    border: 2px solid;
    background-color: transparent;
    color: ${colors.mainColor};
  }
`;

export default Button;
