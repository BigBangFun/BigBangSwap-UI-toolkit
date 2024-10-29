import { Center, useToast, ToastId, useColorMode, Text, HStack, Stack, Divider } from '@chakra-ui/react';
import Card from '../Card/Card';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import { getColorThemeSelector } from '../../utils/funcs';
import { i_text_copy, i_text_copy_bold } from '../../style';
import useIsMobile from '../../hooks/useIsMobile';
import InfoIcon from '../Icon/InfoIcon';
import SuccessIcon from '../Icon/SuccessIcon';
import WarningIcon from '../Icon/WarningIcon';
import ErrorIcon from '../Icon/ErrorIcon';
import ExtralLinkIcon from '../Icon/ExtralLinkIcon';

export enum ToastType {
    info = 'info',
    success = 'success',
    warning = 'warning',
    error = 'error',
}
export type ToastLink = {
    title: string;
    link: string;
};

export const useCustomToast = () => {
    const toast = useToast();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const isMobile = useIsMobile();

    const theme = {
        info: {
            img: <InfoIcon />,
        },
        success: {
            img: <SuccessIcon />,
        },
        warning: {
            img: <WarningIcon />,
        },
        error: {
            img: <ErrorIcon />,
        },
    };

    return (toatType: string, title: any, content?: any, toastLink?: ToastLink) => {
        let type = toatType;
        if (typeof title === 'string') {
            if (title.includes('Transaction was not mined')) {
                type = ToastType.info;
            }
        }
        const a = toast({
            position: 'bottom-right',
            duration: 10000,
            render: function render() {
                return (
                    <Card
                        variant="base"
                        borderRadius="4px"
                        w={isMobile ? '350px' : '400px'}
                        minH="50px"
                        position="relative"
                        bg={colorTheme('#fff', '#1E2631')}
                    >
                        <Center w="100%" h="100%" pl="18px" py="14px">
                            {type ? (
                                <HStack w="100%" borderRadius="6px">
                                    {theme[type as ToastType].img}
                                    <Divider h="66px" orientation="vertical" ml="12px !important" mr="8px !important"></Divider>
                                    <Stack maxW={isMobile ? '225px' : '275px'}>
                                        <Text className={i_text_copy_bold} color={colorTheme('#3D3062', '#FFFFFF')} noOfLines={5}>
                                            {title}
                                        </Text>
                                        {content && (
                                            <Text className={i_text_copy} color={colorTheme('#A7A1AC', '#7E7B86')} noOfLines={5}>
                                                {content}
                                            </Text>
                                        )}
                                        {toastLink && (
                                            <HStack
                                                maxW={isMobile ? '225px' : '275px'}
                                                cursor="pointer"
                                                onClick={() => {
                                                    window.open(toastLink.link);
                                                }}
                                            >
                                                <Text className={i_text_copy} color="#4F95FF">
                                                    {toastLink.title}
                                                    <Text h="10px" as="span" display="inline-block" ml="8px">
                                                        <ExtralLinkIcon></ExtralLinkIcon>
                                                    </Text>
                                                </Text>
                                            </HStack>
                                        )}
                                    </Stack>
                                </HStack>
                            ) : (
                                content
                            )}
                            <CloseButton
                                pos="absolute"
                                right="18px"
                                top="18px"
                                onClose={() => {
                                    toast.close(a as ToastId);
                                }}
                            />
                        </Center>
                    </Card>
                );
            },
        });
    };
};
