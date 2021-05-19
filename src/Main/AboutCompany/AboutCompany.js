import './AboutCompany.scss'
import { useState } from 'react'

export default function AboutCompany() {
  const [rightListItems, setRightListItems] = useState([
    { id: 1, clicked: true },
    { id: 2, clicked: false },
    { id: 3, clicked: false },
  ])

  function clickedhandler(num) {
    setRightListItems((prev) => {
      let newOne = [...prev]

      newOne.map((item) => {
        return (item.clicked = false)
      })
      newOne[num - 1].clicked = true
      prev = newOne

      return [...prev]
    })
  }

  return (
    <div className="AboutCompany" id="AboutCompany">
      <div className="AboutCompany__container">
        <div className="AboutCompany__left">
          <p className="AboutCompany__title">
            Кратко <br />
            <span>о компании</span>
          </p>
          <p className="AboutCompany__slogan">
            АэроЮнион Вертолетная Компания» официальный дилер Robinson
            Helicopter Company в России специализируется на продаже и
            обслуживании новых и ресурсных вертолетов Robinson (США).
          </p>
          <ul className="AboutCompany__list">
            <li className="AboutCompany__item">
              <span>15 лет</span>
              <br />
              Успешной работы
            </li>
            <li className="AboutCompany__item">
              <span>5000+</span>
              <br />
              Довольных клиентов
            </li>
            <li className="AboutCompany__item">
              <span>100+</span>
              <br />
              Человек в команде
            </li>
          </ul>
          <button className="AboutCompany__btn pulseM">Узнать больше</button>
        </div>
        <ul className="AboutCompany__right">
          <li
            className={
              rightListItems[0].clicked
                ? 'AboutCompany__right_item AboutCompany__right_1 AboutCompany__right-open'
                : 'AboutCompany__right_item AboutCompany__right_1'
            }
            onClick={clickedhandler.bind(this, 1)}
          >
            <p>01</p>
            <p className="AboutCompany__right_paragh">Полный комплекс услуг</p>
          </li>
          <li
            className={
              rightListItems[1].clicked
                ? 'AboutCompany__right_item AboutCompany__right_2 AboutCompany__right-open'
                : 'AboutCompany__right_item AboutCompany__right_2'
            }
            onClick={clickedhandler.bind(this, 2)}
          >
            <p>02</p>
            <p className="AboutCompany__right_paragh">Полный комплекс услуг</p>
          </li>
          <li
            className={
              rightListItems[2].clicked
                ? 'AboutCompany__right_item AboutCompany__right_3 AboutCompany__right-open'
                : 'AboutCompany__right_item AboutCompany__right_3'
            }
            onClick={clickedhandler.bind(this, 3)}
          >
            <p>03</p>
            <p className="AboutCompany__right_paragh">Полный комплекс услуг</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
