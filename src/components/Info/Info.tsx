import { InfoOutlineIcon } from '@chakra-ui/icons';
import { BoxProps, chakra, ChakraProps, Flex, HStack, Stack, StackDirection, Tooltip } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Heading } from '../Typography/Typography';

export type InfoProps = {
    label: string | ReactElement;
    value: string | ReactElement;
    tooltip?: string;
    tooltipIcon?: ReactElement;
    direction?: StackDirection;
    labelColor?: string;
    labelIcon?: any;
    spacing?: string;
    labelStyle?: BoxProps;
    valueStyle?: BoxProps;
};

const Info = chakra(
    ({
        label,
        value,
        tooltip,
        tooltipIcon,
        direction,
        labelColor,
        labelIcon,
        spacing,
        labelStyle,
        valueStyle,
        ...chakraProps
    }: InfoProps & ChakraProps) => {
        const isColumn = direction === 'column' || direction === undefined;
        return (
            <Stack
                flexShrink={0}
                alignItems={isColumn ? 'start' : 'center'}
                spacing={isColumn ? '4px' : '14px'}
                direction={direction ?? 'column'}
                {...chakraProps}
            >
                <Flex
                    h={isColumn ? '17px' : undefined}
                    alignItems="center"
                    justifyContent="start"
                    color={labelColor ? labelColor : undefined}
                    {...labelStyle}
                >
                    {typeof label === 'string' ? (
                        <Heading level="6" whiteSpace="nowrap">
                            {label}
                        </Heading>
                    ) : (
                        label
                    )}
                    {labelIcon}
                </Flex>
                <HStack h={{ base: '17px', sm: '24px' }} spacing={spacing ?? '10px'}>
                    {typeof value === 'string' ? (
                        <Heading level="5" whiteSpace="nowrap" {...valueStyle}>
                            {value}
                        </Heading>
                    ) : (
                        value
                    )}
                    {tooltip && <Tooltip label={tooltip}>{tooltipIcon ?? <InfoOutlineIcon />}</Tooltip>}
                </HStack>
            </Stack>
        );
    }
);

Info.displayName = 'Info';

export default Info;
