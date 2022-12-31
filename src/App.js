import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextYour from './components/TextYour';
import React, { useState, useSyncExternalStore } from 'react';
import Alert from './components/Alert';
import Abouts from './components/Abouts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.background = 'black'
      showAlert("Dark mode  has been enable", "success")
      document.title = " Write Word - Dark mode";
    }
    else {
      setMode('light');
      document.body.style.background = 'white'
      showAlert("Light mode  has been enable", "success")
      document.title = " Write Word - Light mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Write Word" About="About" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/Abouts">
              <Abouts />
            </Route>
            <Route path="/">  <TextYour showAlert={showAlert} heading="Enter text your" mode={Mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
