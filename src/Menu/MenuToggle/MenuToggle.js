import './MenuToggle.scss'
import { useState } from 'react'
import Drawer from './Drawer/Drawer'
import FixedMenu from '../FixedMenu/FixedMenu'
import Backdrop from './Backdrop/Backdrop'

let cls = ['MenuToggle', 'fa']

function MenuToggle() {
  const [isOpen, setIsOpen] = useState(() => {
    return false
  })

  if (isOpen) {
    cls = ['MenuToggle', 'fa']
    cls.push('fa-times')
    cls.push('open')
  } else {
    cls = ['MenuToggle', 'fa']
    cls.push('fa-bars')
  }

  function menuToggle() {
    setIsOpen((prevIsOpen) => {
      return !prevIsOpen
    })
  }

  function backdropHandler() {
    setIsOpen((prevIsOpen) => {
      return !prevIsOpen
    })
  }

  return (
    <div>
      <i className={cls.join(' ')} onClick={menuToggle}></i>
      <Drawer isOpen={isOpen} />
      <FixedMenu />
      {isOpen ? <Backdrop backdropHandler={backdropHandler} /> : null}
    </div>
  )
}

export default MenuToggle
