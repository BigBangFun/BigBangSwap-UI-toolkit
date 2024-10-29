import React from 'react';
import { Icon, Image } from '@chakra-ui/react';
import { ButtonProps } from '../CustomButton/CustomButton';
import CustomButton from '../CustomButton/CustomButton';
import { i_text_copy } from '../../../style';
import { useHistory } from 'react-router';
import placeholder from '../../../assets/placeholder.png';

type JumpButtonProps = {
    text?: string;
    target: string;
    param?: any;
    type?: string;
    icon?: any;
    imageUrl?: string;
} & ButtonProps;

const JumpButton: React.FC<JumpButtonProps> = (props) => {
    const history = useHistory();
    const { text, target, param, type, icon, imageUrl, ...rest } = props;

    return (
        <>
            {!type && (
                <CustomButton
                    variant="purple"
                    text={text}
                    w="204px"
                    h="50px"
                    fontClass={i_text_copy}
                    onClick={() => {
                        history.push({
                            pathname: target,
                            state: {
                                ...param,
                            },
                        });
                    }}
                    {...rest}
                />
            )}

            {type === 'icon' && (
                <CustomButton
                    variant="tertiary"
                    w="34px"
                    h="34px"
                    mr="10px"
                    text={<Icon as={icon} boxSize="20px" />}
                    borderRadius="3px"
                    fontSize="14px"
                    onClick={() => {
                        history.push({
                            pathname: target,
                            state: {
                                ...param,
                            },
                        });
                    }}
                    p="7px"
                    {...rest}
                ></CustomButton>
            )}

            {type === 'image' && (
                <Image
                    src={imageUrl}
                    fallbackSrc={placeholder}
                    cursor="pointer"
                    onClick={() => {
                        history.push({
                            pathname: target,
                            state: {
                                ...param,
                            },
                        });
                    }}
                    {...(rest as any)}
                />
            )}
        </>
    );
};

export default JumpButton;
