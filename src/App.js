import Homepage from './Pages/Homepage';
import Registration from './Pages/Registration';
import Aboutme from './Pages/Aboutme';
import Header from './Utilities/header';
import Footer from './Utilities/Footer';


import { Routes, Route,  } from 'react-router-dom';  
function App() {
  return (
    <div className='background'>


    <Header/>
         <Routes>
         <Route path="/" element={<Homepage/>}/> 
         <Route path="/registration" element={<Registration/>}/>
         <Route path="/aboutme" element={<Aboutme/>}/>
       </Routes>

   <Footer/>
       </ div>
  );
}

export default App;
