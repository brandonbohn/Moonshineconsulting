import { Homepage } from './Pages/Homepage.tsx';
import ContactUs from './Pages/contactus.tsx';
import Blog from './Pages/mainblog.tsx';
import Footer from './Utilities/Footer.tsx';
import Header from './Utilities/header.tsx';
import HealthandWellness from './Pages/healthandwellness.tsx';
import MoonshinesCorner from './Pages/moonshinescorner.tsx';
import PrivacyPolicy from './Pages/privacypolicy.tsx';
import TermsAndConditions from './Pages/termsandconditions.tsx';
import MoonshinesCornerBlogEntry from './Pages/blogentries/moonshinescornerblogentry.tsx';
import BioPage from './Pages/biopage.tsx';
import SeniorPolicyBeat from './Pages/seniorpolicybeat.tsx';
import BlogComponent from './components/blogcomponentengine.tsx';
import ProductComponent from './components/productgenerator.tsx';
import SeniorPolicyBeatBlogEntry from './Pages/blogentries/seniorpolicybeatblogentry.tsx';
import SeniorLivingDesk from './Pages/seniorlivingdesk.tsx';


import { Routes, Route,  } from 'react-router-dom';  
function App() {
  return (
    <div className='background'>
      <Header />
         <Routes>
         <Route path="/" element={<Homepage/>}/> 
         <Route path="/registration" element={<ContactUs/>}/>
         <Route path="/mainblog" element={<Blog/>}/>
         <Route path="/healthandwellness" element={<HealthandWellness/>}/>
         <Route path="/moonshinescorner" element={<MoonshinesCorner/>}/>
         <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
         <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
         <Route path='/blogentries/moonshinescornerblogentry'element={<MoonshinesCornerBlogEntry/>}/>
          <Route path="/biopage" element={<BioPage/>}/>
          <Route path="blogentries/seniorpolicybeatblogentry" element={<SeniorPolicyBeatBlogEntry/>}/>
          <Route path="/blogcomponent" element={<BlogComponent/>}/>
          <Route path="/productcomponent" element={<ProductComponent/>}/>
          <Route path="/seniorpolicybeat" element={<SeniorPolicyBeat/>}/>
          <Route path="/seniorlivingdesk" element={<SeniorLivingDesk/>}/>
       

          
          

        
       </Routes>
       <Footer />

       </ div>
  );
}

export default App;