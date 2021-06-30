import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";

import { GlobalProvider } from './contex/GlobalState'
// import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App" style={{ maxWidth: '30rem', margin: '4rem auto' }}>
          <div className='container'>
            <Switch>
              <Route path='/add'>
                <AddUser />
              </Route>
              <Route path='/edit/:id' >
                <EditUser />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
