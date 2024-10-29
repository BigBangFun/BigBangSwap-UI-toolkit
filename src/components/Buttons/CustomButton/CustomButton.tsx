import { BoxProps, useColorMode, Image, Flex } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { i_h5 } from '../../../style';
import { getColorThemeSelector } from '../../../utils/funcs';

export type ButtonProps = {
    text?: string | JSX.Element;
    variant?:
        | 'primary'
        | 'outline'
        | 'purple'
        | 'tertiary'
        | 'primary2'
        | 'primary3'
        | 'orange'
        | 'outlinePurple'
        | 'inlinePurple'
        | 'lightPurple'
        | 'dark'
        | 'navyBlue'
        | 'outlineGreen'
        | 'lightGray'
        | 'mobileWhite'
        | 'none';
    theme?: 'light' | 'dark';
    radiusType?: 'sm' | 'md' | 'lg';
    heightType?: 'sm' | 'md' | 'lg';
    widthType?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    fontClass?: any;
    selected?: boolean;
    leftIcon?: string;
    leftIconElement?: ReactElement;
    rightIcon?: ReactElement;
} & BoxProps;

const CustomButton: React.FC<ButtonProps> = (props) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const { text, disabled, variant, selected, fontClass = i_h5, leftIcon, leftIconElement, rightIcon, ...rest } = props;

    const themeColor = {
        outline: {
            base: colorTheme('#0166FF', '#EBE6F0'),
            hover: colorTheme('#D3E5FF', 'tertiary.600'),
        },
        outlinePurple: {
            base: colorTheme('tertiary.200', 'tertiary.'),
            hover: colorTheme('secondary.600', 'secondary.300'),
        },
        inlinePurple: {},
        tertiary: {
            base: colorTheme('secondary.50', 'tertiary.600'),
            font: colorTheme('#8C7AA3', 'tertiary.100'),
            hover: colorTheme('secondary.200', 'tertiary.300'),
        },
        primary2: {
            base: colorTheme('#EBF1F8', '#42578D'),
            font: colorTheme('#687692', 'primary.50'),
            hover: colorTheme('primary.300', 'primary.200'),
        },
        primary3: {
            base: colorTheme('#EBF1F8', '#52466A'),
            font: colorTheme('#687692', 'primary.50'),
            hover: colorTheme('primary.300', 'tertiary.500'),
        },
        orange: {
            base: colorTheme('#F8EBEB', '#9D6666'),
            font: colorTheme('#92686B', '#FFFFFF'),
            hover: colorTheme('#FFCDCD', '#A68787'),
        },
        none: {
            focus: colorTheme('tertiary.700', 'tertiary.200'),
        },
        disable: {
            base: colorTheme('#E0DEE7', '#3B2F50'),
            font: colorTheme('#F9F9F9', '#6E6878'),
        },
        lightPurple: {
            base: colorTheme('#EEEAFE', '#7F4AFE'),
            font: colorTheme('secondary.600', 'tertiary.100'),
        },
        dark: {
            base: colorTheme('#140233', '#140233'),
            font: colorTheme('tertiary.50', 'tertiary.50'),
            hover: colorTheme('tertiary.500', 'tertiary.300'),
        },
        lightGray: {
            base: colorTheme('#F9F9FB', '#3A2F53'),
            font: colorTheme('tertiary.700', 'tertiary.300'),
        },
        mobileWhite: {
            base: colorTheme('#F7F7F7', '#3E305B'),
            font: colorTheme('#ACA4B7', '#B795E2'),
        },
    };

    const customStyle = () => {
        switch (variant) {
            case 'primary':
                return {
                    border: 'none',
                    borderRadius: '3px',
                    background: '#0166FF',
                    color: 'secondary.50',
                    height: '60px',
                    width: '180px',
                    _hover: {
                        background: '#739FE3',
                    },
                    _focus: {
                        background: '#124899',
                    },
                };
            case 'outline':
                return {
                    borderWidth: '3px',
                    borderRadius: '3px',
                    borderStyle: 'solid',
                    borderColor: themeColor.outline.base,
                    backgroundColor: 'transparent',
                    color: themeColor.outline.base,
                    height: '60px',
                    width: '180px',
                    _hover: {
                        background: themeColor.outline.hover,
                    },
                    _focus: {
                        border: '3px solid #0166FF',
                    },
                };
            case 'outlinePurple':
                return {
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: selected ? themeColor.outlinePurple.hover : themeColor.outlinePurple.base,
                    backgroundColor: 'transparent',
                    color: themeColor.outline.base,
                    borderRadius: '6px',
                    height: '60px',
                    width: '180px',
                    _hover: {
                        borderColor: themeColor.outlinePurple.hover,
                    },
                    _focus: {
                        borderColor: themeColor.outlinePurple.hover,
                    },
                };

            case 'inlinePurple':
                return {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: selected ? '#ffffff' : '#E5DDE7',
                    backgroundColor: selected ? 'secondary.50' : 'transparent',
                    color: themeColor.outline.base,
                    borderRadius: '6px',
                    height: '60px',
                    width: '180px',
                };

            case 'purple':
                return {
                    borderRadius: '3px',
                    background: '#7F4AFE',
                    color: '#ffffff',
                    height: '70px',
                    width: '300px',
                    _hover: {
                        background: '#A884FF',
                    },
                    _focus: {
                        background: '#4D19CB',
                    },
                };
            case 'tertiary': //approve like
                return {
                    borderStyle: 'solid',
                    borderRadius: '3px',
                    textAlign: 'center' as unknown as any,
                    backgroundColor: themeColor.tertiary.base,
                    color: themeColor.tertiary.font,
                    _hover: {
                        background: themeColor.tertiary.hover,
                    },
                };

            case 'primary2': //harvest like
                return {
                    borderStyle: 'solid',
                    borderRadius: '3px',
                    textAlign: 'center' as unknown as any,
                    backgroundColor: themeColor.primary2.base,
                    color: themeColor.primary2.font,
                    _hover: {
                        background: themeColor.primary2.hover,
                    },
                    _focus: {
                        undefined,
                    },
                };
            case 'primary3': {
                return {
                    borderStyle: 'solid',
                    borderRadius: '3px',
                    textAlign: 'center' as unknown as any,
                    backgroundColor: themeColor.primary3.base,
                    color: themeColor.primary3.font,
                    _hover: {
                        background: themeColor.primary3.hover,
                    },
                    _focus: {
                        undefined,
                    },
                };
            }
            case 'orange': // withdraw like
                return {
                    borderStyle: 'solid',
                    borderRadius: '3px',
                    textAlign: 'center' as unknown as any,
                    backgroundColor: themeColor.orange.base,
                    color: themeColor.orange.font,
                    _hover: {
                        background: themeColor.orange.hover,
                    },
                    _focus: {
                        undefined,
                    },
                };
            case 'lightPurple':
                return {
                    border: 'none',
                    borderRadius: '3px',
                    background: themeColor.lightPurple.base,
                    color: themeColor.lightPurple.font,
                    _hover: {
                        background: '#739FE3',
                    },
                };
            case 'dark':
                return {
                    borderStyle: 'solid',
                    borderRadius: '3px',
                    textAlign: 'center' as unknown as any,
                    backgroundColor: themeColor.dark.base,
                    color: themeColor.dark.font,
                    _hover: {
                        background: themeColor.dark.hover,
                    },
                    _focus: {
                        undefined,
                    },
                };
            case 'navyBlue':
                return {
                    borderRadius: '3px',
                    background: 'rgba(64, 54, 167, 0.77);',
                    color: '#ffffff',
                    height: '70px',
                    width: '300px',
                    _hover: {
                        background: 'tertiary.500',
                    },
                    _focus: {
                        background: 'tertiary.500',
                    },
                };
            case 'outlineGreen':
                return {
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: selected ? 'customGreen' : themeColor.outlinePurple.base,
                    backgroundColor: 'transparent',
                    color: themeColor.outline.base,
                    borderRadius: '6px',
                    height: '60px',
                    width: '180px',
                    _hover: {
                        borderColor: 'customGreen',
                    },
                    _focus: {
                        borderColor: 'customGreen',
                    },
                };
            case 'lightGray':
                return {
                    border: colorTheme('#C3AAFF 1px solid', '#6A5E86 1px solid'),
                    borderRadius: '6px',
                    background: themeColor.lightGray.base,
                    color: themeColor.lightGray.font,
                    _hover: {
                        background: colorTheme('#EEEAFE', '#140E28'),
                    },
                };

            case 'mobileWhite':
                return {
                    borderRadius: '3px',
                    background: themeColor.mobileWhite.base,
                    color: themeColor.mobileWhite.font,
                };
            case 'none':
                return {
                    color: selected ? themeColor.none.focus : colorTheme('tertiary.300', 'tertiary.500'),
                };

            default:
                return {};
        }
    };
    return (
        <Flex
            as="button"
            transition="all 0.3s ease"
            borderRadius="2px"
            className={fontClass}
            position="relative"
            {...customStyle()}
            disabled={disabled}
            _disabled={{
                opacity: 0.3,
                cursor: 'not-allowed',
            }}
            alignItems="center"
            justifyContent="center"
            {...rest}
        >
            {leftIcon && <Image src={leftIcon} mr="6px"></Image>}
            {leftIconElement && leftIconElement}
            {text}
            {rightIcon && rightIcon}
        </Flex>
    );
};

export default CustomButton;
