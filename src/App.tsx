import Homepage from './Pages/Homepage.tsx';
import Contactus from './Pages/contactus.tsx';
import Aboutme from './Pages/Aboutme';
import Header from '../src/Utilities/header.tsx';

import '../src/index.css';
import { Routes, Route,  } from 'react-router-dom';  
function App() {
  return (
    <div> < div className='  text background'>

 
    <Header/>
         <Routes>
         <Route path="/" element={<Homepage/>}/> 
         <Route path="/registration" element={<Contactus/>}/>
         <Route path="/aboutme" element={<Aboutme/>}/>
       </Routes>

   
       </ div></div>
  );
}

export default App;