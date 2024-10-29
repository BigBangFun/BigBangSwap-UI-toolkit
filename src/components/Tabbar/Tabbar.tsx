import { Flex, Menu, MenuButton, Text, useColorMode, VStack, Image, useOutsideClick, MenuList, MenuItem } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { i_text_copy, i_text_d } from '../../style';
import { getColorThemeSelector } from '../../utils/funcs';

export type TabBarProps = {
    config: any;
};

export const TabBar: React.FC<TabBarProps> = (pros) => {
    const { config } = pros;
    const { t } = useTranslation();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const [isOpenList, setOpenList] = useState(Array(config().pages.length).fill(false));
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const getImgUrl = (img: string | undefined) => {
        return colorTheme(process.env.PUBLIC_URL + `/assets/tabBar/light${img}`, process.env.PUBLIC_URL + `/assets/tabBar/dark${img}`);
    };
    const getSelectedImgUrl = (img: string | undefined) => {
        return colorTheme(
            process.env.PUBLIC_URL + `/assets/tabBar/selected/light${img}`,
            process.env.PUBLIC_URL + `/assets/tabBar/selected/dark${img}`
        );
    };
    const history = useHistory();
    const listFocusRef = React.useRef<any | null>(null);
    useOutsideClick({
        ref: listFocusRef,
        handler: () => {
            const temp = Array(config().pages.length).fill(false);
            setOpenList(temp);
        },
    });
    let clickChildren = false;

    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        config().pages.map((item: any, index: number) => {
            const isFounded = item.address === currentPath || item.children.find((i: any) => i.address === currentPath);
            if (isFounded) {
                setSelectedIndex(index);
            }
        });
    }, [config().pages, location]);

    function isIOSDevice() {
        return !!navigator.platform && /iPhone/.test(navigator.platform);
    }

    return (
        <Flex
            w="100%"
            h={isIOSDevice() ? '97px' : '65px'}
            bgColor={colorTheme('#ffffff', '#292343')}
            zIndex="1"
            position="fixed"
            bottom="0px"
            ref={listFocusRef}
        >
            {config().pages.map((page: any, index: number) => {
                const isSelected = selectedIndex === index;
                return (
                    <Flex
                        key={index}
                        w={100 / config().pages.length + '%'}
                        h="37px"
                        mt="12px"
                        onClick={() => {
                            const temp = Array(config().pages.length).fill(false);
                            temp[index] = !isOpenList[index];
                            setOpenList(temp);
                            if (page.address) {
                                if (page.address.slice(0, 4) === 'http') {
                                    window.open(page.address);
                                    return;
                                }
                                setSelectedIndex(index);
                                if (!clickChildren) {
                                    history.push(page.address);
                                }
                            }
                        }}
                    >
                        <Menu isOpen={isOpenList[index]} key={index}>
                            <MenuButton w="100%">
                                <VStack>
                                    <Image
                                        boxSize="20px"
                                        src={isSelected ? getSelectedImgUrl(page.img) : getImgUrl(page.img)}
                                        fallbackSrc={getImgUrl(page.img)}
                                    ></Image>
                                    <Text
                                        className={i_text_copy}
                                        mt="3px !important"
                                        color={isSelected ? colorTheme('#7F4AFE', 'secondary.500') : colorTheme('tertiary.600', '#705C9A')}
                                    >
                                        {t(page.name)}
                                    </Text>
                                </VStack>
                            </MenuButton>
                            {!page.address && (
                                <MenuList
                                    minW="130px"
                                    w="100%"
                                    className={i_text_d}
                                    bg={colorTheme('#FBFBFB', '#100C1E')}
                                    position="relative"
                                    fontSize="13px"
                                >
                                    {page.children.map((children: any, i: number) => {
                                        return (
                                            <MenuItem
                                                key={i}
                                                justifyContent="center"
                                                onClick={() => {
                                                    setSelectedIndex(index);
                                                    if (children.address) {
                                                        if (children.address.slice(0, 4) === 'http') {
                                                            window.open(children.address);
                                                        } else {
                                                            if (page.address) {
                                                                clickChildren = true;
                                                            } else {
                                                                clickChildren = false;
                                                            }
                                                            history.push(children.address);
                                                        }
                                                    }
                                                }}
                                            >
                                                <Text>{t(children.name)}</Text>
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            )}
                        </Menu>
                    </Flex>
                );
            })}
        </Flex>
    );
};
