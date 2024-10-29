import { Flex, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { i_h5 } from '../../../style';

const BackButton: React.FC<BoxProps> = (props) => {
    const { t } = useTranslation();
    const history = useHistory();
    return (
        <Flex
            onClick={() => {
                history.goBack();
            }}
            cursor="pointer"
            className={i_h5}
            {...props}
        >
            {'< '}
            {t('BACK')}
        </Flex>
    );
};

export default BackButton;
