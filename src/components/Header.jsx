import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { home, cart, promo, diagram, wallet, avatar, service, logout } from '../assets';
const Header = () => {

  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/" className='logo'>
              <img src={logo} alt="logo" className='icon-logo' />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={home} alt="" className="icons mt30"/>
              <span className="nav-item">Главная</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={cart} alt="" className="icons"/>
              <span className="nav-item">Мои магазины</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={promo} alt="" className="icons"/>
              <span className="nav-item">Промоматериалы</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={diagram} alt="" className="icons"/>
              <span className="nav-item">Статистика</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={wallet} alt="" className="icons"/>
              <span className="nav-item">Баланс</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={avatar} alt="" className="icons"/>
              <span className="nav-item">Персональные данные</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={service} alt="" className="icons"/>
              <span className="nav-item">Техподдержка</span>
            </a>
          </li>
          <li>
            <a href="/" className='logout'>
              <img src={logout} alt="" className="icons"/>
              <span className="nav-item">Выход</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
