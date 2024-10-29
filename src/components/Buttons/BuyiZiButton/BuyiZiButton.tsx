import React from 'react';
import { BoxProps, ChakraProps, HStack, Image, Text } from '@chakra-ui/react';
import CustomButton from '../CustomButton/CustomButton';
import { i_text_copy_bold } from '../../../style';
import useIsMobile from '../../../hooks/useIsMobile';

type BuyiZiButtonProps = {
    expand: boolean;
    tokenPrice: string;
    onClick: any;
    imageProps?: ChakraProps;
    textProps?: ChakraProps;
} & BoxProps;

const BuyiZiButton: React.FC<BuyiZiButtonProps> = (props) => {
    const { expand, tokenPrice, onClick, imageProps, textProps, ...rest } = props;
    const mobile = useIsMobile();

    //console.info('tokenPrice   ', tokenPrice);
    return (
        <CustomButton
            hidden={!expand && mobile}
            variant="primary"
            w={expand ? (mobile ? '70px' : '88px') : '30px'}
            h={mobile ? '26px' : '30px'}
            borderRadius="15px"
            text={
                <HStack w="100%" mx="auto" justifyContent="center">
                    <Image
                        w={mobile ? '14px' : '19px'}
                        h={mobile ? '14px' : '19px'}
                        src={process.env.PUBLIC_URL + '/assets/tokens/iZiWhite.svg'}
                        {...imageProps}
                    />
                    {expand &&
                        (tokenPrice === 'undefined' ? (
                            <Image
                                w={mobile ? '14px' : '19px'}
                                h={mobile ? '14px' : '19px'}
                                src={'/assets/sidebar/whiteLoading.gif'}
                                fallbackSrc="/assets/sidebar/whiteLoading.gif"
                            ></Image>
                        ) : (
                            <Text
                                className={i_text_copy_bold}
                                color="tertiary.50"
                                mx={mobile ? '3px !important' : '6px !important'}
                                {...textProps}
                            >
                                ${/* --.-- */}
                                {tokenPrice}
                            </Text>
                        ))}
                </HStack>
            }
            onClick={() => {
                onClick();
            }}
            {...rest}
        />
    );
};

export default BuyiZiButton;
