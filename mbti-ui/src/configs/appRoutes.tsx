import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../components/Home';
import App from '../App';

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<App />}>
                <Route
                    path={'/'}
                    element={                   
                        <Home />                
                    }
                />
            </Route>
        </Routes>
    );
};
