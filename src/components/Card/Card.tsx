import { chakra, Flex, useColorMode } from '@chakra-ui/react';
import { getColorThemeSelector } from '../../utils/funcs';

type Variant = 'base' | 'light' | 'deep' | 'deep2' | 'purpleLinear' | 'grey' | 'navyBlue' | 'none';

// TODO: Add a proper boxShadowValue when in hover state.
const Card = chakra((props) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const { children, variant, ...rest } = props;

    const themeColor = {
        base: {
            bg: colorTheme('white', '#34294A'),
            boxShadow: colorTheme('base', 'undefined'),
        },
        light: {
            bg: colorTheme('white', 'tertiary.700'),
            boxShadow: colorTheme('base', 'undefined'),
        },

        deep: {
            bg: colorTheme('#FFFFFFBF', '#292343'),
            boxShadow: colorTheme('base', 'undefined'),
        },
        deep2: {
            bg: colorTheme('white', '#211834'),
            boxShadow: colorTheme('base', 'undefined'),
        },
        grey: {
            bg: colorTheme('#F5F5F5', 'tertiary.700'),
            boxShadow: colorTheme('undefined', 'undefined'),
        },
        gray: {
            bg: colorTheme('#F8F6FF', '#292343'),
            boxShadow: colorTheme('undefined', 'undefined'),
        },
        purpleLinear: {
            bg: colorTheme(
                'linear-gradient(180deg, #EAEAF9 15.85%, rgba(242, 242, 244, 0.72) 80.99%)',
                'linear-gradient(98.73deg, rgba(69, 54, 100, 0.26) -2.37%, #6C5F88 39.25%, rgba(40, 13, 98, 0.18) 115.14%)'
            ),
            boxShadow: colorTheme('undefined', 'undefined'),
        },
        none: {
            bg: 'undefined',
            boxShadow: 'undefined',
        },
        tabCard: {
            bg: colorTheme('#FFFFFF', '#292343'),
            boxShadow: colorTheme(' 0px 0px 27px rgba(218, 206, 230, 0.25)', '0px 0px 27px rgba(29, 6, 51, 0.25)'),
        },
        lightGary: {
            bg: { base: colorTheme('#F8F8FA', '#211834'), sm: colorTheme('#F8F8FB', '#211834') },
            boxShadow: colorTheme('undefined', 'undefined'),
        },
        tabTopCard: {
            bg: colorTheme('#FFFFFF', '#292343'),
            boxShadow: colorTheme('5px 20px 27px -16px  rgba(218, 206, 230, 0.25)', '5px 20px 27px -16px  rgba(29, 6, 51, 0.25)'),
        },
        navyBlue: {
            bg: colorTheme('#140B43', '#140B43'),
            boxShadow: colorTheme('5px 20px 27px -16px  rgba(218, 206, 230, 0.25)', '5px 20px 27px -16px  rgba(29, 6, 51, 0.25)'),
        },
    };

    return (
        <Flex
            direction="column"
            bg={variant ? themeColor[variant as Variant].bg : themeColor['base'].bg}
            boxShadow={variant ? themeColor[variant as Variant].boxShadow : themeColor['base'].boxShadow}
            borderRadius="6px"
            {...rest}
        >
            {children}
        </Flex>
    );
});

export default Card;
