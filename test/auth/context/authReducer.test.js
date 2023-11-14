import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

const user = { id: 'ABC', name: 'JuanCa' }
const action = { type: types.login, payload: user }

describe('testing on authReducer', () => {

    test('should return the default state', () => { 
        const newState = authReducer( action, {} );
        expect( newState ).toBe( action );
    });  

    test('should call the login authenticate and set the user', () => { 
        const { logged, user } = authReducer( {}, action );

        expect( logged ).toBe( true );
        expect( user ).toBe( action.payload );
    });

    test('should call logout delete the username and logged in false', () => { 
        const action = { type: types.logout }
        const { logged, name } = authReducer( {}, action );

        expect( logged ).toBe( false );
        expect( name ).toBe( null );
    });
})