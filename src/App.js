import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import WhiskeyDetails from './pages/WhiskeyDetails'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = "/whiskeydetail/{:id}" component = {WhiskeyDetails}/>
      </Switch>
    </div>
  );
}

export default App;
