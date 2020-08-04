import React, { Component } from 'react'
import MyNavbar from './components/NavBar/MyNavbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home'
import About from './pages/About'
import Tables from './pages/products/Tables'
import Chairs from './pages/products/Chairs'
import OtherEquipments from './pages/products/OtherEquipments'
import ShoppingCart from './pages/cart/ShoppingCart'
// import Payment from './pages/payment/Payment'
import SignUp from './pages/login/SignUp'
import SignIn from './pages/login/SignIn'

class App extends Component {
  render() {

  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/tables' component={Tables} />
      <Route path='/chairs' component={Chairs} />
      <Route path='/other-equipments' component={OtherEquipments} />
      <Route path='/shopping-cart' component={ShoppingCart} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
