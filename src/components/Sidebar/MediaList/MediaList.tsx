import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import TelegramIcon from '../../Icons/TelegramIcon/TelegramIcon';
import TwitterIcon from '../../Icons/TwitterIcon/TwitterIcon';
import MediumIcon from '../../Icons/MediumIcon/MediumIcon';
import DiscordIcon from '../../Icons/DiscordIcon/DiscordIcon';
import RedditIcon from '../../Icons/RedditIcon/RedditIcon';
import MediaButton from '../MediaButton/MediaButton';
import DefipulseIcon from '../../Icons/DefipulseIcon/Defipulse';
interface Props {
    links?: any;
}
const MediaList: React.FC<Props> = (pros) => {
    const { links } = pros;
    return (
        <Flex direction="row" p="0" mb="17px" alignSelf="center">
            <Box mr="8px">
                <MediaButton Icon={TelegramIcon} link={links.telegram} type="list" />
            </Box>
            <Box mr="8px">
                <MediaButton Icon={TwitterIcon} link={links.twitter} />
            </Box>
            <Box mr="8px">
                <MediaButton Icon={MediumIcon} link={links.medium} />
            </Box>
            <Box mr="8px">
                <MediaButton Icon={DiscordIcon} link={links.discord} />
            </Box>
            <Box mr="8px">
                <MediaButton Icon={RedditIcon} link={links.reddit} />
            </Box>
            <Box>
                <MediaButton Icon={DefipulseIcon} link={links.defipulse} />
            </Box>
        </Flex>
    );
};

export default MediaList;
