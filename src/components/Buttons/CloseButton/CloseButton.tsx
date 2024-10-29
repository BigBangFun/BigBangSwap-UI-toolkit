import React from 'react';
import { ImageProps, Image } from '@chakra-ui/react';

type CloseButtonProps = {
    onClose: () => void;
} & ImageProps;

const CloseButton: React.FC<CloseButtonProps> = (props) => {
    const { onClose, ...rest } = props;
    return (
        <Image
            onClick={onClose}
            cursor="pointer"
            w="30px"
            h="30px"
            p="8px"
            src={process.env.PUBLIC_URL + '/assets/trade/lightCloseButton.svg'}
            _hover={{ opacity: '0.7' }}
            {...rest}
        ></Image>
    );
};

export default CloseButton;
