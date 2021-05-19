import './Drawer.scss'
import logo from '../../../Navigation/img/logo.png'
import React from 'react'

let cls = ['Drawer']

function Drawer(props) {
  if (!props.isOpen) {
    cls = ['Drawer']
    cls.push('close')
  } else {
    cls = ['Drawer']
  }

  return (
    <React.Fragment>
      <div className={cls.join(' ')}>
        <div className="Drawer__container">
          <div className="Drawer__logo">
            <p className="Drawer__main">
              <img src={logo} alt="Логотип" />
            </p>

            <p className="Drawer__sub">Официальный диллер в РФ</p>
          </div>
          <ul className="Drawer__list_nav">
            <li className="Drawer__item_nav">
              <a href="/history">История компании</a>
            </li>
            <li className="Drawer__item_nav">
              <a href="/models">Каталог вертолетов</a>
            </li>
            <li className="Drawer__item_nav">
              <a href="/catalog">Каталог запчастей</a>
            </li>
            <li className="Drawer__item_nav">
              <a href="/config">Конфигуратор</a>
            </li>
            <li className="Drawer__item_nav">
              <a href="/news">Новости</a>
            </li>
            <li className="Drawer__item_nav">
              <a href="/service">Обслуживание</a>
            </li>
            <li className="Drawer__item_nav">
              <a href="/techinf">Техническая информация</a>
            </li>
            <li className="Drawer__item_nav">
              <a href="/serwices">Услуги</a>
            </li>
          </ul>
          <ul className="Drawer__list_contacts">
            <li className="Drawer__item_contacts">
              <a href="tel: +74957234444">+7 (495) 723-44-44</a>
            </li>
            <li className="Drawer__item_contacts">
              <a href="tel: +74957774344">+7 (495) 777-43-44</a>
            </li>
            <li className="Drawer__item_contacts">
              <a href="mailto: info@aerounion.ru">info@aerounion.ru</a>
            </li>
            <li className="Drawer__item_contacts">
              <a
                href="https://yandex.ru/maps/10990/gelendgik/?ll=38.023142%2C44.583691&mode=search&poi%5Bpoint%5D=38.025153%2C44.593807&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1124380110&sll=30.346418%2C59.931656&sspn=0.071068%2C0.021883&text=летаево&z=14"
                target="_blank"
                rel="noreferrer"
              >
                Мы на карте
              </a>
            </li>
            <li className="Drawer__item_contacts">
              Частота радиосвязи: 123.9 Мгц - UUCH
            </li>
          </ul>
        </div>
        <hr className="Drawer__hr"></hr>
      </div>
    </React.Fragment>
  )
}

export default Drawer
