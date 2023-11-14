import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()

        // con "replace: true", el usuario no puede retroceder
        // a la pagina donde estaba. Tendrá que validar usuario de nuevo.
        navigate('/login', { replace: true })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                        to="/dc"
                        >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                        to="/search"
                        >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        { user?.name }
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}