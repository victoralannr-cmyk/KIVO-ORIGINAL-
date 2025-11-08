'use client';

import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

interface LottiePlayerProps {
    src: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ src }) => {
    return (
        <DotLottiePlayer
            src={src}
            autoplay
            loop
        />
    );
};

export default LottiePlayer;
