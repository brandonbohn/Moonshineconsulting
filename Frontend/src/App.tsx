import HomePage from './Pages/hompage.tsx';
import ContactUs from './Pages/contactus.tsx';
import Blog from './Pages/mainblog.tsx';
import Footer from './Utilities/Footer.tsx';
import Header from './Utilities/header.tsx';
import MoonshinesCorner from './Pages/moonshinescorner.tsx';
import PrivacyPolicy from './Pages/privacypolicy.tsx';
import TermsAndConditions from './Pages/termsandconditions.tsx';
import BioPage from './Pages/biopage.tsx';

import BlogComponent from './components/blogcomponentengine.tsx';
import ProductComponent from './components/productgenerator.tsx';
import SeniorLivingDesk from './Pages/seniorlivingdesk.tsx';
import Voicesincare from  './Pages/Voicesincare.tsx';
import SeniorPolicyBeat from './Pages/seniorpolicybeat.tsx';
import BlogPost from './Pages/blogpost.tsx';
import { Routes, Route,  } from 'react-router-dom';  
function App() {
  return (
    <div className='background'>
      <Header />
         <Routes>
        <Route path="/" element={<HomePage/>}/> 
         <Route path="/registration" element={<ContactUs/>}/>
         <Route path="/mainblog" element={<Blog/>}/>
         <Route path="/moonshinescorner" element={<MoonshinesCorner/>}/>
         <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
         <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
         <Route path="/blog/:slugOrId" element={<BlogPost/>}/>
         <Route path="/blogentries/:slugOrId" element={<BlogPost/>}/>
         <Route path="/biopage" element={<BioPage/>}/>
         <Route path="/blogcomponent" element={<BlogComponent/>}/>
         <Route path="/productcomponent" element={<ProductComponent/>}/>
         <Route path="/seniorpolicybeat" element={<SeniorPolicyBeat/>}/>
         <Route path="/seniorlivingdesk" element={<SeniorLivingDesk/>}/>
          <Route path="/voicesincare" element={<Voicesincare/>}/>

          
          

        
       </Routes>
       <Footer />

       </ div>
  );
}

export default App;