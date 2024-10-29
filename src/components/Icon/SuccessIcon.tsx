import { BoxProps } from '@chakra-ui/react';
import React from 'react';

const SuccessIcon: React.FC<React.PropsWithChildren<BoxProps>> = () => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.0014 1.5L17.2845 3.895L21.3489 3.8875L22.597 7.755L25.8895 10.1375L24.6264 14L25.8895 17.8625L22.597 20.245L21.3489 24.1125L17.2845 24.105L14.0014 26.5L10.7183 24.105L6.65391 24.1125L5.40578 20.245L2.11328 17.8625L3.37641 14L2.11328 10.1375L5.40578 7.755L6.65391 3.8875L10.7183 3.895L14.0014 1.5Z"
                stroke="#56D096"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M9.625 14L12.75 17.125L19 10.875" stroke="#56D096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default SuccessIcon;
