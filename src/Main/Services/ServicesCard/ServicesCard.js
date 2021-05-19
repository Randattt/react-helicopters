import React, { useState } from 'react'
import './ServicesCard.scss'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function ServicesCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="ServicesCard">
      <div className="ServicesCard__top">
        <img
          className="ServicesCard__img"
          src={props.img}
          alt="card images"
        ></img>
        <p className="ServicesCard__title">{props.title}</p>
      </div>
      <p className="ServicesCard__text">{props.text}</p>
      <div className="ServicesCard__btn">
        <button className="pulseM" onClick={() => setModalIsOpen(true)}>
          Подробнее
        </button>
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
            width: '500px',
            height: '500px',
          },
        }}
      >
        <div className="ServicesCard__top">
          <img
            className="ServicesCard__img"
            src={props.img}
            alt="card images"
          ></img>
          <p className="ServicesCard__title">{props.title}</p>
        </div>
        <p className="ServicesCard__text">{props.text}</p>
        <p className="ServicesCard__text">{props.text}</p>
        <p className="ServicesCard__text">{props.text}</p>
        <div className="ServicesCard__btn_modal">
          <button onClick={() => setModalIsOpen(false)}>Закрыть</button>
        </div>
      </Modal>
    </div>
  )
}

export default ServicesCard
