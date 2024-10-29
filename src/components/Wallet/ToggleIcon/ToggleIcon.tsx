import { Box, Flex, Image, BoxProps, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { getColorThemeSelector } from '../../../utils/funcs';

export type Props = {
    setShowNav: Function | undefined;
    showNav?: boolean;
    onClick: () => void;
} & BoxProps;

const ToggleIcon: React.FC<Props> = (props) => {
    const { setShowNav, showNav, onClick, ...rest } = props;
    const { t } = useTranslation();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    const backgroundColor = colorTheme('#FFFFFF', '#3B365B');
    const lineColor = colorTheme('#2D264B', '#F2ECFF');
    const arrowImg = colorTheme(
        process.env.PUBLIC_URL + '/assets/sidebar/lightArrow.svg',
        process.env.PUBLIC_URL + '/assets/sidebar/darkArrow.svg'
    );

    return (
        <Flex
            boxShadow="0px 0px 6px rgba(167, 153, 185, 0.25)"
            borderRadius="6px 0px 0px 6px"
            direction="row"
            align="center"
            justifyContent="center"
            background={backgroundColor}
            alignItems="center"
            pos="relative"
            width="24px"
            height="54px"
            _hover={{
                boxShadow: '0px 2px 12px 0px rgba(164, 165, 180, 0.3), 0px 2px 9px 0px rgba(219, 219, 219, 0.32)',
            }}
            position="absolute"
            {...rest}
            onClick={() => {
                onClick();
                // setShowNav && setShowNav(!wallet.showNav);
            }}
        >
            <Image
                src={arrowImg}
                transform={showNav ? 'rotate(180deg)' : 'rotate(0deg)'}
                transitionDuration="0.5s"
                marginRight="2px"
                marginLeft="4px"
            />

            <Flex w="15px" direction="row">
                {[12, 12].map((item, index) => (
                    <Box
                        key={index}
                        borderRadius="20%"
                        _notFirst={{
                            marginLeft: '2px',
                        }}
                        display="inline-block"
                        h={item + 'px'}
                        w="2px"
                        backgroundColor={lineColor}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default ToggleIcon;
