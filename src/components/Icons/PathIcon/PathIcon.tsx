import React from 'react';
import { Icon } from '@chakra-ui/react';

interface Props {
    paths: string[];
    pathClassesMap: {
        norm: string[];
        hover: string[];
    };
    isHovering: boolean;
    viewBox?: string;
    height?: string;
    width?: string;
}

const PathIcon: React.FC<Props> = ({
    paths,
    isHovering,
    pathClassesMap,
    viewBox,
    height,
    width,
}) => {
    const { pathClasses } = (() => {
        if (isHovering) {
            return {
                pathClasses: pathClassesMap.hover,
            };
        } else {
            return {
                pathClasses: pathClassesMap.norm,
            };
        }
    })();

    return (
        <Icon
            viewBox={viewBox ?? '0 0 22 22'}
            height={height ?? '20px'}
            width={width ?? '20px'}
        >
            {paths.map((path, i) => (
                <path
                    key={path}
                    className={`trans ${pathClasses[i]}`}
                    d={path}
                />
            ))}
        </Icon>
    );
};

export default PathIcon;
