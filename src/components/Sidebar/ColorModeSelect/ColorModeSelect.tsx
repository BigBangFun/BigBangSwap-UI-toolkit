import React from 'react';
import { Flex, useColorMode, BoxProps, Image, ImageProps } from '@chakra-ui/react';
import { useHover } from '../../../hooks/useHover';
import useIsMobile from '../../../hooks/useIsMobile';

const ColorModeSelect: React.FC<{ showNav: boolean; imgProps?: ImageProps; imgRef?: any } & BoxProps> = ({
    showNav,
    imgProps,
    imgRef,
    ...rest
}) => {
    const { colorMode, setColorMode } = useColorMode();
    const mobile = useIsMobile();
    const [ref, isHovering] = useHover<any>();

    return (
        <Flex
            direction="row"
            w={{ base: 'unset', sm: '29px' }}
            h="30px"
            justify="start"
            align="center"
            borderRadius="20px"
            hidden={!showNav && mobile}
            {...rest}
        >
            <Image
                ref={imgRef || ref}
                boxSize={showNav ? '25px' : '30px'}
                src={
                    isHovering
                        ? colorMode === 'light'
                            ? '/assets/header/HoverColorModeSelect.svg'
                            : '/assets/header/HoverdarkMode.svg'
                        : colorMode === 'light'
                        ? '/assets/header/ColorModeSelect.svg'
                        : '/assets/header/darkMode.svg'
                }
                fallbackSrc="/assets/header/ColorModeSelect.svg"
                cursor="pointer"
                onClick={() => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light');
                }}
                {...imgProps}
            ></Image>
        </Flex>
    );
};

export default ColorModeSelect;
