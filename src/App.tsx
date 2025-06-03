import Homepage from './Pages/Homepage.tsx';
import Contactus from './Pages/contactus.tsx';
import Aboutme from './Pages/Aboutme';
import Footer from './Utilities/Footer.tsx';
import Header from './Utilities/header.tsx';



import { Routes, Route,  } from 'react-router-dom';  
function App() {
  return (
    <div className='background'>
      <Header />
         <Routes>
         <Route path="/" element={<Homepage/>}/> 
         <Route path="/registration" element={<Contactus/>}/>
         <Route path="/aboutme" element={<Aboutme/>}/>
       </Routes>
       <Footer />

       </ div>
  );
}

export default App;