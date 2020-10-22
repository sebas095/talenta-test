import { keyframes } from 'styled-components';

const scaleAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform:scale(1);
  }
`;

export default scaleAnimation;
