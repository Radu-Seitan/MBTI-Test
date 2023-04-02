import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../components/Home';
import App from '../App';
import { About } from '../components/About';

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
                <Route
                    path={'/about'}
                    element={                   
                        <About />                
                    }
                />
            </Route>
        </Routes>
    );
};
