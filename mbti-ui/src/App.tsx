import { FC, useEffect } from 'react';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './components/AppHeader';

import './App.scss';


const App: FC = () => {
    useTranslation(); // needed in order to initialize the translations for children
    useEffect(() => {
        const language = localStorage.getItem('i18nextLng');
        if (language) {
            changeLanguage(language);
        }
    }, []);

    return (
        <>
            <AppHeader />
            <Outlet />
        </>
    );
};

export default App;
