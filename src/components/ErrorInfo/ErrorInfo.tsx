import { BoxProps, HStack, Text, Image, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { i_text_copy_bold } from '../../style';
import { getColorThemeSelector } from '../../utils/funcs';

type ErrorInfoProps = {
    content?: string;
} & BoxProps;
export const ErrorInfo: React.FC<ErrorInfoProps> = (props) => {
    const { content, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const { t } = useTranslation();

    return (
        <HStack
            w="100%"
            h="24px"
            bg="linear-gradient(90deg, #E15959 1.26%, rgba(225, 89, 89, 0) 101.26%)"
            borderRadius="5px"
            pl={{ base: '19px', sm: '25px' }}
            {...rest}
        >
            <Image boxSize="11px" src="/assets/errorInfo/close.svg"></Image>
            <Text className={i_text_copy_bold} lineHeight="14px" letterSpacing="0.02em" color={'#FFFFFF'}>
                {content && t(content)}
            </Text>
        </HStack>
    );
};
