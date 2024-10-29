import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import './AppLayout.css';

export type AppLayoutProps = {
    left: ReactElement;
    center: ReactElement;
    right: ReactElement;
    hideRightPane?: boolean;
    bottom: ReactElement | undefined;
};

const AppLayout: React.FC<AppLayoutProps> = (props) => (
    <Flex direction="row" minH="100vh" w="100%" className="AppLayout">
        {props.left}
        {props.center}
        {!props.hideRightPane && props.right}
        {props.bottom}
    </Flex>
);

export default AppLayout;
