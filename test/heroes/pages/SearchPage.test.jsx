import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}) );

describe('Testing on <SearchPage />', () => { 

    beforeEach( () => jest.clearAllMocks() )

    test('should display with default values correctly', () => { 
        const { container } = render(
            <MemoryRouter> 
                <SearchPage />
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot();
    });

    test('should display to Batman & input with value of queryString', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}> 
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const alertHero = screen.getByLabelText('alertHero');
        expect( alertHero.style.display ).toBe( 'none' );
    });

    test('should display an error if it is no hero (batman123)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}> 
                <SearchPage />
            </MemoryRouter>
        )

        const alertHero = screen.getByLabelText('alertHero');
        expect( alertHero.style.display ).toBe('')
    });

    test('should call navigate to new screen', () => { 
        const inputValue = 'batman';

        render(
            <MemoryRouter initialEntries={['/search']}> 
                <SearchPage />
            </MemoryRouter>
        )

        const inputForm = screen.getByRole('textbox')
        fireEvent.change( inputForm, { target: {name: 'searchText', value: inputValue }} )

        const formHero = screen.getByLabelText('form');
        fireEvent.submit( formHero )

        expect( mockedNavigate ).toBeCalledWith(`?q=${ inputValue }`)
        // screen.debug()
    });

});