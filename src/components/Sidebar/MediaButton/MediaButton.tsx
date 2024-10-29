import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { useHover } from '../../../hooks/useHover';
import { TelegramList } from '../TelegramList/TelegramList';

interface Props {
    Icon: React.FC<{
        isHovering: boolean;
    }>;
    link?: string;
    type?: string;
}

const MediaButton: React.FC<Props> = ({ Icon, link, type }) => {
    const [ref, isHovering] = useHover<HTMLDivElement>();

    return type === 'list' ? (
        <TelegramList Icon={Icon}></TelegramList>
    ) : (
        <Flex ref={ref}>
            <Link target="_blank" href={link} rel="noreferrer">
                <Icon isHovering={isHovering} />
            </Link>
        </Flex>
    );
};

export default React.memo(MediaButton);
