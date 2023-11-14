import { render, screen } from "@testing-library/react";
import { PrivateRoutes } from "../../src/router/PrivateRoutes";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";


describe('testing on <PrivateRoutes />', () => { 
    test('should show children if it is authenticated', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'JuanCa',
                id: 'ABC',
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoutes>
                        <h1>Ruta Priovada</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Ruta Priovada') ).toBeTruthy();
        expect( localStorage.setItem ).toBeCalledWith( "lastPath", "/marvel" );
    });
});