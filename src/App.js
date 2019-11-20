import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login/login';
import Logout from './components/Logout/logout';
import Starwars from './components/Starwars/starwars';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/starwars" component={Starwars} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default App;
