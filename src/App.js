import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header></Header>
            <h1>Checkout page</h1>
          </Route>
          <Route path='/login'>
            <h1>Login page</h1>
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
