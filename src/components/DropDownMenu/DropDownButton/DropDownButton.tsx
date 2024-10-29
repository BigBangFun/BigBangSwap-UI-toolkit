import { Button, Menu, MenuButton, MenuList, Image, Box, Flex, useDisclosure, ChakraProps } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { a_display } from '../../../style';
import { ArrowDownGreen } from '../../ArrowDownGreen/ArrowDownGreen';
import CustomButton from '../../Buttons/CustomButton/CustomButton';
type DropDownButtonProps = {
    page: any;
    variant?: string;
    rightIcon?: any;
    buttonProps?: ChakraProps;
    menuListProps?: ChakraProps;
};
export const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
    const { page, rightIcon, buttonProps, menuListProps } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    return page.children.length === 0 ? (
        <CustomButton
            h={{ base: '62px', xl: '40px' }}
            text={page.name}
            bg="inherit"
            className={a_display}
            fontFamily={{ base: 'Gilroy-Bold !important', xl: 'Gilroy !important' }}
            color="tertiary.50"
            fontWeight="600"
            px="16px"
            borderRadius="7px"
            border={{ base: '1px solid #393357', xl: 'unset' }}
            justifyContent={{ base: 'left', xl: 'center' }}
            _hover={{ background: '#7D68E6' }}
            _active={{ background: '#7D68E6' }}
            onClick={() => {
                if (page.address && page.address.startsWith('http')) {
                    window.open(page.address);
                } else {
                    history.push(page.address);
                }
            }}
        ></CustomButton>
    ) : (
        <Menu isOpen={isOpen}>
            <MenuButton
                as={Button}
                rightIcon={rightIcon ? rightIcon : <ArrowDownGreen />}
                bg="inherit"
                className={a_display}
                fontSize="18px !important"
                color="tertiary.50"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                _hover={{ background: '#7D68E6' }}
                _active={{ background: '#7D68E6' }}
                {...buttonProps}
            >
                {page.name}
            </MenuButton>
            <MenuList bg="rgba(20, 2, 51);" onMouseEnter={onOpen} onMouseLeave={onClose} borderWidth="0px" {...menuListProps}>
                {page.children.map((child: any) =>
                    child.address?.startsWith('http') ? (
                        <Link key={child.name + child.address} target="_blank" to={{ pathname: child.address }}>
                            <Box
                                display="block"
                                fontFamily="Montserrat-Medium"
                                fontSize="13px"
                                pt="13px"
                                mr="34px"
                                pl="27px"
                                pb="11px"
                                target="_blank"
                                color="tertiary.50"
                                {...menuListProps}
                            >
                                <Flex>
                                    <Image boxSize="20px" mr="14px" src={child.icon}></Image>

                                    {child.name}
                                </Flex>
                            </Box>
                        </Link>
                    ) : (
                        <Link to={child.address as string} key={child.name + child.address}>
                            <Box
                                display="block"
                                fontSize="13px"
                                fontFamily="Montserrat-Medium"
                                pt="13px"
                                mr="34px"
                                pl="27px"
                                pb="11px"
                                target="_blank"
                                color="tertiary.50"
                                {...menuListProps}
                            >
                                <Flex>
                                    <Image boxSize="20px" mr="14px" src={child.icon}></Image>
                                    {child.name}
                                </Flex>
                            </Box>
                        </Link>
                    )
                )}
            </MenuList>
        </Menu>
    );
};
