import React from 'react';
import { Icon } from '@chakra-ui/react';

interface Props {
    paths: string[];
    circleClassMap: {
        norm: string;
        hover: string;
    };
    pathClassesMap: {
        norm: string[];
        hover: string[];
    };
    isHovering: boolean;
    fillRule?: any;
    clipRule?: any;
}

const MediaIcon: React.FC<Props> = ({
    paths,
    isHovering,
    circleClassMap,
    pathClassesMap,
    fillRule,
    clipRule,
}) => {
    const { circleClass, pathClasses } = (() => {
        if (isHovering) {
            return {
                circleClass: circleClassMap.hover,
                pathClasses: pathClassesMap.hover,
            };
        } else {
            return {
                circleClass: circleClassMap.norm,
                pathClasses: pathClassesMap.norm,
            };
        }
    })();

    return (
        <Icon viewBox="0 0 30 30" height="24px" width="24px">
            <circle className={`trans ${circleClass}`} cx="15" cy="15" r="15" />
            {paths.map((path, i) => (
                <path
                    key={path}
                    className={`trans ${pathClasses[i]}`}
                    d={path}
                    fillRule={fillRule}
                    clipRule={clipRule}
                />
            ))}
        </Icon>
    );
};

export default MediaIcon;
