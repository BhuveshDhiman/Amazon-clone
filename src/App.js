import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/'>
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* localhost.com */
}
{
  /* localhost.com/login */
}
{
  /* localhost.com/checkout */
}
export default App;
