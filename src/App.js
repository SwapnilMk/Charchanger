import  React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea';
import About from './components/About';
import Footer from './components/Footer';
import Alert from './components/Alert';
import Error from './components/Error';
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey"
      showAlert(`dark mode enabled`, `success`)
      document.title = `dark`
      setInterval(() => {
        document.title = `hahahaha`
      }, 2000);
      setInterval(() => {
        document.title = `lol`
      }, 1500);
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert(`light mode enabled`, `success`)
      document.title = `light`
    }
  }
  return (
    <BrowserRouter>
    <Navbar tittle="CharChanger" about="About us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Routes>
        <Route path="/" element={<Textarea tittle="Enter text to analyze"/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer footer= "footer"/>
    </BrowserRouter>
  );
}

export default App;
