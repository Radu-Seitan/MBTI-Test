import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Button,
} from '@mui/material';

import { LanguageDropdown } from '../LanguageDropdown';

import { RootStore } from '../../store/types/RootStore';
import { useTranslation } from 'react-i18next';
import { NavMenu } from '../NavMenu';

import './AppHeader.scss';

export const AppHeader: FC = () => {
    const { t } = useTranslation();
    const user = useSelector((state: RootStore) => state.user);

    return (
        <AppBar position="static">
            <Container maxWidth={false}>
                <Toolbar disableGutters className={'menu-container'}>
                    {user?.isAuthenticated && (
                        <>
                            <Button
                                color="primary"
                                variant="contained"
                                href="/"
                            >
                                <Typography className={'home-button-text'}>
                                    {t('home')}
                                </Typography>
                            </Button>
                            <NavMenu />
                        </>
                    )}
                    <Box className={'language-dropdown-container'}>
                        <LanguageDropdown />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
