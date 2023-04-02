import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootStore } from '../../store/types/RootStore';
import { Box } from '@mui/material';

import './Home.scss';

export const Home: FC = () => {
    const { t } = useTranslation();
    const user = useSelector((state: RootStore) => state.user);

    return (
        <>
            <Box className={'background-image'}></Box>
            <Box>
                <Box className={'question-box'}>
                    {user && <h1> Hello, {user.fullName} </h1>}
                    <Box>{t('common.hello')}</Box>
                </Box>
            </Box>
        </>
    );
};
