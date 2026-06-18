import 'bootstrap-css-only';
import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/General/PrivateRoute';

function App() {

  const userLogged = useSelector(state => state.user);
  const history = useHistory();


  useEffect(() => {
    if(userLogged != null){
      
      history.push('/dashboard');
    }
  }, [userLogged]);

  return (
    <main className="App">
      <Header/>
      <br></br>
      <Switch>
        <Route path="/" exact>
          <Login  />
        </Route>
        <Route path="/login" exact>
          <Login  />
        </Route>
        <Route path="/Registro">
          <Registro />
        </Route>
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
        />
      </Switch>
    </main>
  );
}

export default App;
