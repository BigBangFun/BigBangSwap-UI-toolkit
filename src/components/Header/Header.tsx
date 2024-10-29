import { Flex, BoxProps, useBreakpointValue } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

type HeaderProps = {
    leftElement?: ReactElement;
    centerElement?: ReactElement;
    rightElement?: ReactElement;
} & BoxProps;
const Header: React.FC<HeaderProps> = (props) => {
    const { leftElement, centerElement, rightElement, ...rest } = props;
    const isPC = useBreakpointValue({ base: false, xl: true });
    return (
        <>
            <Flex w="100%" h="80px" alignItems="center" zIndex="3" position={'sticky'} top="0px" {...rest}>
                <Flex w={{ base: 'unset', sm: '20%' }}>{leftElement}</Flex>
                {isPC && centerElement}
                <Flex w={{ base: 'unset', xl: '20%' }} alignItems="center" ml="auto">
                    {rightElement}
                </Flex>
            </Flex>
        </>
    );
};

export default Header;
