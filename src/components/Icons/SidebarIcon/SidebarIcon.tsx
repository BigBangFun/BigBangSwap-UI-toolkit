import React from 'react';
import { Icon } from '@chakra-ui/react';

interface Props {
    paths: string[];
    page: string;
    isHovering: boolean;
}

const SidebarIcon: React.FC<Props> = ({ paths, page, isHovering }) => {
    const [, pathClass] = (() => {
        if (isHovering) {
            return [page + '-1-h', page + '-2-h'];
        } else {
            return [page + '-1', page + '-2'];
        }
    })();

    return (
        <Icon viewBox="0 0 31.89 31.89" height="30px" width="30px">
            {paths.map((path) => (
                <path
                    key={path}
                    className={`trans ${pathClass}`}
                    d={path}
                    transform="translate(-0.05 -0.04)"
                />
            ))}
        </Icon>
    );
};

export default SidebarIcon;
