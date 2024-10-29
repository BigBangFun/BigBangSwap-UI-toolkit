import { VStack, Image, useColorMode } from '@chakra-ui/react';
import Card from '../Card/Card';
import { Heading, Text } from '../Typography/Typography';
import CustomButton from '../Buttons/CustomButton/CustomButton';
import { getColorThemeSelector } from '../../utils/funcs';
import placeholder from '../../assets/placeholder.png';
import { i_text_d } from '../../style';

const NotConnected: React.FC<{ onConnect: () => void }> = (props) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    return (
        <VStack as={Card} p="20px 16px" w="266px" bg={colorTheme('undefined', '#34294A')}>
            <Image
                src={process.env.PUBLIC_URL + colorTheme('/assets/wallet/not-connected.png', '/assets/wallet/notConnectedDark.png')}
                fallbackSrc={placeholder}
                w="118px"
                h="141px"
                mb="25px!important"
            />
            <Heading level="4" color={colorTheme('tertiary.700', 'tertiary.50')} mb="16px!important">
                Not Connected.
            </Heading>
            <Text variant="caption" color="tertiary.400" mb="36px!important">
                Connect to wallet to get started !
            </Text>
            <CustomButton
                variant="purple"
                onClick={props.onConnect}
                text="Connect Wallet"
                className={i_text_d}
                w="220px"
                h="50px"
            ></CustomButton>
        </VStack>
    );
};

export default NotConnected;
