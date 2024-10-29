import React from 'react';
import MediaIcon from '../MediaIcon/MediaIcon';

interface Props {
    isHovering: boolean;
}

const TwitterIcon: React.FC<Props> = ({ isHovering }) => {
    return (
        <MediaIcon
            isHovering={isHovering}
            circleClassMap={{
                norm: 'twitter-1',
                hover: 'twitter-1-h',
            }}
            pathClassesMap={{
                norm: ['twitter-2'],
                hover: ['twitter-2-h'],
            }}
            paths={[
                'M22.65,12.41c0-.16,0-.33,0-.5a7.55,7.55,0,0,0,1.84-2,7.1,7.1,0,0,1-2.12.58A3.77,3.77,0,0,0,24,8.39a7.07,7.07,0,0,1-2.34.9A3.69,3.69,0,0,0,18.94,8a3.73,3.73,0,0,0-3.69,3.85,3.68,3.68,0,0,0,.1.89,10.38,10.38,0,0,1-7.62-4.2,4.14,4.14,0,0,0-.5,2,4.06,4.06,0,0,0,1.65,3.3,3.48,3.48,0,0,1-1.68-.51v0a3.94,3.94,0,0,0,3,3.89,3.51,3.51,0,0,1-1,.13,3.25,3.25,0,0,1-.69-.08A3.74,3.74,0,0,0,12,20.06a7.11,7.11,0,0,1-4.59,1.67,8.65,8.65,0,0,1-.88-.05,10,10,0,0,0,5.66,1.77C18.93,23.45,22.65,17.54,22.65,12.41Z',
            ]}
        />
    );
};

export default TwitterIcon;
