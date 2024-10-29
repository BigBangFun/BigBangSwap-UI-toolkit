import React from 'react';
import { BoxProps, Box } from '@chakra-ui/react';

type Props = {
    onClick: () => void;
    Identicon: any;
    iconSize?: number;
} & BoxProps;

const WalletButton: React.FC<Props> = (props) => {
    const { onClick, Identicon, iconSize, ...rest } = props;

    return (
        <Box onClick={() => onClick()} boxSize="32px" {...rest}>
            <Identicon size={iconSize ?? 32} />
        </Box>
    );
};

export default WalletButton;
