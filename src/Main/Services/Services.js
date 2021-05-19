import React, { useState } from 'react'
import './Services.scss'
import helicopter from './img/helicopter.svg'
import tuning from './img/tuning.svg'
import spare from './img/spare.svg'
import instruments from './img/instruments.svg'
import plus from './img/plus.svg'
import meh from './img/meh.svg'
import ServicesCard from './ServicesCard/ServicesCard'

function Services() {
  const [cards] = useState([
    {
      id: 1,
      img: helicopter,
      title: 'Продажа вертолетов',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют',
    },
    {
      id: 2,
      img: meh,
      title: 'Техническое обслуживание',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют',
    },
    {
      id: 3,
      img: spare,
      title: 'Запчасти',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют',
    },
    {
      id: 4,
      img: instruments,
      title: 'Установка оборудования',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют',
    },
    {
      id: 5,
      img: tuning,
      title: 'Тюнинг',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют',
    },
    {
      id: 6,
      img: plus,
      title: 'Дополнительные услуги',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют',
    },
  ])

  return (
    <div className="Services" id="Services">
      <div className="container">
        <div className="Services__container">
          {cards.map((card) => {
            return (
              <ServicesCard
                key={`${card.id}.${card.title}`}
                id={card.id}
                img={card.img}
                title={card.title}
                text={card.text}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
