import { BoxProps, Flex, Text, HStack, useColorMode, Box } from '@chakra-ui/react';
import Card from '../../components/Card/Card';
import { i_text_copy_bold } from '../../style';
import CloseButton from '../../components/Buttons/CloseButton/CloseButton';
import { getColorThemeSelector } from '../../utils/funcs';

type ModalProps = {
    isOpen: boolean | any;
    onClose: any;
    title: string | any;
    children: any;
    modalBg?: any;
    titleProps?: BoxProps;
    contentProps?: BoxProps;
    isShowClose?: boolean;
} & BoxProps;

export const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen, onClose, title, children, modalBg, titleProps, contentProps, isShowClose = true, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const bgColor = modalBg ?? colorTheme('#ffffff', '#211834');
    return isOpen ? (
        <>
            <Flex
                w="200%"
                h="200%"
                top="-200px"
                left="-200px"
                bg="black"
                opacity={colorTheme(0.15, 0.4)}
                position="fixed"
                zIndex={8}
                onClick={() => {
                    onClose();
                }}
            ></Flex>

            <Card
                variant="deep2"
                borderRadius="2px"
                zIndex={9}
                position="fixed"
                top="50%"
                left="50%"
                maxH="95%"
                overflowY="scroll"
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none !important',
                    },
                }}
                transform="translateX(-50%) translateY(-50%)"
                pb={{ base: '35px', sm: '43px' }}
                {...rest}
            >
                <HStack
                    justifyContent="space-between"
                    top="0px"
                    pos="sticky"
                    bgColor={bgColor}
                    zIndex="3"
                    pt={{ base: '35px', sm: '40px' }}
                    pb={{ base: '11px', sm: '20px' }}
                    px={{ base: '22px', lg: '50px' }}
                    mb={{ base: '0px', sm: '20px' }}
                    {...titleProps}
                >
                    {typeof title === 'string' ? (
                        <Text className={i_text_copy_bold} fontSize="18px !important">
                            {title}
                        </Text>
                    ) : (
                        title
                    )}
                    {isShowClose && <CloseButton onClose={onClose} />}
                </HStack>
                <Box px={{ base: '22px', lg: '50px' }} {...contentProps}>
                    {children}
                </Box>
            </Card>
        </>
    ) : (
        <></>
    );
};
