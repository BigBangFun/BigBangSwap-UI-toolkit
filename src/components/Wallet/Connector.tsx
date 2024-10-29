import { Center, VStack, Button, useColorMode } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { getColorThemeSelector } from '../../utils/funcs';
import { Text } from '../Typography/Typography';

export type ConnectorProps = {
    name: string;
    icon: ReactElement;
    handleClick: any;
};

const Connector: React.FC<ConnectorProps> = (props) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    return (
        <VStack
            as={Button}
            variant="outline"
            colorScheme="secondary"
            w="229px"
            h="113px"
            py="18px"
            borderWidth="1px"
            borderColor={colorTheme('secondary.100', 'tertiary.600')}
            borderRadius="6px"
            alignItems="center"
            cursor="pointer"
            onClick={props.handleClick}
        >
            <Center flexGrow={1} w="100%">
                {props.icon}
            </Center>
            <Text variant="caption-bold" flexShrink={0} color={colorTheme('tertiary.900', 'tertiary.50')}>
                {props.name}
            </Text>
        </VStack>
    );
};

export default Connector;
