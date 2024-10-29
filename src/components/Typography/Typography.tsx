import { Box, chakra, BoxProps } from '@chakra-ui/react';
import React, { PropsWithChildren, useMemo } from 'react';

export type HeadingProps = PropsWithChildren<{
    level: '1' | '2' | '3' | '4' | '5' | '6';
}> &
    BoxProps;

export const Heading = chakra(
    ({ level, children, ...chakraProps }: HeadingProps) =>
        React.createElement(`h${level}`, chakraProps, children)
);

export type TextProps = PropsWithChildren<{
    variant: 'display' | 'caption-slim' | 'caption' | 'caption-bold';
}>;

export const Text = chakra(({ variant, ...chakraProps }: TextProps) => {
    const style = useMemo(() => {
        switch (variant) {
            case 'display':
                return {
                    fontFamily: 'Montserrat-Medium',
                    fontSize: '16px',
                    lineHeight: '24px',
                };
            case 'caption-slim':
                return {
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    lineHeight: '15px',
                    fontWeight: '500',
                };
            case 'caption':
                return {
                    fontFamily: 'Montserrat-Medium',
                    fontSize: '12px',
                    lineHeight: '15px',
                };
            case 'caption-bold':
                return {
                    fontFamily: 'Montserrat-Bold',
                    fontSize: '12px',
                    lineHeight: '15px',
                };
        }
    }, [variant]);
    return (
        <Box
            as="span"
            fontSize={style.fontSize}
            fontFamily={style.fontFamily}
            lineHeight={style.lineHeight}
            {...chakraProps}
        />
    );
});
