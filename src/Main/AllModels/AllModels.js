import './AllModels.scss'
import { HashLink as Link } from 'react-router-hash-link'

function AllModels(props) {
  return (
    <div className="AllModels" id="TwoModels">
      <div className="container">
        <div className="AllModels__all">
          {props.models.map((model) => {
            return (
              <div
                key={`${model.name}_helicopter`}
                className="AllModels__container pulse"
              >
                <div className="AllModels__ups">
                  <p className="AllModels__name">{model.name}</p>
                  <img src={model.img} alt="helicopter" />
                </div>
                <ul className="AllModels__list">
                  <li className="AllModels__item">{model.speed}</li>
                  <li className="AllModels__item">{model.pass}</li>
                  <li className="AllModels__item">{model.distance}</li>
                  <li className="AllModels__item">
                    <Link
                      className="AllModels__item-link"
                      smooth
                      to="#MoreInfo"
                    >
                      Подробнее
                    </Link>
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllModels
