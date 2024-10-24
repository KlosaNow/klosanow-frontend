import { keyframes } from "@emotion/react";

const containerAnimationKeyframes = keyframes`
  0% { width: 0;}
  100% { width: 100%;}
`;

const contentAnimationKeyframes = keyframes`
  0% { opcaity: 0;}
  90% { opcaity: 0;}
  100% { opcaity: 1;}
`;

export const containerAnimation = `${containerAnimationKeyframes} 0.5s linear`;

export const contentAnimation = `${contentAnimationKeyframes} 0.5s linear`;
