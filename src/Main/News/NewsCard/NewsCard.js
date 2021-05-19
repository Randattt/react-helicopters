import React, { useState } from 'react'
import './NewsCard.scss'
import Modal from 'react-modal'

function NewsCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="NewsCard">
      <img className="NewsCard__img" src={props.img} alt="news images"></img>
      <div className="NewsCard__under-img">
        <p className="NewsCard__date">{props.date}</p>
        <p className="NewsCard__title">{props.title}</p>
        <p className="NewsCard__text">{props.text}</p>
        <div className="NewsCard__button">
          <button className="pulseM" onClick={() => setModalIsOpen(true)}>
            Подробнее
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            zIndex: '5000',
            backgroundColor: 'rgba(0,0,0, 0.8)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#2e2e2e',
            width: '1200px',
            height: '700px',
          },
        }}
      >
        <div className="NewsCard__under">
          <img
            className="NewsCard__img-modal"
            src={props.img}
            alt="news images"
          ></img>
          <p className="NewsCard__date-modal">{props.date}</p>
          <p className="NewsCard__title">{props.title}</p>
        </div>

        <div className="NewsCard__under-img-model">
          <p className="NewsCard__date">{props.date}</p>
          <p className="NewsCard__title">{props.title}</p>
          <p className="NewsCard__text">{props.text}</p>
          <p className="NewsCard__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima
            odit porro fugiat. Tenetur culpa eaque, aut quasi ipsum pariatur
            voluptatibus rerum sed maiores impedit mollitia tempore incidunt
            velit. Ad! Iure quo, ipsam dolores animi, possimus impedit, facere
            ex dignissimos quia beatae modi! Possimus fuga, tempore provident at
            aspernatur veniam, ex velit rerum porro facilis necessitatibus
            corporis voluptatum molestias hic. Saepe quasi dignissimos illo
            temporibus cumque consectetur tempore sit ad cum repellat totam
            velit corrupti nesciunt molestias accusamus, natus, numquam deserunt
            architecto consequatur modi at inventore qui sed harum? At! Officiis
            iusto esse id voluptas et fugiat cumque. Laudantium incidunt quaerat
            veniam aut? Dignissimos corrupti a est, blanditiis quisquam nihil
            nam qui impedit ipsum officia, optio esse id vel quod. Officia velit
            minima, sint quos id eius minus culpa, animi dignissimos, dolorum
            enim. Sit nesciunt veritatis reiciendis, enim possimus optio ipsa
            vero, esse maxime vitae quis dignissimos corporis similique harum?
            Cupiditate, deleniti accusamus. Laudantium quod sit, doloremque
            corrupti sed quo, magnam culpa distinctio velit neque beatae illo
            temporibus est facere! Ipsum velit amet officia, sint consequatur
            nobis sapiente ullam unde! Velit cupiditate vero cumque voluptates
            quae sit rem, in quia cum blanditiis. Corrupti, nisi repellendus,
            quidem architecto quaerat animi earum nulla tempore dicta
            accusantium voluptates, odio dolorem! Minima, saepe dolorem.
          </p>

          <div className="NewsCard__button">
            <button onClick={() => setModalIsOpen(false)}>Закрыть</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default NewsCard
