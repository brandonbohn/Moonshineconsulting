import Homepage from './Pages/Homepage.tsx';
import ContactUs from './Pages/contactus.tsx';
import Blog from './Pages/mainblog.tsx';
import Footer from './Utilities/Footer.tsx';
import Header from './Utilities/header.tsx';
import SeniorTips from './Pages/seniortips.tsx';
import RehabSolutions from './Pages/rehabsolutions.tsx';
import MoonshinesCorner from './Pages/moonshinescorner.tsx';
import PrivacyPolicy from './Pages/privacypolicy.tsx';
import TermsAndConditions from './Pages/termsandconditions.tsx';
import MoonshinesCornerBlogEntry from './Pages/blogentries/moonshinescornerblogentry.tsx';
import BioPage from './Pages/biopage.tsx';



import { Routes, Route,  } from 'react-router-dom';  
function App() {
  return (
    <div className='background'>
      <Header />
         <Routes>
         <Route path="/" element={<Homepage/>}/> 
         <Route path="/registration" element={<ContactUs/>}/>
         <Route path="/mainblog" element={<Blog/>}/>
         <Route path="/seniortips" element={<SeniorTips/>}/>
         <Route path="/rehabsolutions" element={<RehabSolutions/>}/>
         <Route path="/moonshinescorner" element={<MoonshinesCorner/>}/>
         <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
         <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
         <Route path='/blogentries/moonshinescornerblogentry'element={<MoonshinesCornerBlogEntry/>}/>
          <Route path="/biopage" element={<BioPage/>}/>
       </Routes>
       <Footer />

       </ div>
  );
}

export default App;