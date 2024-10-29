import { Flex, Menu, MenuButton, MenuList, MenuItem, Divider, useColorMode } from '@chakra-ui/react';
import { useHover } from '../../../hooks/useHover';
import { useState } from 'react';
import { links } from '../../../config/links';
import { i_text_d } from '../../../style';
import { getColorThemeSelector } from '../../../utils/funcs';
interface Props {
    Icon: React.FC<{
        isHovering: boolean;
    }>;
}
export const TelegramList: React.FC<Props> = ({ Icon }) => {
    const [ref, isHovering] = useHover<HTMLDivElement>();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const [isOpenList, setOpenList] = useState(false);
    return (
        <Flex
            onClick={() => {
                setOpenList(true);
            }}
            onMouseOver={() => {
                setOpenList(true);
            }}
            onMouseLeave={() => {
                setOpenList(false);
            }}
            ref={ref}
        >
            <Flex mt="-10px" pt="12px">
                <Icon isHovering={isHovering} />
            </Flex>
            <Flex zIndex="1">
                <Menu isOpen={isOpenList}>
                    <MenuButton></MenuButton>
                    <MenuList
                        minW="0px"
                        w="130px"
                        className={i_text_d}
                        bg={colorTheme('#FBFBFB', '#100C1E')}
                        position="absolute"
                        bottom="40px"
                        left="-20px"
                        fontSize="13px"
                    >
                        <MenuItem
                            justifyContent="center"
                            onClick={() => {
                                window.open(links.telegramChannel);
                            }}
                        >
                            Channel
                        </MenuItem>
                        <Divider></Divider>
                        <MenuItem
                            justifyContent="center"
                            onClick={() => {
                                window.open(links.telegramCN);
                            }}
                        >
                            中文
                        </MenuItem>
                        <MenuItem
                            justifyContent="center"
                            onClick={() => {
                                window.open(links.telegramEN);
                            }}
                        >
                            English
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
};
