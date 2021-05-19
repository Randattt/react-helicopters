import './MoreInfo.scss'
import arrowL from '../TwoModels/img/arrowL.svg'
import arrowR from '../TwoModels/img/arrowR.svg'
import { useState } from 'react'

export default function MoreInfo() {
  const [num, setNum] = useState(1)

  function addNumber() {
    if (num === 4) {
      setNum(1)
    } else {
      setNum(num + 1)
    }
  }
  function subNumber() {
    if (num === 1) {
      setNum(4)
    } else {
      setNum(num - 1)
    }
  }

  const [helicopters] = useState([
    {
      id: 1,
      name: 'Robinson R22',
      subName: 'R22',
      speed: '246',
      liters: '850',
    },
    {
      id: 2,
      name: 'Robinson R44 I',
      subName: 'R44 |',
      speed: '240',
      liters: '870',
    },
    {
      id: 3,
      name: 'Robinson R44 II',
      subName: 'R44 ||',
      speed: '240',
      liters: '870',
    },
    {
      id: 4,
      name: 'Robinson R66',
      subName: 'R66',
      speed: '275',
      liters: '870',
    },
  ])

  function clickedItem(i) {
    setNum(i)
  }

  return (
    <div className="MoreInfo" id="MoreInfo">
      <div className="MoreInfo__container">
        <div className="MoreInfo__left">
          <div className="handler_1">
            <button className="handler_1__btn" onClick={subNumber}>
              <img src={arrowL} alt="arrow left" />
            </button>

            <ul className="handler__list_1">
              <li className="handler__item_1">
                <span>0{num}</span>
              </li>
              &nbsp; / &nbsp;
              <li className="handler__item_1">04</li>
            </ul>
            <button className="handler_1__btn" onClick={addNumber}>
              <img src={arrowR} alt="arrow right" />
            </button>
          </div>
          <h2 className="MoreInfo__name">{helicopters[num - 1].name}</h2>
          <div className="MoreInfo__left_smaller">
            <p className="MoreInfo__slogan">
              Значимость этих проблем настолько очевидна, что укрепление и
              развитие структуры требуют определения и уточнения дальнейших
              направлений развития.
            </p>
            <div className="MoreInfo__btns">
              <button className="MoreInfo__btn MoreInfo__btn_more raiseW">
                Подробнее
              </button>
              <button className="MoreInfo__btn MoreInfo__btn_configurator raise">
                Конфигуратор
              </button>
            </div>
          </div>
        </div>
        <div className="MoreInfo__right">
          <ul className="MoreInfo__right_list">
            <li className="MoreInfo__right_item">
              <span>{helicopters[num - 1].speed}</span>
              <br />
              км/ч
            </li>
            <li className="MoreInfo__right_item">
              <span>6</span>
              <br />
              человек
            </li>
            <li className="MoreInfo__right_item">
              <span>{helicopters[num - 1].liters}</span>
              <br />
              литров
            </li>
            <li className="MoreInfo__right_item">
              <span>5</span>
              <br />
              часов
            </li>
          </ul>
          <ul className="handler__list_2">
            {helicopters.map((helicopter) => {
              return (
                <li
                  key={`${helicopter.name}_${helicopter.id}`}
                  onClick={() => clickedItem(helicopter.id)}
                  className={
                    helicopter.id === num
                      ? 'handler__item_2 handler__item_2-touched'
                      : 'handler__item_2'
                  }
                >
                  {helicopter.subName}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
