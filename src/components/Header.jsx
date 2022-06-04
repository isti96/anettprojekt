import logo from '../images/Easypay_logo.svg';
import './Header.css';
import { Navbar } from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <div className="header-container">
            <div className='name-logo-container'>
                <div className='logo'>
                    <img src={logo} alt=""></img>
                </div>
            </div>
            <div className='menubar'>
                <NavLink to='/mybills'>
                    <button className='navbar-button'>
                        <Navbar name='My bills' className='menubar-item'></Navbar>
                    </button>
                </NavLink>
                <NavLink to='/friends'>
                <button className='navbar-button'>
                    <Navbar name='Friends' className='menubar-item'></Navbar>
                    </button>
                </NavLink>
                <NavLink to='/chat'>
                <button className='navbar-button'>
                    <Navbar name='Chat' className='menubar-item'></Navbar>
                    </button>
                </NavLink>
                <NavLink to='/calendar'>
                <button className='navbar-button'>
                    <Navbar name='Calendar' className='menubar-item'></Navbar>
                    </button>
                </NavLink>
                <FontAwesomeIcon icon={faUser} id="menubar-user" className="menubar-item"></FontAwesomeIcon>
            </div>
        </div >
    );
}