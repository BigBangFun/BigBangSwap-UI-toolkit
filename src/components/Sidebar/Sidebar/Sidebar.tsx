import React, { useState } from 'react';
import { Flex, Box, useColorMode, Image } from '@chakra-ui/react';
import MediaList from '../MediaList/MediaList';
import CopyrightInfo from '../CopyrightInfo/CopyrightInfo';
import ColorModeSelect from '../ColorModeSelect/ColorModeSelect';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import { getColorThemeSelector } from '../../../utils/funcs';
import { useHistory } from 'react-router-dom';
import useIsMobile from '../../../hooks/useIsMobile';
import './Sidebar.css';
interface Props {
    Navbar?: any;
    BuyiZiButton?: any;
}
const Sidebar: React.FC<Props> = (pros) => {
    const { Navbar, BuyiZiButton } = pros;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    const bgColor = colorTheme('#ffffff', '#292343');
    const [showNav, setShowNav] = useState(false);
    const history = useHistory();
    const isMobile = useIsMobile();

    return (
        <Flex
            h="100%"
            w={{
                base: showNav ? '248px' : '0px',
                lg: showNav ? '248px' : '119px',
            }}
            direction="column"
            boxShadow="0 0 15px 0 rgb(0 0 0 / 3%)"
            bgColor={bgColor}
            display="flex"
            visibility={{ base: showNav ? 'visible' : 'hidden', lg: 'visible' }}
            align="flex-start"
            flexShrink={0}
            transitionProperty="all"
            transitionDuration="0.3s"
            transitionTimingFunction="ease"
            transitionDelay={showNav ? '0s' : '0.2s'}
            position={{ base: 'absolute', lg: 'relative' }}
            zIndex={{ base: '8', lg: '8' }}
        >
            <ToggleIcon
                top="97px"
                right="-18px"
                showNav={showNav}
                setShowNav={setShowNav}
                zIndex="8 !important"
                visibility={isMobile ? 'hidden' : 'visible'}
            />
            <Box flexShrink={0} w="100%" height="140px" position="relative" mb="10px !important">
                <Image
                    src={process.env.PUBLIC_URL + '/assets/home/iziLogo/logo.svg'}
                    width="38px"
                    height="38px"
                    position="absolute"
                    left="35px"
                    top="46px"
                    cursor="pointer"
                    onClick={() => {
                        history.push('/home');
                    }}
                />
                <Image
                    src={colorTheme(
                        process.env.PUBLIC_URL + '/assets/home/iziLogo/Darktext.svg',
                        process.env.PUBLIC_URL + '/assets/home/iziLogo/Whitetext.svg'
                    )}
                    width={showNav ? '80px' : '0px'}
                    height={showNav ? '25px' : '0px'}
                    position="absolute"
                    left="87px"
                    top="52px"
                    opacity={showNav ? 1 : 0}
                    cursor="pointer"
                    onClick={() => {
                        history.push('/home');
                    }}
                    transitionProperty="opacity"
                    transitionDuration="0.2s"
                    transitionTimingFunction="ease"
                    transitionDelay={showNav ? '0.3s' : '0s'}
                    fallbackSrc={process.env.PUBLIC_URL + '/assets/home/iziLogo/Darktext.svg'}
                />
            </Box>
            <Navbar setShowNav={setShowNav} showNav={showNav} />
            <Box flex={1} />
            {showNav ? (
                <>
                    <Flex direction="row" w="95%" align="center" mb={3} mx="auto" px={4} ml="-2px">
                        <ColorModeSelect showNav={showNav} />
                        {
                            //<LanguageSelect />
                        }
                        <BuyiZiButton expand={showNav} ml="-16px !important" tokenPrice={0} onClick={undefined} />
                    </Flex>

                    <MediaList />
                    <CopyrightInfo />
                </>
            ) : (
                <Flex direction="column" w="95%" align="center" mb="97px" mx="auto" px={4}>
                    <ColorModeSelect showNav={showNav} />
                    <Box mt="21px"></Box>
                    {
                        //  <LanguageSelect />
                    }
                    <BuyiZiButton expand={showNav} tokenPrice={0} onClick={undefined} />
                </Flex>
            )}
        </Flex>
    );
};

export default Sidebar;
