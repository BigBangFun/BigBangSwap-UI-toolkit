import React, { useState, useEffect, useMemo } from 'react';
import { i_text_copy, i_text_copy_bold, i_text_d } from '../../style';
import { FiClock } from 'react-icons/fi';
import { BoxProps, useColorMode, VStack, Text, Icon, HStack, Image } from '@chakra-ui/react';
import { getColorThemeSelector } from '../../utils/funcs';
import useInterval from 'ahooks/lib/useInterval';
import Card from '../Card/Card';
import { useTranslation } from 'react-i18next';
import { AdaptationMode } from '../layout/PageLayout';

type BlockProps = {
    initialSeconds: number;
    type?: AdaptationMode;
} & BoxProps;

const CountDownBlock: React.FC<BlockProps> = (props) => {
    const { initialSeconds, type, ...rest } = props;

    const { t } = useTranslation();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const [timeLeft, setTimeLeft] = useState(initialSeconds);
    const seconds = useMemo(() => Math.floor(timeLeft % 60), [timeLeft]);
    const minutes = useMemo(() => Math.floor((timeLeft / 60) % 60), [timeLeft]);
    const hours = useMemo(() => Math.floor((timeLeft / (60 * 60)) % 24), [timeLeft]);
    const days = useMemo(() => Math.floor(timeLeft / (60 * 60 * 24)), [timeLeft]);

    useEffect(() => {
        // if (timeLeft === 0 && initialSeconds > 0) {
        //     setTimeLeft(initialSeconds);
        // }
        setTimeLeft(initialSeconds);
    }, [initialSeconds]);

    useInterval(() => {
        setTimeLeft(timeLeft > 0 ? timeLeft - 1 : 0);
    }, 1000);

    return type === 'mobile' ? (
        <HStack w="100%" alignItems="start" {...rest}>
            <Text className={i_text_d} fontSize="12px !important" color="#A398BD">
                {t('Current cycle')}
            </Text>
            <HStack alignItems="center" px="10px" py="3px" spacing="10px" bg={colorTheme('#E0D4FB', '#452B80')} borderRadius="14px">
                <Image boxSize="16px" src="/assets/farm/cycle.svg" mt="2px"></Image>
                <Text className={i_text_copy} color={colorTheme('#6F31FF', '#CAB4FF')} fontSize="12px !important">
                    {days} {days > 1 ? t('days') : t('day')} {hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:
                    {seconds > 9 ? seconds : `0${seconds}`}
                </Text>
            </HStack>
        </HStack>
    ) : (
        <Card w="100%" h="50px" pl="10px" pt="4px" bg={colorTheme('#F5F5F5', 'tertiary.700')} {...rest}>
            <VStack alignItems="start" spacing="-2px">
                <Text className={i_text_d} color={colorTheme('tertiary.600', 'tertiary.200')} fontSize="12px !important">
                    {t('Current cycle')} :
                </Text>
                <HStack alignItems="center" spacing="10px">
                    <Icon as={FiClock} boxSize="16px" />
                    <Text className={i_text_copy_bold} color={colorTheme('tertiary.600', 'tertiary.200')} fontSize="12px !important">
                        {days} {days > 1 ? t('days') : t('day')} {hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:
                        {seconds > 9 ? seconds : `0${seconds}`}
                    </Text>
                </HStack>
            </VStack>
        </Card>
    );
};

export default CountDownBlock;
