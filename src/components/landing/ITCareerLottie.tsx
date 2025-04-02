
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface ITCareerLottieProps {
  animationPath: string;
  width?: number;
  height?: number;
}

const ITCareerLottie = ({ animationPath, width = 150, height = 150 }: ITCareerLottieProps) => {
  return (
    <Player
      autoplay
      loop
      src={animationPath}
      style={{ width, height }}
    />
  );
};

export default ITCareerLottie;
