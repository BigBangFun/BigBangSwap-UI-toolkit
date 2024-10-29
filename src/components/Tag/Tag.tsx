import { Box, BoxProps, useColorMode, Image, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { i_text_copy } from '../../style';
import { getColorThemeSelector } from '../../utils/funcs';

type props = {
    variant: 'blue' | 'purple' | 'green' | 'yellow' | 'grey';
    text: string;
    icon?: any;
} & BoxProps;

export const CustomTag: React.FC<props> = (props) => {
    const { variant, text, icon, ...rest } = props;
    const { t } = useTranslation();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    const theme = {
        blue: {
            color: colorTheme('primary.600', 'primary.50'),
            bg: colorTheme('primary.100', '#3D4375'),
        },
        purple: {
            color: colorTheme('secondary.600', 'secondary.50'),
            bg: colorTheme('secondary.100', 'secondary.700'),
        },
        green: {
            color: colorTheme('#138842', 'primary.50'),
            bg: colorTheme('#DEF5E6', '#20442C'),
        },
        yellow: {
            color: colorTheme('#885406', 'primary.50'),
            bg: colorTheme('#FEFFE0', '#3C3D39'),
        },
        grey: {
            color: colorTheme('primary.500', 'primary.50'),
            bg: colorTheme('primary.100', '#2252CC'),
        },
    };

    return (
        <Box
            py="4px"
            px="32px"
            h="24px"
            borderRadius="3px"
            bg={theme[variant].bg}
            fontSize="12px"
            lineHeight="15px"
            fontWeight="600"
            fontFamily="Montserrat"
            {...rest}
        >
            <HStack>
                {icon && <Image src={process.env.PUBLIC_URL + icon} h="12px" />}
                <Text
                    className={i_text_copy}
                    color={theme[variant].color}
                    isTruncated={true}
                    fontFamily={{ base: 'Montserrat', sm: 'Montserrat-Medium' }}
                >
                    {t(text)}
                </Text>
            </HStack>
        </Box>
    );
};
