import React from 'react';
import { Text, useColorMode, BoxProps, Flex } from '@chakra-ui/react';
import { i_text_d } from '../../style';
import { getColorThemeSelector } from '../../utils/funcs';

type Props = {
    text?: string
} & BoxProps;

export const Loading: React.FC<Props> = ({ text, ...rest }) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    return (
        <Flex direction="column" alignItems="center" justifyContent="center" pt="40px" {...rest}>
            <img width="20px" height="20px" src="/assets/gallery/loading.gif" />
            <Text className={i_text_d} color={colorTheme('tertiary.600', 'tertiary.400')} mt="16px" ml="12px">
                {text?  text: 'Loading ...'}
            </Text>
        </Flex>
    );
};
