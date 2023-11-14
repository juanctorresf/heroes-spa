import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MarvelPage, DcPage, SearchPage, HeroPage, HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <PublicRoutes> <LoginPage/> </PublicRoutes>
    },
    {
        path: '/',
        element: <PrivateRoutes> <HeroesRoutes /> </PrivateRoutes>,
        children: [
            {
                path: '/marvel',
                element: <MarvelPage />
            },
            {
                path: '/dc',
                element: <DcPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: '/hero/:HeroId',
                element: <HeroPage />
            },
            {
                path: '/',
                element: <Navigate to="/marvel" />
            },
        ]
    }, 
]);

