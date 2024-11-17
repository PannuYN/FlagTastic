import { keyframes } from '@emotion/react'; // If using Emotion for styling

// Keyframes for the bounce (up-and-down) animation
export const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
`;

// Keyframes for the color animation
export const colorAnimation = keyframes`
  0% {
    color: #ff0000; // Red
  }
  30% {
    color: #ffff00; // Blue
  }
  70% {
    color: #ff00ff; // Magenta
  }
  100% {
    color: #ff0000; // Back to Red
  }
`;

// Keyframes for opacity animation (fade in and out)
export const opacityAnimation = keyframes`
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.5;
  }
`;
