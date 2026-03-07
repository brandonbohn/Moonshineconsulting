import HomePage from './Pages/hompage.tsx';
import ContactUs from './Pages/contactus.tsx';
import Blog from './Pages/mainblog.tsx';
import Footer from './Utilities/Footer.tsx';
import Header from './Utilities/header.tsx';
import MoonshinesCorner from './Pages/moonshinescorner.tsx';
import PrivacyPolicy from './Pages/privacypolicy.tsx';
import TermsAndConditions from './Pages/termsandconditions.tsx';
import BioPage from './Pages/biopage.tsx';
import EndOfLifeDoulaBlogEntry from './Pages/blogentries/endoflifedoulablogentry.tsx';
import EstatePreparationBlogEntry from './Pages/blogentries/estatepreparationblogentry.tsx';
import MoonshinesBlog from './Pages/blogentries/moonshinesblogentry.tsx';
import MoonshinesCornerBlog from './Pages/blogentries/moonshinescornerblogentry.tsx';
import NurseJourneyMemoryBlogEntry from './Pages/blogentries/nursejourneymemoryblogentry.tsx';
import SeniorLivingDeskBlogEntry from './Pages/blogentries/seniorlivingdeskblogentry.tsx';
import SeniorPolicyBeatBlogEntry from './Pages/blogentries/seniorpolicybeatblogentry.tsx';
import SharedMiracleBlogEntry from './Pages/blogentries/sharedmiracleblogentry.tsx';
import ThingstoKnowAndDoBlogEntry from './Pages/blogentries/thingstoknowanddoblogentry.tsx';
import VoicesInCareBlogEntries from './Pages/blogentries/voicesincareblogentries.tsx';
import VoicesInCareBlogEntry from './Pages/blogentries/voicesincareblogentry.tsx';
import WhatToDoBeforeYouDieBlogEntry from './Pages/blogentries/what-to-do-before-you-die-blogentry.tsx';

import BlogComponent from './components/blogcomponentengine.tsx';
import ProductComponent from './components/productgenerator.tsx';
import SeniorLivingDesk from './Pages/seniorlivingdesk.tsx';
import Voicesincare from  './Pages/Voicesincare.tsx';
import SeniorPolicyBeat from './Pages/seniorpolicybeat.tsx';
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
         <Route path="/biopage" element={<BioPage/>}/>
         <Route path="/blogcomponent" element={<BlogComponent/>}/>
         <Route path="/productcomponent" element={<ProductComponent/>}/>
         <Route path="/seniorpolicybeat" element={<SeniorPolicyBeat/>}/>
         <Route path="/seniorlivingdesk" element={<SeniorLivingDesk/>}/>
          <Route path="/voicesincare" element={<Voicesincare/>}/>
          <Route path="/blog/endoflifedoulablogentry" element={<EndOfLifeDoulaBlogEntry />} />
          <Route path="/blog/estatepreparationblogentry" element={<EstatePreparationBlogEntry />} />
          <Route path="/blog/moonshinesblogentry" element={<MoonshinesBlog />} />
          <Route path="/blog/moonshinescornerblogentry" element={<MoonshinesCornerBlog />} />
          <Route path="/blog/nursejourneymemoryblogentry" element={<NurseJourneyMemoryBlogEntry />} />
          <Route path="/blog/seniorlivingdeskblogentry" element={<SeniorLivingDeskBlogEntry />} />
          <Route path="/blog/seniorpolicybeatblogentry" element={<SeniorPolicyBeatBlogEntry />} />
          <Route path="/blog/sharedmiracleblogentry" element={<SharedMiracleBlogEntry />} />
          <Route path="/blog/thingstoknowanddoblogentry" element={<ThingstoKnowAndDoBlogEntry />} />
          <Route path="/blog/voicesincareblogentries" element={<VoicesInCareBlogEntries />} />
          <Route path="/blog/voicesincareblogentry" element={<VoicesInCareBlogEntry />} />
          <Route path="/blog/what-to-do-before-you-die-blogentry" element={<WhatToDoBeforeYouDieBlogEntry />} />
          <Route path="/blog/1" element={<MoonshinesBlog />} />
          <Route path="/blog/2" element={<SeniorPolicyBeatBlogEntry />} />

          
       </Routes>
       <Footer />

       </ div>
  );
}

export default App;