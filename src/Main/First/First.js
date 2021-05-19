import './First.scss'

function First() {
  return (
    <div className="First">
      <div className="overlay">
        <div className="container">
          <div className="First__container">
            <div className="First__info">
              <h1 className="First__slogan">
                <span>Успейте купить </span>
                Robinson R44, R66
              </h1>
              <p className="First__text">
                Желающие приобрести вертолет могут оформить заказ по действующим
                ценам до очередного ежегодного повышения цен в январе 2021 года
              </p>
              <button className="First__button">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First
