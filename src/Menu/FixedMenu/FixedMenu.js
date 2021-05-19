import './FixedMenu.scss'
import vector from './img/vector.png'

function FixedMenu() {
  return (
    <div className="FixedMenu">
      <div className="FixedMenu__leaf">
        <div className="FixedMenu__slogan">
          <p>Листайте дальше</p>
        </div>
        <p>
          <img
            className="FixedMenu__vector"
            src={vector}
            alt="стрелочка вниз"
          />
        </p>
      </div>
    </div>
  )
}

export default FixedMenu
