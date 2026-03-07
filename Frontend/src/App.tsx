import HomePage from './Pages/hompage';
import ContactUs from './Pages/contactus';
import Blog from './Pages/mainblog';
import Footer from './Utilities/Footer';
import Header from './Utilities/header';
import MoonshinesCorner from './Pages/moonshinescorner';
import PrivacyPolicy from './Pages/privacypolicy';
import TermsAndConditions from './Pages/termsandconditions';
import BioPage from './Pages/biopage';
import EndOfLifeDoulaBlogEntry from './Pages/blogentries/endoflifedoulablogentry';
import EstatePreparationBlogEntry from './Pages/blogentries/estatepreparationblogentry';
import MoonshinesBlog from './Pages/blogentries/moonshinesblogentry';
import MoonshinesCornerBlog from './Pages/blogentries/moonshinescornerblogentry';
import NurseJourneyMemoryBlogEntry from './Pages/blogentries/nursejourneymemoryblogentry';
import SeniorLivingDeskBlogEntry from './Pages/blogentries/seniorlivingdeskblogentry';
import SeniorPolicyBeatBlogEntry from './Pages/blogentries/seniorpolicybeatblogentry';
import SharedMiracleBlogEntry from './Pages/blogentries/sharedmiracleblogentry';
import ThingstoKnowAndDoBlogEntry from './Pages/blogentries/thingstoknowanddoblogentry';
import VoicesInCareBlogEntries from './Pages/blogentries/voicesincareblogentries';
import VoicesInCareBlogEntry from './Pages/blogentries/voicesincareblogentry';
import WhatToDoBeforeYouDieBlogEntry from './Pages/blogentries/what-to-do-before-you-die-blogentry';
import BlogComponent from './components/blogcomponentengine';
import ProductComponent from './components/productgenerator';
import SeniorLivingDesk from './Pages/seniorlivingdesk';
import Voicesincare from  './Pages/Voicesincare';
import SeniorPolicyBeat from './Pages/seniorpolicybeat';
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
          <Route path="/blog/3" element={<EndOfLifeDoulaBlogEntry />} />
          <Route path="/blog/4" element={<EstatePreparationBlogEntry />} />
          <Route path="/blog/5" element={<MoonshinesCornerBlog />} />
          <Route path="/blog/6" element={<NurseJourneyMemoryBlogEntry />} />
          <Route path="/blog/7" element={<SeniorLivingDeskBlogEntry />} />
          <Route path="/blog/8" element={<SharedMiracleBlogEntry />} />
          <Route path="/blog/9" element={<ThingstoKnowAndDoBlogEntry />} />
          <Route path="/blog/10" element={<VoicesInCareBlogEntries />} />
          <Route path="/blog/11" element={<VoicesInCareBlogEntry />} />
          <Route path="/blog/12" element={<WhatToDoBeforeYouDieBlogEntry />} />

          
       </Routes>
       <Footer />

       </ div>
  );
}

export default App;