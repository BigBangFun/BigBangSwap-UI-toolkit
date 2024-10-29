import React from 'react';
import { BoxProps, HStack, Image, useColorMode, Text } from '@chakra-ui/react';
import { getColorThemeSelector } from '../../utils/funcs';
import { i_text_copy_bold } from '../../style';
import Card from '../Card/Card';

type GasBarProps = {
    gasPrice: number;
} & BoxProps;

const GasBar: React.FC<GasBarProps> = (props) => {
    const { gasPrice, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    return (
        <Card w="66px" h="27px" px="16px" py="4px" {...rest}>
            <HStack spacing="4px">
                <Image
                    w="14px"
                    h="16px"
                    src={process.env.PUBLIC_URL + colorTheme('/assets/wallet/lightGas.svg', '/assets/wallet/darkGas.svg')}
                />
                <Text color={colorTheme('#2FC562', '#9FFB7F')} className={i_text_copy_bold}>
                    {(Number(gasPrice) / 1e9).toFixed(0)}
                </Text>
            </HStack>
        </Card>
    );
};

export default GasBar;
