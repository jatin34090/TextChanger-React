import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");//weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#282458';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success")
    }
  }

  return (
    <>

      <Router>
        <Navbar title="TextChanger" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextChanger - Word Counter, Character Counter, Remove Extra Spaces " mode={mode} />}>
            </Route>

          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
