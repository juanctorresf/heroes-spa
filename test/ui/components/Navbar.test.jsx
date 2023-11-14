import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate 
}) );

describe('testing on <Navbar />', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'JuanCa',
        },
        logout: jest.fn(),
    }

    beforeEach( () => jest.clearAllMocks() );

    test('should show the name of user', () => { 
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('JuanCa') ).toBeTruthy();
    });

    test('should call the functions logout & navigate when the botton is clicked ', () => { 
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button', { name: 'Logout'} );
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( "/login", {"replace": true} );
    });
});