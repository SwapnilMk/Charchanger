import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea';
import Footer from './components/Footer';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "grey"
      showAlert(`dark mode enabled`, `success`)
      document.title = `dark`
      // setInterval(() => {
      //   document.title = `hahahaha`
      // }, 2000);
      // setInterval(() => {
      //   document.title = `lol`
      // }, 1500);
      
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white"
      showAlert(`light mode enabled`, `success`)
      document.title = `light`
    }
  }
  return (
    <>
    <Navbar tittle="Charchanger" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <Textarea tittle = "Enter text here" />
    </div>
    <Footer footer= "footer"/>
    </>
  );
}

export default App;
