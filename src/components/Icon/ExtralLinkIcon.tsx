import { BoxProps } from '@chakra-ui/react';
import React from 'react';

const ExtralLinkIcon: React.FC<React.PropsWithChildren<BoxProps>> = () => {
    return (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.44853 1.81159H2.46735C1.65696 1.81159 1 2.43499 1 3.20398V8.94095C1 9.70994 1.65696 10.3333 2.46735 10.3333H8.0253C8.8357 10.3333 9.49266 9.70994 9.49266 8.94095V5.86957M9.49266 1.81159L5.04412 6.27536M7.47059 1H8.83413C9.64452 1 10.3015 1.62339 10.3015 2.39239V3.84058"
                stroke="#4F95FF"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ExtralLinkIcon;
