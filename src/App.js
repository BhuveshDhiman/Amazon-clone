import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in

        dispatch({ type: 'SET_USER', user: authUser });
      } else {
        //user is logged out

        dispatch({ type: 'SET_USER', user: null });
      }
    });
    return () => {
      // any cleanup operations go in here
      unsubscribe();
    };
  }, []);
  console.log('USER IS >>>', user);

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

export default App;
