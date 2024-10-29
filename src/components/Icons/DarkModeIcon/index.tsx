import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import { getColorThemeSelector } from '../../../utils/funcs';
import PathIcon from '../PathIcon/PathIcon';

interface Props {
    isHovering: boolean;
}

const DarkModeIcon: React.FC<Props> = ({ isHovering }) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    return (
        <PathIcon
            isHovering={isHovering}
            pathClassesMap={{
                norm: colorTheme(['dark-btn-light'], ['dark-btn-dark-h']),
                hover: colorTheme(['dark-btn-light-h'], ['dark-btn-dark-h']),
            }}
            paths={[
                'M19,16.5h-.1a8.94,8.94,0,0,1-3.36-.7,8.86,8.86,0,0,1-4.73-4.72,8.85,8.85,0,0,1,0-6.9,8.72,8.72,0,0,1,1.21-2q.33-.4.69-.78l.19-.18a.59.59,0,0,0-.37-1H12q-.42,0-.84,0a10.84,10.84,0,1,0,9.66,17.16.59.59,0,0,0-.55-.93,8.08,8.08,0,0,1-1.2.09Zm-3.61,2.67a9,9,0,0,1-6.92,0,8.86,8.86,0,0,1-4.73-4.72,9,9,0,0,1,0-6.9A8.86,8.86,0,0,1,8.51,2.83c.31-.13.62-.24.94-.34A10.85,10.85,0,0,0,17,18.29,8.81,8.81,0,0,1,15.43,19.17Z',
            ]}
            viewBox="0 0 20 22"
            height="22px"
            width="22px"
        />
    );
};

export default DarkModeIcon;
