import React, { useEffect, useState } from 'react'
import './Navigation.scss'
import logo from './img/logo.png'
import stats from './img/stats.png'
import search from './img/search.svg'
import { HashLink as Link } from 'react-router-hash-link'

function Navigation() {
  const [scrollNav, setScrollNav] = useState(false)

  const scrollFunc = () => {
    if (window.scrollY >= 120) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc)

    return () => {
      window.removeEventListener('scroll', scrollFunc)
    }
  })

  return (
    <nav className={scrollNav ? 'nav bg' : 'nav'}>
      <div className="nav__logo">
        <p className="logo__main">
          <img src={logo} alt="Логотип" />
        </p>

        <p className="logo__sub">Официальный диллер в РФ</p>
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__links" smooth to="#TwoModels">
            Модели
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__links" smooth to="#MoreInfo">
            Обзор вертолетов
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__links" smooth to="#AboutCompany">
            О компании
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__links" smooth to="#Advantages">
            Преимущества
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__links" smooth to="#Map">
            Калькулятор
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__links" smooth to="#Services">
            Услуги
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__links" smooth to="#News">
            Новости
          </Link>
        </li>
      </ul>
      <div className="nav__right">
        <button className="right__switch_1">
          <span className="right__switch_eng">ENG</span>
        </button>
        &nbsp; | &nbsp;
        <button className="right__switch_2">
          <span className="right__switch_rus">RUS</span>
        </button>
        <button className="right__stats">
          <img src={stats} alt="сравнение" />
        </button>
        <button className="right__search">
          <img src={search} alt="поиск" />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
