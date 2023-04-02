import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Typography,
    Menu,
    Tooltip,
    MenuItem,
    Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { settingsItems, pageItems } from './menuItems';
import { logout } from '../../store/user/reducer';
import { RootStore } from '../../store/types/RootStore';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';

import './NavMenu.scss';

export const NavMenu = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [anchorElPersonalities, setAnchorElPersonalities] =
        useState<null | HTMLElement>(null);
    const [anchorElSettings, setAnchorElSettings] =
        useState<null | HTMLElement>(null);

    const handleOpenSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElSettings(event.currentTarget);
    };

    const handleOpenPersonalitiesMenu = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        setAnchorElPersonalities(event.currentTarget);
    };

    const handleClosePersonalitiesMenu = () => {
        setAnchorElPersonalities(null);
    };

    const handleCloseSettingsMenu = () => {
        setAnchorElSettings(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        setAnchorElSettings(null);
    };

    const user = useSelector((state: RootStore) => state.user);

    return (
        <>
            <Box className={'nav-menu-container'}>
                <Button
                    onClick={handleOpenPersonalitiesMenu}
                    color="secondary"
                    variant="contained"
                >
                    <Typography className={'personalities-text'}>
                        {t('personalities')}
                    </Typography>
                </Button>

                <Menu
                    anchorEl={anchorElPersonalities}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElPersonalities)}
                    onClose={handleClosePersonalitiesMenu}
                >
                    {pageItems.map((page) => (
                        <MenuItem
                            component={Link}
                            to={page.route}
                            key={page.key}
                            onClick={handleClosePersonalitiesMenu}
                        >
                            <Typography textAlign="center">
                                {t(page.title)}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Box>
                <Tooltip title={t('openSettings') ?? 'Open settings'}>
                    <IconButton
                        onClick={handleOpenSettingsMenu}
                        className={'menu-icon-container'}
                    >
                        <MenuIcon fontSize="large" className={'menu-icon'} />
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorElSettings}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElSettings)}
                    onClose={handleCloseSettingsMenu}
                >
                    {settingsItems.map((setting) => (
                        <MenuItem
                            component={Link}
                            to={setting.route}
                            key={setting.key}
                            onClick={handleCloseSettingsMenu}
                        >
                            <Typography textAlign="center">
                                {setting.title}
                            </Typography>
                        </MenuItem>
                    ))}
                    <MenuItem key="logout" onClick={handleLogout}>
                        <Typography textAlign="center">
                            {t('logout')}
                        </Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </>
    );
};
