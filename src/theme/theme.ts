import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    breakpoints: createBreakpoints({
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '64em', // 1024px
        lg2: '73.75em', // 1180px
        xl: '80em', // 1280px
        xxl: '90.01em', // 1440px
        xlp1: '100em', // 1600px
        '2xl': '120em', // 1920px
    }),
    config,
    shadows: {
        base: '0px 0px 27px 5px rgba(218, 206, 230, 0.25)',
    },
    colors: {
        lightMode: {
            blue: {
                0: '#000099',
                1: '#021B9D',
                2: '#0079FF',
                3: '#E3EBF6',
            },
            purple: {
                0: '#2635b1',
                1: '#AEBBFF',
                2: '#C6CFFC',
                3: '#788af0',
            },
            gray: {
                0: '#525252',
                1: '#494949',
            },
            primary: {},
        },
        primary: {
            50: '#EDF4FF',
            100: '#D6E6FF',
            200: '#AECEFF',
            300: '#84B5FF',
            400: '#5F9EFF',
            500: '#0166FF',
            600: '#003BD3',
            700: '#002DA1',
            800: '#000957',
            900: '#0A0026',
        },
        secondary: {
            50: '#EEEAFE',
            100: '#E1D4FC',
            200: '#C3AAF8',
            300: '#A880FF',
            400: '#8B62FF',
            500: '#7F4AFE',
            600: '#6A20B3',
            700: '#581577',
            800: '#3B0B3C',
            900: '#150418',
        },
        tertiary: {
            50: '#F5F5F5',
            100: '#EBEAEC',
            200: '#DDDAE1',
            300: '#B7B1BE',
            400: '#8F84A0',
            500: '#6A5E86',
            600: '#52466A',
            700: '#3A2F53',
            800: '#281B44',
            900: '#1F0C4E',
        },
        linerPurple: {
            50: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)',
            100: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)',
            200: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)',
            300: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)',
            400: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)',
            500: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)',
            600: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)',
            700: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)',
            800: 'linear-gradient(98.73deg, #6E49CA -2.37%, #8664CE 89.44%)', // you need this
        },
        customGreen: '#00DD5E',
    },
    fonts: {
        primary: 'Lato',
    },
    styles: {
        global: (props: any) => ({
            'html, body': {
                color: mode('#0F0740', '#ffffff')(props),
                bg: mode('#ffffff', '#282828')(props),
                overflow: 'hidden',
            },
            '.copyright-text': {
                fontSize: '9px',
                fill: mode('#666', '#fff')(props),
                fontFamily: 'Lato',
                fontWeight: '500',
            },
            h1: {
                fontFamily: 'Montserrat-Bold',
                fontSize: '40px',
                lineHeight: '42px',
            },
            h2: {
                fontFamily: 'Montserrat-Bold',
                fontSize: '32px',
                lineHeight: '35px',
            },
            h3: {
                fontFamily: 'Montserrat-Bold',
                fontSize: '24',
                lineHeight: '25px',
            },
            h4: {
                fontFamily: 'Montserrat-Bold',
                fontSize: '18px',
                lineHeight: '22px',
            },
            h5: {
                fontFamily: 'Montserrat-SemiBold',
                fontSize: '14px',
                lineHeight: '17px',
            },
            h6: {
                fontFamily: 'Montserrat',
                fontSize: '12px',
                lineHeight: '15px',
            },
        }),
    },
});

export default theme;
