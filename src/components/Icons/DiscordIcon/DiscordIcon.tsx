import React from 'react';
import MediaIcon from '../MediaIcon/MediaIcon';

interface Props {
    isHovering: boolean;
}

const DiscordIcon: React.FC<Props> = ({ isHovering }) => {
    return (
        <MediaIcon
            isHovering={isHovering}
            circleClassMap={{
                norm: 'discord-1',
                hover: 'discord-1-h',
            }}
            pathClassesMap={{
                norm: ['discord-2'],
                hover: ['discord-2-h'],
            }}
            paths={[
                'M17.57,15.55a.92.92,0,1,1-.91-1A1,1,0,0,1,17.57,15.55Zm-4.2-1a1,1,0,1,0,.92,1A1,1,0,0,0,13.37,14.55Zm9.51-5.7V25c-2.27-2-1.55-1.34-4.18-3.79l.48,1.67H9A1.85,1.85,0,0,1,7.12,21V8.85A1.85,1.85,0,0,1,9,7H21A1.85,1.85,0,0,1,22.88,8.85Zm-2.57,8.54A12,12,0,0,0,19,12.14a4.47,4.47,0,0,0-2.52-1l-.13.15a6,6,0,0,1,2.24,1.14,7.65,7.65,0,0,0-6.72-.26c-.34.15-.53.26-.53.26a6,6,0,0,1,2.36-1.18l-.09-.11a4.51,4.51,0,0,0-2.53,1A12.11,12.11,0,0,0,9.8,17.39a3.24,3.24,0,0,0,2.74,1.36s.34-.4.61-.74A2.78,2.78,0,0,1,11.57,17c.13.09.35.21.37.22a6.55,6.55,0,0,0,5.62.31,4.6,4.6,0,0,0,1-.53A2.83,2.83,0,0,1,17,18c.27.35.6.73.6.73A3.29,3.29,0,0,0,20.31,17.39Z',
            ]}
        />
    );
};

export default DiscordIcon;
