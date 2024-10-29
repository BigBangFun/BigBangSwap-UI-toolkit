import React from 'react';
import MediaIcon from '../MediaIcon/MediaIcon';

interface Props {
    isHovering: boolean;
}

const TelegramIcon: React.FC<Props> = ({ isHovering }) => {
    return (
        <MediaIcon
            isHovering={isHovering}
            circleClassMap={{
                norm: 'telegram-1',
                hover: 'telegram-1-h',
            }}
            pathClassesMap={{
                norm: ['telegram-2'],
                hover: ['telegram-2-h'],
            }}
            paths={[
                'M23.28,9.18,20.55,22c-.19.9-.73,1.12-1.49.7l-4.13-3-2,1.92a1,1,0,0,1-.84.39l.31-4.22,7.68-6.92c.33-.31-.09-.45-.51-.17l-9.51,6L6,15.37c-.9-.28-.9-.9.19-1.32l16-6.16C22.89,7.64,23.54,8.06,23.28,9.18Z',
            ]}
        />
    );
};

export default TelegramIcon;
