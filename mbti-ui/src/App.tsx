import { FC, useEffect } from 'react';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './components/AppHeader';

import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material';

const App: FC = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#4198b4',
            },
            secondary: {
                main: '#91f5ad',
            },
        },
        typography: {
            button: {
                textTransform: 'none',
            },
        },
    });

    useTranslation(); // needed in order to initialize the translations for children
    useEffect(() => {
        const language = localStorage.getItem('i18nextLng');
        if (language) {
            changeLanguage(language);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AppHeader />
            <Outlet />
        </ThemeProvider>
    );
};

export default App;
