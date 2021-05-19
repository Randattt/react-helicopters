import React, { useState } from 'react'
import './Footer.scss'

function Footer() {
  const [inputEmailValidate, setInputEmailValidate] = useState({ value: '' })
  const [SubmitValue, setSubmitValue] = useState({ value: 'Подписаться' })

  const changeInputEmail = (e) => {
    setInputEmailValidate({ value: e.target.value })
  }

  const handleSubmit = (e) => {
    if (inputEmailValidate.value.trim() === '') {
      e.preventDefault()
      return alert(
        'Оставьте, пожалуйста, Ваш email, и мы будем высылать туда самые свежие новости!'
      )
    }
    e.preventDefault()
    setSubmitValue({ value: 'Получили!' })
  }
  return (
    <footer className="Footer">
      <div className="Footer__catalog">
        <p className="Footer__catalog_title">Каталог:</p>
        <div className="Footer__catalog_lists">
          <ul className="Footer__catalog_list-1">
            <li className="Footer__catalog_item">
              <a href="/R22-Beta">R22 Beta II</a>
            </li>
            <li className="Footer__catalog_item">
              <a href="/R44-Clipper">R44 Clipper I</a>
            </li>
            <li className="Footer__catalog_item">
              <a href="/R44-Clipper-2-popout">R44 Clipper II Popout</a>
            </li>
            <li className="Footer__catalog_item">
              <a href="/R44-Clipper-2-fixed">R44 Clipper II Fixed</a>
            </li>
            <li className="Footer__catalog_item">
              <a href="/R44-raven">R44 Raven I</a>
            </li>
          </ul>

          <ul className="Footer__catalog_list-2">
            <li className="Footer__catalog_item">
              <a href="/R44-raven-2">R44 Raven II</a>
            </li>
            <li className="Footer__catalog_item">
              <a href="/R44-cadet">R44 Cadet</a>
            </li>
            <li className="Footer__catalog_item">
              <a href="/R44-cadet-floats">R44 Cadet with Floats</a>
            </li>
            <li className="Footer__catalog_item">
              <a href="/R66-turbine">R66 Turbine</a>
            </li>
            <li className="Footer__catalog_item">
              <a href="/R66-tirbine-marine">R66 Turbine Marine</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer__menu">
        <ul className="Footer__menu_1">
          <li className="Footer__menu_item">
            <a href="/config">Конфигуратор</a>
          </li>
          <li className="Footer__menu_item">
            <a href="/models">Наши работы</a>
          </li>
          <li className="Footer__menu_item">
            <a href="/news">Новости</a>
          </li>
          <li className="Footer__menu_item">
            <a href="/service">Обслуживание</a>
          </li>
          <li className="Footer__menu_item">
            <a href="/teh">Тех. информация</a>
          </li>
          <li className="Footer__menu_item">
            <a href="/details">Запчасти</a>
          </li>
        </ul>

        <ul className="Footer__menu_2">
          <li className="Footer__menu_item">
            <a href="/about">О компании</a>
          </li>
          <li className="Footer__menu_item-dop">Доп. услуги:</li>
          <li className="Footer__menu_item Footer__menu_item-g">
            <a href="/color">Покраска</a>
          </li>
          <li className="Footer__menu_item Footer__menu_item-g">
            <a href="/tuning">Тюнинг</a>
          </li>
          <li className="Footer__menu_item Footer__menu_item-g">
            <a href="/moreDetails">Установка доп. оборудования</a>
          </li>
        </ul>
      </div>
      <div className="Footer__slogan-form">
        <p className="Footer__slogan-form_be">
          Будьте в курсе
          <br />
          <span>всех новостей</span>
        </p>
        <p className="Footer__slogan-form_sub">Подпишитесь на рассылку</p>
        <form className="Footer__slogan-form_form" onSubmit={handleSubmit}>
          <input
            className="Footer__slogan-form_input"
            type="text"
            placeholder="Ваш E-mail"
            pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
            onChange={changeInputEmail}
            value={inputEmailValidate.value}
          />
          <input
            type="submit"
            value={SubmitValue.value}
            className="Footer__slogan-form_submit"
          ></input>
        </form>
      </div>
    </footer>
  )
}

export default Footer
