import './TwoModels.scss'
import R22 from './img/helicopters/R22.png'
import R44C from './img/helicopters/R44C.png'
import R44CP from './img/helicopters/R44CP.png'
import R44CF from './img/helicopters/R44CF.png'
import R44R from './img/helicopters/R44R.png'
import R44R2 from './img/helicopters/R44R2.png'
import R44Cad from './img/helicopters/R44Cad.png'
import R44CadF from './img/helicopters/R44CadF.png'
import R66T from './img/helicopters/R66T.png'
import R66TM from './img/helicopters/R66TM.png'
import arrowL from './img/arrowL.svg'
import arrowR from './img/arrowR.svg'
import { useState, useEffect } from 'react'
import AllModels from '../AllModels/AllModels'
import { HashLink as Link } from 'react-router-hash-link'

let img1 = 0
let img2 = 0
let img3 = 0
let img4 = 0
let img5 = 0
let img6 = 0
let img7 = 0
let img8 = 0
let img9 = 0
let img10 = 0
function TwoModels() {
  useEffect(() => {
    img1 = new Image()
    img1.src = R22
    img2 = new Image()
    img2.src = R44C
    img3 = new Image()
    img3.src = R44CP
    img4 = new Image()
    img4.src = R44CF
    img5 = new Image()
    img5.src = R44R
    img6 = new Image()
    img6.src = R44R2
    img7 = new Image()
    img7.src = R44Cad
    img8 = new Image()
    img8.src = R44CadF
    img9 = new Image()
    img9.src = R66T
    img10 = new Image()
    img10.src = R66TM
  })

  const [listId, setlistId] = useState(() => {
    return 2
  })
  const [helicopter, setHelicopter] = useState(() => {
    return 4
  })

  const [numbers, setNumbers] = useState(() => {
    return [
      { number: '01', id: 1, class: 'controller__item', isActive: false },
      { number: '02', id: 2, class: 'controller__item', isActive: false },
      { number: '03', id: 3, class: 'controller__item', isActive: true },
      { number: '04', id: 4, class: 'controller__item', isActive: false },
      { number: '05', id: 5, class: 'controller__item', isActive: false },
    ]
  })
  const models = [
    {
      name: 'R22 Beta II',
      img: img1.src,
      speed: '246 км/ч',
      pass: '4+1 пасс',
      distance: '648 км',
    },
    {
      name: 'R44 Clipper I',
      img: img2.src,
      speed: '240 км/ч',
      pass: '4+1 пасс',
      distance: '646 км',
    },
    {
      name: 'R44 Clipper II Popout',
      img: img3.src,
      speed: '240 км/ч',
      pass: '4+1 пасс',
      distance: '646 км',
    },
    {
      name: 'R44 Clipper II Fixed',
      img: img4.src,
      speed: '240 км/ч',
      pass: '4+1 пасс',
      distance: '646 км',
    },
    {
      name: 'R44 Raven I',
      img: R44R,
      speed: '240 км/ч',
      pass: '4+1 пасс',
      distance: '646 км',
    },
    {
      name: 'R44 Raven II',
      img: R44R2,
      speed: '240 км/ч',
      pass: '3+1 пасс',
      distance: '602 км',
    },
    {
      name: 'R44 Cadet',
      img: img7.src,
      speed: '240 км/ч',
      pass: '3+1 пасс',
      distance: '602 км',
    },
    {
      name: 'R44 Cadet with  Floats',
      img: img8.src,
      speed: '240 км/ч',
      pass: '3+1 пасс',
      distance: '602 км',
    },
    {
      name: 'R66 Turbine',
      img: img9.src,
      speed: '270 км/ч',
      pass: '3+1 пасс',
      distance: '602 км',
    },
    {
      name: 'R66 Turbine Marine',
      img: img10.src,
      speed: '270 км/ч',
      pass: '3+1 пасс',
      distance: '650 км',
    },
  ]

  const [isAllModels, setIsAllModels] = useState(false)

  function allModelsHandler() {
    setIsAllModels(!isAllModels)
  }

  function subNumber() {
    setlistId((prevListId) => {
      if (prevListId === 0) {
        pushNumber(4)
        return 4
      } else {
        pushNumber(listId - 1)
        return prevListId - 1
      }
    })
    setHelicopter((prev) => {
      if (prev === 0) {
        return 8
      } else {
        return prev - 2
      }
    })
  }
  function addNumber() {
    setlistId((prevListId) => {
      if (prevListId === 4) {
        pushNumber(0)
        return 0
      } else {
        pushNumber(listId + 1)
        return prevListId + 1
      }
    })
    setHelicopter((prev) => {
      if (prev === 8) {
        return 0
      } else {
        return prev + 2
      }
    })
  }

  function pushNumber(num) {
    let nums = [...numbers]
    nums = [
      { number: '01', id: 1, class: 'controller__item', isActive: false },
      { number: '02', id: 2, class: 'controller__item', isActive: false },
      { number: '03', id: 3, class: 'controller__item', isActive: false },
      { number: '04', id: 4, class: 'controller__item', isActive: false },
      { number: '05', id: 5, class: 'controller__item', isActive: false },
    ]
    const n = nums[num]
    n.isActive = !n.isActive
    nums[num] = n
    setNumbers(nums)
  }

  return isAllModels ? (
    <AllModels models={models} />
  ) : (
    <div className="TwoModels" id="TwoModels">
      <div className="container">
        <div className="TwoModels__model-container">
          <div className="TwoModels__model">
            <div className="TwoModels__model_left">
              <p className="TwoModels__name">{models[helicopter].name}</p>
              <img src={models[helicopter].img} alt="helicopter" />
            </div>
            <ul className="TwoModels__list">
              <li className="TwoModels__item">{models[helicopter].speed}</li>
              <li className="TwoModels__item">{models[helicopter].pass}</li>
              <li className="TwoModels__item">{models[helicopter].distance}</li>
              <li className="TwoModels__item">
                <Link className="TwoModels__item_link" smooth to="#MoreInfo">
                  Подробнее
                </Link>
              </li>
            </ul>
          </div>
          <div className="TwoModels__model">
            <div className="TwoModels__model_left">
              <p className="TwoModels__name">{models[helicopter + 1].name}</p>
              <img src={models[helicopter + 1].img} alt="helicopter" />
            </div>
            <ul className="TwoModels__list">
              <li className="TwoModels__item">
                {models[helicopter + 1].speed}
              </li>
              <li className="TwoModels__item">{models[helicopter + 1].pass}</li>
              <li className="TwoModels__item">
                {models[helicopter + 1].distance}
              </li>
              <li className="TwoModels__item">
                <Link className="TwoModels__item_link" smooth to="#MoreInfo">
                  Подробнее
                </Link>
              </li>
            </ul>
          </div>
          <div className="TwoModels__controller">
            <div className="controller__arrowL" onClick={subNumber}>
              <img src={arrowL} alt="arrow left" />
            </div>
            <ul className="controller__list">
              <li
                className={
                  numbers[0].isActive
                    ? 'controller__item controller__item_active'
                    : 'controller__item'
                }
              >
                {numbers[0].number}
              </li>
              <li
                className={
                  numbers[1].isActive
                    ? 'controller__item controller__item_active'
                    : 'controller__item'
                }
              >
                {numbers[1].number}
              </li>
              <li
                className={
                  numbers[2].isActive
                    ? 'controller__item controller__item_active'
                    : 'controller__item'
                }
              >
                {numbers[2].number}
              </li>
              <li
                className={
                  numbers[3].isActive
                    ? 'controller__item controller__item_active'
                    : 'controller__item'
                }
              >
                {numbers[3].number}
              </li>
              <li
                className={
                  numbers[4].isActive
                    ? 'controller__item controller__item_active'
                    : 'controller__item'
                }
              >
                {numbers[4].number}
              </li>
            </ul>
            <div className="controller__arrowR" onClick={addNumber}>
              <img src={arrowR} alt="arrow right" />
            </div>
          </div>
        </div>

        <div className="TwoModels__text-btn">
          <p className="TwoModels__main-slogan">
            Много информации - не знаете <span>Что лучше выбрать?</span>
          </p>
          <p className="TwoModels__info">
            Оставьте заявку, мы перезвоним вам и ответим на все ваши вопросы
          </p>
          <Link className="TwoModels__btn-quest raiseW" smooth to="#Advantages">
            Оставить заявку
          </Link>
          <button
            className="TwoModels__btn-allmodels raise"
            onClick={allModelsHandler}
          >
            Все модели
          </button>
        </div>
      </div>
    </div>
  )
}

export default TwoModels
