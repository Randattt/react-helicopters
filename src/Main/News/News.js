import React, { useState } from 'react'
import './News.scss'
import first from './img/1.png'
import second from './img/2.png'
import third from './img/3.png'
import fourth from './img/4.png'
import fith from './img/5.png'
import sixth from './img/6.png'
import seventh from './img/7.png'
import eigth from './img/8.png'
import NewsCard from './NewsCard/NewsCard'

function News() {
  const [NewsCards] = useState([
    {
      id: 1,
      img: first,
      title: 'Соглашение с аэропортом в Калуге',
      date: '10.02.2021',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения.',
    },
    {
      id: 2,
      img: second,
      title: 'Соглашение с аэропортом в Калуге',
      date: '10.02.2021',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения.',
    },
    {
      id: 3,
      img: third,
      title: 'Соглашение с аэропортом в Калуге',
      date: '10.02.2021',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения.',
    },
    {
      id: 4,
      img: fourth,
      title: 'Соглашение с аэропортом в Калуге',
      date: '10.02.2021',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения.',
    },
    {
      id: 5,
      img: fith,
      title: 'Соглашение с аэропортом в Калуге',
      date: '10.02.2021',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения.',
    },
    {
      id: 6,
      img: sixth,
      title: 'Соглашение с аэропортом в Калуге',
      date: '10.02.2021',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения.',
    },
    {
      id: 7,
      img: seventh,
      date: '10.02.2021',
      title: 'Соглашение с аэропортом в Калуге',

      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения.',
    },
    {
      id: 8,
      img: eigth,
      date: '10.02.2021',
      title: 'Соглашение с аэропортом в Калуге',
      text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения.',
    },
  ])

  return (
    <div className="News" id="News">
      <div className="container">
        <ul className="News__cards">
          {NewsCards.map((card) => (
            <NewsCard
              key={`${card.id}/${card.date}`}
              id={card.id}
              img={card.img}
              date={card.date}
              text={card.text}
              title={card.title}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default News
