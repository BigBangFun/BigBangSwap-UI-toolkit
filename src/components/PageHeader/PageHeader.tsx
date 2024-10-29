import { Box, BoxProps, Flex, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Heading, Text } from '../Typography/Typography';
import BackButton from '../Buttons/BackButton/BackButton';
import useIsMobile from '../../hooks/useIsMobile';

export type PageHeaderProps = {
    headerTitle: string | ReactElement;
    subtitle: string;
    element?: ReactElement;
    variant?: string;
    mobileAdapt?: boolean;
    mobileTitle?: string | ReactElement;
    mobileElement?: ReactElement;
} & BoxProps;

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const { ...rest } = props;
    const isMobile = useIsMobile();

    return !props.variant ? ( //secondary
        isMobile && props.mobileAdapt ? (
            <Flex p="24px 0 0 0" direction="row" w="100%" alignItems="center" justifyContent="space-between" {...rest}>
                {typeof props.mobileTitle === 'string' ? <Heading level="3">{props.mobileTitle}</Heading> : props.mobileTitle}
                {props.mobileElement}
            </Flex>
        ) : (
            <Flex p="44px 0 20px" direction="row" w="100%" {...rest}>
                <Stack flexGrow={1}>
                    {typeof props.headerTitle === 'string' ? <Heading level="3">{props.headerTitle}</Heading> : props.headerTitle}
                    <Text variant="display" fontSize={{ base: '14px', xl: '16px' }}>
                        {props.subtitle}
                    </Text>
                </Stack>
                {props.element && <Box flexShrink={0}>{props.element}</Box>}
            </Flex>
        )
    ) : (
        <Flex p="44px 0 20px" direction="row" w="100%" alignItems="center" {...rest}>
            <BackButton flex={20} />
            <Stack flex={80} alignItems="center" ml="-20%">
                {typeof props.headerTitle === 'string' ? <Heading level="3">{props.headerTitle}</Heading> : props.headerTitle}
                <Text variant="display">{props.subtitle}</Text>
            </Stack>
        </Flex>
    );
};

export default PageHeader;
