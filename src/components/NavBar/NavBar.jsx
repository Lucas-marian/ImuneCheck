import { Link } from 'react-router-dom';
import { FaSyringe, FaCalendarAlt, FaClinicMedical, FaUser, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <h1>ImuniCheck</h1>
            </div>
            <div className='navbar-links'>
                <Link to='/minhas-vacinas'>
                    <FaSyringe /> Minhas Vacinas
                </Link>
                <Link to='/minha-agenda'>
                    <FaCalendarAlt /> Minha Agenda
                </Link>
                <Link to='/minha-unidade'>
                    <FaClinicMedical /> Minha Unidade
                </Link>
                <Link to='/meus-dados'>
                    <FaUser /> Meus Dados
                </Link>
                <Link to='/cadastro'>
                    <FaUserPlus /> Cadastro
                </Link>
            </div>
            <div className='navbar-auth'>
                <button>
                    <FaSignOutAlt /> Sair
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
