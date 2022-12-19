import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextYour from './components/TextYour';
import { useState, useSyncExternalStore } from 'react';
import Alert from './components/Alert';
// import Alert from './components/About';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

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
      document.title=" Write Word - Dark mode";
    }
    else {
      setMode('light');
      document.body.style.background = 'white'
      showAlert("Light mode  has been enable", "success")
      document.title=" Write Word - Light mode";
    }
  }
  return (
     <> 
      <Navbar title="Write Word" About="setting"mode={Mode} toggleMode={toggleMode}/>
      {<Alert alert={alert} /> }
      <div className="container my-3">
    
      <TextYour  showAlert={showAlert} heading="Enter text your" mode={Mode} />
      </div>
    </>
  );
}

export default App;
