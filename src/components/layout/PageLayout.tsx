import { Divider, Flex, VStack, useColorMode } from '@chakra-ui/react';
import { ReactElement, useEffect, useState } from 'react';
import { getColorThemeSelector } from '../../utils/funcs';
import { useLocation } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';
import { Loading } from '../Loading/Loading';
export type AdaptationMode = 'mobile' | 'pc';

export type PageLayoutProps = {
    loading: boolean;
    header: ReactElement;
    body: ReactElement;
    fixWidth?: boolean;
    fixMargin?: boolean;
    mobileAdapt?: boolean;
};

const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const isMobile = useIsMobile();

    // const bars = config.map((item: any, index: any) => {
    //     return <AnnouncementBar key={index} {...item}></AnnouncementBar>;
    // });

    const location = useLocation();
    const notShowDividerUrl = ['/trade/swap', '/trade/limit'];
    const [isShowDivider, setIsShowDivider] = useState(true);

    const showLoading = () => {
        const urls = ['/trade'];
        const url = urls.filter((u) => location.pathname.startsWith(u));
        return url.length;
    };

    useEffect(() => {
        const currentPath = location.pathname;
        setIsShowDivider(!isMobile && !notShowDividerUrl.includes(currentPath));
    }, [location, isMobile]);

    return (
        <VStack w="100%" h="100%" bg={colorTheme('#fbfbfb', '#140E28')} spacing="0">
            {/* {bars} */}
            <Flex
                pr={{ base: props.mobileAdapt ? '24px' : '40px', xlp1: '100px' }}
                pl={{ base: props.mobileAdapt ? '24px' : '40px', xlp1: '100px' }}
                h="100%"
                w="100%"
                overflowY="scroll"
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none !important',
                    },
                }}
                justifyContent={{ base: 'space-between', '2xl': 'center' }}
                //justifyContent="center"
                position="relative"
            >
                <VStack
                    mx={props.fixMargin ? 'unset' : { base: 'auto', xl: 'auto' }}
                    w={props.fixWidth ? '1150px' : { base: props.mobileAdapt ? '100%' : '700px', xl: '1150px' }}
                >
                    {props.header}

                    {isShowDivider && <Divider m="0 !important" />}

                    {props.loading && showLoading() ? <Loading /> : props.body}
                </VStack>
            </Flex>
        </VStack>
    );
};

export default PageLayout;
