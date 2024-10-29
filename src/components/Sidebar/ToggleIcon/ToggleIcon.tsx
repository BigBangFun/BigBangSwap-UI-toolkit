import { Box, Flex, Image, BoxProps, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { getColorThemeSelector } from '../../../utils/funcs';

export type Props = {
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
    showNav?: boolean;
} & BoxProps;

const ToggleIcon: React.FC<Props> = (props) => {
    const { setShowNav, showNav, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    const backgroundColor = colorTheme('#FFFFFF', '#3B365B');
    const lineColor = colorTheme('#2D264B', '#F2ECFF');
    const arrowImg = colorTheme(
        process.env.PUBLIC_URL + '/assets/sidebar/lightArrow.svg',
        process.env.PUBLIC_URL + '/assets/sidebar/darkArrow.svg'
    );

    return (
        <Flex
            borderRadius="50%"
            direction="row"
            align="center"
            justifyContent="center"
            background={backgroundColor}
            alignItems="center"
            pos="relative"
            width="42px"
            height="42px"
            _hover={{
                boxShadow:
                    '0px 2px 12px 0px rgba(164, 165, 180, 0.3), 0px 2px 9px 0px rgba(219, 219, 219, 0.32)',
            }}
            position="absolute"
            {...rest}
            onClick={() => {
                setShowNav((prev) => !prev);
            }}
        >
            <Flex w="15px" direction="column">
                {[14, 10, 14].map((item, index) => (
                    <Box
                        key={index}
                        borderRadius="20%"
                        _notFirst={{
                            marginTop: '6px',
                        }}
                        display="inline-block"
                        w={item + 'px'}
                        h="2px"
                        backgroundColor={lineColor}
                    />
                ))}
            </Flex>
            <Image
                src={arrowImg}
                transform={showNav ? 'rotate(0deg)' : 'rotate(180deg)'}
                transitionDuration="0.2s"
                // width="10px"
                // height="10px"
            />
        </Flex>
    );
};

export default ToggleIcon;
