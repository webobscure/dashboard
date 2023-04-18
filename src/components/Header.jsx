import React from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { home, cart, promo, diagram, wallet, avatar, service, logout } from '../assets';
const Header = () => {

  return (
    <div>
      <nav className="nav ">
        <ul>
          <li>
            <Link to="/" className='logo'>
              <img src={logo} alt="logo" className='icon-logo' />
            </Link>
          </li>
          <li>
            <NavLink to="/">
              <img src={home} alt="" className="icons mt30"/>
              <span className="nav-item">Главная</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shops">
              <img src={cart} alt="" className="icons"/>
              <span className="nav-item">Мои магазины</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/promos">
              <img src={promo} alt="" className="icons"/>
              <span className="nav-item">Промоматериалы</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistic">
              <img src={diagram} alt="" className="icons"/>
              <span className="nav-item">Статистика</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/balance">
              <img src={wallet} alt="" className="icons"/>
              <span className="nav-item">Баланс</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account">
              <img src={avatar} alt="" className="icons"/>
              <span className="nav-item">Персональные данные</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/service">
              <img src={service} alt="" className="icons"/>
              <span className="nav-item">Техподдержка</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className='logout'>
              <img src={logout} alt="" className="icons"/>
              <span className="nav-item">Выход</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
