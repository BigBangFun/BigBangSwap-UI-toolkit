import React from 'react';
import { BoxProps, HStack, Image } from '@chakra-ui/react';
import CustomButton from '../CustomButton/CustomButton';

type Props = {
    expand?: boolean;
    link: string;
} & BoxProps;

const IZiLinkButton: React.FC<Props> = (props) => {
    const { expand, link, ...rest } = props;

    return (
        <CustomButton
            variant="primary"
            w="34px"
            h="34px"
            borderRadius="3px"
            text={
                <HStack w="100%" mx="auto">
                    <Image w="19px" h="19px" src={process.env.PUBLIC_URL + '/assets/tokens/iZiWhite.svg'} ml={expand ? '12px' : '8px'} />
                </HStack>
            }
            onClick={() => {
                window.open(link);
            }}
            {...rest}
        ></CustomButton>
    );
};

export default IZiLinkButton;
