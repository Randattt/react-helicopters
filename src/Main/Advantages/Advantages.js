import React, { useState } from 'react'
import './Advantages.scss'

function Advantages() {
  const [inputNameValidate, setInputNameValidate] = useState({ value: '' })
  const [inputTelValidate, setInputTelValidate] = useState({ value: '' })
  const [submitValue, setSubmitValue] = useState('Оставить заявку')

  const changeInputName = (e) => {
    setInputNameValidate({ value: e.target.value })
  }
  const changeInputTel = (e) => {
    setInputTelValidate({ value: e.target.value })
  }

  const handlerSubmit = (e) => {
    if (
      inputNameValidate.value.trim() === '' ||
      inputTelValidate.value.trim() === ''
    ) {
      e.preventDefault()
      return alert(
        'Мы очень хотим ответить на Вашу заявку, но Вы не оставили нам свои контакты:)'
      )
    }
    setSubmitValue('Принято! Скоро Вам позвоним :)')
    // e.preventDefault()
  }
  return (
    <div className="Advantages" id="Advantages">
      <div className="container">
        <div className="Advantages__container">
          <div className="Advantages__left">
            <h3 className="Advantages__title">
              что вы получите
              <span> приобретая robinson</span>
            </h3>
            <ul className="Advantages__list">
              <li className="Advantages__item">
                <p className="Advantages__text_1">Статус</p>
                <p className="Advantages__text_2">
                  Вертолет - это престижная покупка, которая подчеркивает не
                  только ваш статус, но и статус вашей компании
                </p>
              </li>
              <li className="Advantages__item">
                <p className="Advantages__text_1">Время</p>
                <p className="Advantages__text_2">
                  Экономия времени при полете на вертолете относительно
                  автомобиля составляет от 3 до 8 раз
                </p>
              </li>
              <li className="Advantages__item">
                <p className="Advantages__text_1">Свобода</p>
                <p className="Advantages__text_2">
                  Вертолет способен доставить вас в те места, куда не добраться
                  на любом другом транспорте для бизнеса или же отдыха
                </p>
              </li>
              <li className="Advantages__item">
                <p className="Advantages__text_1">Отсутствие пробок</p>
                <p className="Advantages__text_2">
                  Никакие пробки и заторы на дорогах не страшны
                </p>
              </li>
            </ul>
          </div>
          <div className="Advantages__right">
            <p className="Advantages__right_text-1">Есть Вопросы?</p>
            <p className="Advantages__right_text-2">
              Оставьте заявку прямо сейчас
            </p>
            <form className="Advantages__right_form" onSubmit={handlerSubmit}>
              <input
                className="Advantages__right_form__input"
                type="text"
                placeholder="Имя"
                pattern="^[a-zA-Zа-яА-Я][а-яА-Яa-zA-Z0-9-_\.]{1,20}$"
                onChange={changeInputName}
              />
              <input
                className="Advantages__right_form__input"
                type="text"
                placeholder="Номер телефона"
                pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                onChange={changeInputTel}
              />
              <input
                className="Advantages__right_form__submit pulseM"
                type="submit"
                value={submitValue}
              />
            </form>
            <p className="Advantages__right_text-3">
              Оставьте заявку, мы перезвоним вам в ближайшее время и ответим на
              все ваши вопросы
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages
