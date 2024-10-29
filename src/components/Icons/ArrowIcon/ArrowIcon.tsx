import React from 'react';
import { Icon } from '@chakra-ui/react';

interface Props {
    dir: 'up' | 'right' | 'down' | 'left';
    color?: string;
}

const ArrowIcon: React.FC<Props> = ({ dir, color = '#666' }) => {
    const transform = (() => {
        let deg = 0;
        switch (dir) {
            case 'down':
                break;
            case 'right':
                deg = 90;
                break;
            case 'up':
                deg = 180;
                break;
            case 'left':
                deg = 270;
                break;
        }
        return `rotate(${deg} 6 3.34) translate(0 -0.16)`;
    })();
    return (
        <Icon viewBox="0 0 12 6.68" height="16px" width="10px">
            <path
                style={{
                    fill: color,
                }}
                transform={transform}
                d="M11.8,5.67a.68.68,0,1,1-1,1L6,1.68l-4.83,5a.69.69,0,0,1-1,0l0,0a.67.67,0,0,1,0-.94L5.42.43A.76.76,0,0,1,6,.16a.7.7,0,0,1,.6.29Z"
            />
        </Icon>
    );
};

export default ArrowIcon;
