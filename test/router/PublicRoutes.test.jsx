import { render, screen } from "@testing-library/react";
import { PublicRoutes } from "../../src/router/PublicRoutes";
import { AuthContext } from "../../src/auth";
import {  MemoryRouter, Route, Routes } from "react-router-dom";

describe('testing on <PublicRoutes />', () => { 
    test('should show the children if it is not authenticated', () => { 
        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoutes>
                    <h1>Ruta Public</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Ruta Public') ).toBeTruthy();
    });

    test('should navigate if it is authenticated', () => { 
        const contextValue = {
            logged: true,
            user: {
                name: 'JuanCa',
                id: 'ABC',
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoutes>
                                <h1>Public Routes</h1>
                            </PublicRoutes>
                        } />
                        <Route path="marvel" element={<h1>Marvel Page</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
            
        );
        expect( screen.getByText('Marvel Page')).toBeTruthy();
    });
})