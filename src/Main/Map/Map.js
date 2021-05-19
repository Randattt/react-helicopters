import React, { useState } from 'react'
import './Map.scss'

function Map() {
  const [radioClicked, setRadioClicked] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
  }

  let input1 = (
    <input
      className="Map__radio_1"
      type="radio"
      name="route"
      value="popular"
      id="r1"
      onClick={() => setRadioClicked(true)}
    />
  )
  let input2 = (
    <input
      className="Map__radio_2"
      type="radio"
      name="route"
      value="another"
      id="r2"
      defaultChecked
      onClick={() => setRadioClicked(false)}
    />
  )

  return (
    <div className="Map" id="Map">
      <div className="container">
        <div className="Map__container">
          <div className="Map__container-for-map"></div>
          <div className="Map__right">
            <p className="Map__title">
              на авто <span>или</span>
              <br /> на robinson?
            </p>
            <form className="Map__form">
              <div className="Map__radio_form">
                <p className="Map__radio">
                  {input1}

                  <label htmlFor="r1">Популярный маршрут</label>
                </p>
                <p className="Map__radio">
                  {input2}

                  <label htmlFor="r2">Другой маршрут</label>
                </p>
              </div>
              {radioClicked ? (
                <select
                  id="s1"
                  value="Москва"
                  className="Map__select_from"
                  onChange={handleChange}
                >
                  <option className="Map__select_from__item" value="grapefruit">
                    Москва - Тверь
                  </option>
                </select>
              ) : (
                <React.Fragment>
                  <label className="Map__select_label" htmlFor="s1">
                    От куда:
                  </label>
                  <select
                    id="s1"
                    value="Москва"
                    className="Map__select_from"
                    onChange={handleChange}
                  >
                    <option
                      className="Map__select_from__item"
                      value="grapefruit"
                    >
                      Москва
                    </option>
                  </select>

                  <label className="Map__select_label" htmlFor="s2">
                    Куда:
                  </label>
                  <select
                    id="s2"
                    value="Тверь"
                    className="Map__select_to"
                    onChange={handleChange}
                  >
                    <option className="Map__select_to__item" value="grapefruit">
                      Тверь
                    </option>
                  </select>
                </React.Fragment>
              )}
            </form>
            <div className="Map__info-under-form">
              <p className="Map__info-under-form_text_1">40 мин</p>
              <p className="Map__info-under-form_text_2">2 ч 20 мин</p>
            </div>
            {radioClicked ? (
              <React.Fragment>
                <p className="Map__foot_text">
                  Расстояние Москва - Тверь:
                  <br />
                  по трассе - 183 км / по прямой - 162 км
                </p>
                <p className="Map__foot_text">
                  Поездка Москва – Тверь на машине:
                  <br />
                  183км / 70км/ч = 2ч 20 мин.
                </p>
                <p className="Map__foot_text">
                  Поездка Москва – Тверь на вертолете:
                  <br />
                  162км / 246 км/ч = 40 мин
                </p>
              </React.Fragment>
            ) : (
              <p className="Map__foot_text">
                Поездка Москва – Тверь на машине: 183км / 70км/ч = 2ч 20 мин.
                Поездка Москва – Тверь на вертолете: 162км / 246 км/ч = 40 мин
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
