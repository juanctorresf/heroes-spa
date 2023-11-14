import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter'
import { AuthContext } from '../../src/auth';

describe('testing on <AppRouter />', () => {

    test('should show the login if it is not authenticated', () => {

        const contextValue = {
            logged: false,
        };

        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Login')).toBeInTheDocument();
    });
});