import { NavLink } from 'react-router-dom';
import style from '../styles/header.module.css';

function Header() {
    return (
        <header className={style.default}>
            <div className={style.header}>
                <NavLink className={({ isActive }) => isActive ? `${style.router} ${style.active}` : style.router} to={'/'}>Home</NavLink>

                <NavLink className={({ isActive }) => isActive ? `${style.router} ${style.active}` : style.router} to={'/about'}>About me</NavLink>

                <NavLink className={({ isActive }) => isActive ? `${style.router} ${style.active}` : style.router} to={'/projects'}>Projects</NavLink>

                <NavLink className={({ isActive }) => isActive ? `${style.router} ${style.active}` : style.router} to={'/shiggy'}>Shiggy</NavLink>
            </div>
        </header>
    );
}

export default Header;