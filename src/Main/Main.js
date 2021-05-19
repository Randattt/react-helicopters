import './Main.scss'
import Navigation from '../Navigation/Navigation'
import MenuToggle from '../Menu/MenuToggle/MenuToggle'
import First from './First/First'
import TwoModels from './TwoModels/TwoModels'
import MoreInfo from './MoreInfo/MoreInfo'
import AboutCompany from './AboutCompany/AboutCompany'
import Advantages from './Advantages/Advantages'
import Map from './Map/Map'
import Services from './Services/Services'
import News from './News/News'
import Footer from './Footer/Footer'
import { Route, Switch, withRouter } from 'react-router-dom'

function Main() {
  return (
    <div className="Main">
      <Switch />
      <Navigation />
      <MenuToggle />
      <First />
      <TwoModels />
      <MoreInfo />
      <AboutCompany />
      <Advantages />
      <Map />
      <Services />
      <News />
      <Footer />

      <Switch>
        {/* <Route exact path="/first" component={First} /> */}
        <Route exact path="/TwoModels" component={TwoModels} />
        <Route exact path="/MoreInfo" component={MoreInfo} />
        <Route exact path="/AboutCompany" component={AboutCompany} />
        <Route exact path="/Advantages" component={Advantages} />
        <Route exact path="/Map" component={Map} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/News" component={News} />
      </Switch>
    </div>
  )
}

export default withRouter(Main)
