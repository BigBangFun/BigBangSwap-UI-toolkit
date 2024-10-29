import React from 'react';
import MediaIcon from '../MediaIcon/MediaIcon';

interface Props {
    isHovering: boolean;
}

const MediumIcon: React.FC<Props> = ({ isHovering }) => {
    return (
        <MediaIcon
            isHovering={isHovering}
            circleClassMap={{
                norm: 'medium-1',
                hover: 'medium-1-h',
            }}
            pathClassesMap={{
                norm: ['medium-2'],
                hover: ['medium-2-h'],
            }}
            paths={[
                'M24,20.36v2.1H17.54v-2.1h1.34V11.07h-.06L15.67,22.46H13.24L10.13,11.07h-.08v9.29H11.4v2.1H6v-2.1h.69a.66.66,0,0,0,.44-.19.57.57,0,0,0,.22-.38V11a.65.65,0,0,0-.22-.4.66.66,0,0,0-.44-.22H6V8.23h6.75L15,16.47H15l2.24-8.24H24v2.1h-.71a.64.64,0,0,0-.41.22.6.6,0,0,0-.22.4v8.84a.55.55,0,0,0,.21.38.66.66,0,0,0,.42.19Z',
            ]}
        />
    );
};

export default MediumIcon;
