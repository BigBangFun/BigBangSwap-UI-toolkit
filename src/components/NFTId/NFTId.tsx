import React from 'react';
import { Text, useColorMode, BoxProps, HStack, StackDirection, Icon } from '@chakra-ui/react';
import { i_text_copy_bold } from '../../style';
import { getColorThemeSelector } from '../../utils/funcs';
import { AiOutlineLink } from 'react-icons/ai';
import Info from '../Info/Info';
import useIsMobile from '../../hooks/useIsMobile';

type NFTIdProps = {
    id: string | number | null;
    link: string | null;
    direction?: StackDirection;
    name?: string;
} & BoxProps;

export const NFTId: React.FC<NFTIdProps> = ({ id, link, direction, name, ...rest }) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const isMobile = useIsMobile();

    return (
        <Info
            direction={direction || 'column'}
            label={name ?? 'NFTId'}
            labelStyle={isMobile ? { fontFamily: 'Montserrat-SemiBold' } : {}}
            value={
                <HStack spacing="6px">
                    <Icon
                        as={AiOutlineLink}
                        boxSize="16px"
                        color={colorTheme('#0166FF', 'tertiary.300')}
                        onClick={
                            link
                                ? () => {
                                      window.open(link);
                                  }
                                : () => {}
                        }
                    />
                    <Text className={i_text_copy_bold}>{id}</Text>
                </HStack>
            }
            w="80px"
            labelColor={isMobile ? colorTheme('#0166FF', '#4891FF') : colorTheme('#0166FF', 'tertiary.300')}
            {...rest}
        />
    );
};
