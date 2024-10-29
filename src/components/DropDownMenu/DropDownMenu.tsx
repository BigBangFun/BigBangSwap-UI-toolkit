import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    BoxProps,
    ChakraProps,
    HStack,
    IconButton,
    Image,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    useDisclosure,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { config } from '../../../../config/sidebar/config';
import { a_display } from '../../style';
import { MenuClose } from '../Icons/MenuIcon/MenuClose';
import { MenuIcon } from '../Icons/MenuIcon/MenuIcon';
import { DropDownButton } from './DropDownButton/DropDownButton';
type DropDownMenuProps = {
    variant?: string;
    leftIcon?: any;
    rightIcon?: any;
    buttonProps?: ChakraProps;
    menuListProps?: ChakraProps;
} & BoxProps;
export const DropDownMenu: React.FC<DropDownMenuProps> = (props) => {
    const { variant, leftIcon, rightIcon, buttonProps, menuListProps, ...rest } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    return variant === 'mobile' ? (
        <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <PopoverTrigger>
                <Image
                    as={IconButton}
                    boxSize={'30px'}
                    mr="18px"
                    bg="inherit"
                    _hover={{ background: 'inherit' }}
                    _active={{ background: 'inherit' }}
                    icon={isOpen ? <MenuClose /> : <MenuIcon />}
                ></Image>
            </PopoverTrigger>
            <PopoverContent bg="rgba(20, 2, 51, 0.87);">
                {config().pages.map((page: any) => {
                    const commonAttr = {
                        key: page.name,
                        img: page.img,
                    };
                    if (page.children.length === 0) {
                        return <DropDownButton {...commonAttr} page={page} />;
                    } else {
                        return (
                            <Accordion defaultIndex={[0]} allowMultiple={true}>
                                <AccordionItem bg="rgba(20, 2, 51, 0.87);" color="tertiary.50" border="1px solid #393357">
                                    <AccordionButton className={a_display} fontFamily="Gilroy-Bold !important" my="10px">
                                        <Box flex="1" textAlign="left">
                                            {page.name}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        {page.children.map((child: any) =>
                                            child.address?.startsWith('http') ? (
                                                <Link key={child.name + child.address} target="_blank" to={{ pathname: child.address }}>
                                                    <Box
                                                        display="block"
                                                        fontFamily="Gilroy"
                                                        fontSize="14px"
                                                        pt="13px"
                                                        mr="34px"
                                                        pl="27px"
                                                        pb="11px"
                                                        target="_blank"
                                                        color="tertiary.200"
                                                        _hover={{ background: '#7D68E6' }}
                                                        onClick={() => {
                                                            if (child.address && child.address.startsWith('http')) {
                                                                window.open(child.address);
                                                            } else {
                                                                history.push(child.address);
                                                            }
                                                        }}
                                                    >
                                                        {child.name}
                                                    </Box>
                                                </Link>
                                            ) : (
                                                <Link to={child.address as string} key={child.name + child.address}>
                                                    <Box
                                                        display="block"
                                                        fontSize="14px"
                                                        fontFamily="Gilroy"
                                                        pt="13px"
                                                        mr="34px"
                                                        pl="27px"
                                                        pb="11px"
                                                        //fontWeight="bold"
                                                        target="_blank"
                                                        color="tertiary.200"
                                                        _hover={{ background: '#7D68E6' }}
                                                        onClick={() => {
                                                            if (child.address && child.address.startsWith('http')) {
                                                                window.open(child.address);
                                                            } else {
                                                                history.push(child.address);
                                                            }
                                                        }}
                                                    >
                                                        {child.name}
                                                    </Box>
                                                </Link>
                                            )
                                        )}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        );
                    }
                })}
            </PopoverContent>
        </Popover>
    ) : (
        <HStack {...rest} spacing="30px">
            {config().pages.map((page: any) => {
                const commonAttr = {
                    key: page.name,
                    img: page.img,
                };
                if (page.children.length === 0) {
                    return <DropDownButton {...commonAttr} buttonProps={buttonProps} page={page} />;
                } else {
                    return (
                        <DropDownButton
                            {...commonAttr}
                            rightIcon={rightIcon ?? undefined}
                            buttonProps={buttonProps}
                            menuListProps={menuListProps ?? undefined}
                            page={page}
                        />
                    );
                }
            })}
        </HStack>
    );
};
