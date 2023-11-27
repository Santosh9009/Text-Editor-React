import { useState } from "react";
import "./App.css";
import Textform from "./Textform";
import Navbar from "./Navbar";
import Toast from 'react-hot-toast';

function App() {
  const [Mode, setMode] =useState('light');

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      Toast.success("Dark mode enabled");
    }else{
      setMode('light');
      Toast.success("Light mode enabled");
    }
  }

  return (
    <div className="App">
      <Navbar alert={alert} mode={Mode} togglebtn={toggleMode}/>
      <Textform mode={Mode} heading='Text Editor'/>
    </div>
  );
}

export default App;

