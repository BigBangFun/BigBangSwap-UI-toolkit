import { Tag, BoxProps, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { getColorThemeSelector } from '../../utils/funcs';

type props = {
    variant: 'blue' | 'purple' | 'orange' | 'grey' | 'green';
    text: string;
    icon?: any;
} & BoxProps;

export const CardTag: React.FC<props> = (props) => {
    const { variant, text, icon, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    const theme = {
        blue: {
            color: colorTheme('primary.500', 'primary.50'),
            bg: colorTheme('primary.100', '#2252CC'),
        },
        purple: {
            color: colorTheme('secondary.500', 'secondary.50'),
            bg: colorTheme('secondary.100', 'secondary.400'),
        },
        orange: {
            color: colorTheme('primary.500', 'primary.50'),
            bg: colorTheme('primary.100', '#2252CC'),
        },
        grey: {
            color: colorTheme('primary.500', 'primary.50'),
            bg: colorTheme('primary.100', '#2252CC'),
        },
        green: {
            color: colorTheme('#EAFFF9', '#EDF4FF'),
            bg: colorTheme('#5CC4A4', '#4FAD6A'),
        },
    };

    return (
        <Tag
            px={{ base: '20px', sm: '32px' }}
            // position="absolute"
            // top="0"
            // left="32px"
            // transform="translateY(-50%)"
            color={theme[variant].color}
            bg={theme[variant].bg}
            borderColor="#5F9EFF"
            border={colorTheme('1px', '0')}
            fontSize="12px"
            lineHeight="15px"
            fontWeight="600"
            fontFamily="Montserrat"
            {...rest}
        >
            {text}
        </Tag>
    );
};
