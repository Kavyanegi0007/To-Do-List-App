
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Todos from './components/Todos';

function App() {

  const [darkMode, setDarkMode] = useState(false)


  const dark = {
    color: 'pink',
    backgroundColor: 'black',
    height: '100vh',
    formControlColor:'grey'
    
  }

  const light ={
    color: 'black',
    backgroundColor : 'white'
  }
  return (
   <>
   <div className="container-fluid" style = { darkMode ? dark : light }
  >
   <Header   darkMode={darkMode} setDarkMode={setDarkMode} />
   <Todos/>

   </div>
   </>
  );
}

export default App;
