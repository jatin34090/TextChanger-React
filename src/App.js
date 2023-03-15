import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState();//weather dark mode is enabled or not
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
  const toggleMode = ()=>{
    if(mode==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor = '#282458';
    document.body.style.color = 'white';
    showAlert("Dark Mode has been enabled", "success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText="About us"/> */}
    {/* <Navbar /> */}
    {/* <Router> */}
    <Navbar title = "TextChanger"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
            
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>

        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
</div>
{/* </Router> */}
    </>
    );
}

export default App;
