import HomePage from './Pages/hompage';
import ContactUs from './Pages/contactus';
import Blog from './Pages/mainblog';
import Footer from './Utilities/Footer';
import Header from './Utilities/header';
import MoonshinesCorner from './Pages/moonshinescorner';
import PrivacyPolicy from './Pages/privacypolicy';
import TermsAndConditions from './Pages/termsandconditions';

import BlogComponent from './components/blogcomponentengine';
import ReusableBlogEntry from './components/ReusableBlogEntry';
import SeniorLivingDesk from './Pages/seniorlivingdesk';
import Voicesincare from  './Pages/Voicesincare';
import SeniorPolicyBeat from './Pages/seniorpolicybeat';
import BlogPostPage from './Pages/BlogPostPage';
import { Routes, Route,  } from 'react-router-dom';  
function App() {
  return (
    <div className='background'>
      <Header />
         <Routes>
           <Route path="/blogs/:slug" element={<BlogPostPage />} />
        <Route path="/" element={<HomePage/>}/> 
         <Route path="/registration" element={<ContactUs/>}/>
         <Route path="/mainblog" element={<Blog/>}/>
         <Route path="/moonshinescorner" element={<MoonshinesCorner/>}/>
         <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
         <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
         <Route path="/blogcomponent" element={<BlogComponent/>}/>
         <Route path="/seniorpolicybeat" element={<SeniorPolicyBeat/>}/>
         <Route path="/seniorlivingdesk" element={<SeniorLivingDesk/>}/>
          <Route path="/voicesincare" element={<Voicesincare/>}/>
          <Route path="/blog/endoflifedoulablogentry" element={<ReusableBlogEntry entryKeys={['endoflifedoulablogentry', 'what-is-an-end-of-life-doula-and-what-role-do-they-have-in-end-of-life-care', '5']} />} />
          <Route path="/blog/estatepreparationblogentry" element={<ReusableBlogEntry entryKeys={['estatepreparationblogentry', 'what-to-do-before-you-die-part-1-estate-preparation', '10']} />} />
          <Route path="/blog/moonshinesblogentry" element={<ReusableBlogEntry entryKeys={['moonshinesblogentry', '1']} />} />
          <Route path="/blog/moonshinescornerblogentry" element={<ReusableBlogEntry entryKeys={['moonshinescornerblogentry', 'moonshinesblogentry', '1']} />} />
          <Route path="/blog/nursesjourneyblogentry" element={<ReusableBlogEntry entryKeys={['nursesjourneyblogentry', 'nursejourneymemoryblogentry', 'a-nurses-journey-memory-lane', '4']} />} />
          <Route path="/blog/nursejourneymemoryblogentry" element={<ReusableBlogEntry entryKeys={['nursesjourneyblogentry', 'nursejourneymemoryblogentry', 'a-nurses-journey-memory-lane', '4']} />} />
          <Route path="/blog/seniorlivingdeskblogentry" element={<ReusableBlogEntry entryKeys={['seniorlivingdeskblogentry', 'thingstoknowanddoblogentry', 'senior-living-desk-funeral-planning-2026', '9']} />} />
          <Route path="/blog/seniorpolicybeatblogentry" element={<ReusableBlogEntry entryKeys={['seniorpolicybeatblogentry', 'senior-policy-beat-2026', '7']} />} />
          <Route path="/blog/sharedmiracleblogentry" element={<ReusableBlogEntry entryKeys={['sharedmiracleblogentry', 'miracle-in-room-559', '6']} />} />
          <Route path="/blog/thingstoknowanddoblogentry" element={<ReusableBlogEntry entryKeys={['thingstoknowanddoblogentry', 'senior-living-desk-funeral-planning-2026', '9']} />} />
          <Route path="/blog/voicesincareblogentries" element={<ReusableBlogEntry entryKeys={['voicesincareblogentries', 'the-heart-of-hospice-nursing-compassion-comfort-and-connection', '2']} />} />
          <Route path="/blog/voicesincareblogentry" element={<ReusableBlogEntry entryKeys={['voicesincareblogentry', 'voicesincareblogentries', '2']} />} />
          <Route path="/blog/what-to-do-before-you-die-blogentry" element={<ReusableBlogEntry entryKeys={['what-to-do-before-you-die-blogentry', 'what-to-do-before-you-die-part-1-estate-preparation', '10']} />} />
          <Route path="/blog/1" element={<ReusableBlogEntry entryKeys={['1', 'moonshinesblogentry']} />} />
          <Route path="/blog/2" element={<ReusableBlogEntry entryKeys={['2', 'the-heart-of-hospice-nursing-compassion-comfort-and-connection']} />} />
          <Route path="/blog/3" element={<ReusableBlogEntry entryKeys={['3', 'endoflifedoulablogentry', 'what-is-an-end-of-life-doula-and-what-role-do-they-have-in-end-of-life-care']} />} />
          <Route path="/blog/4" element={<ReusableBlogEntry entryKeys={['4', 'a-nurses-journey-memory-lane', 'nursesjourneyblogentry']} />} />
          <Route path="/blog/5" element={<ReusableBlogEntry entryKeys={['5', 'what-is-an-end-of-life-doula-and-what-role-do-they-have-in-end-of-life-care', 'endoflifedoulablogentry']} />} />
          <Route path="/blog/6" element={<ReusableBlogEntry entryKeys={['6', 'miracle-in-room-559', 'sharedmiracleblogentry']} />} />
          <Route path="/blog/7" element={<ReusableBlogEntry entryKeys={['7', 'senior-policy-beat-2026', 'seniorpolicybeatblogentry']} />} />
          <Route path="/blog/8" element={<ReusableBlogEntry entryKeys={['8', 'sharedmiracleblogentry', 'miracle-in-room-559']} />} />
          <Route path="/blog/9" element={<ReusableBlogEntry entryKeys={['9', 'senior-living-desk-funeral-planning-2026', 'thingstoknowanddoblogentry']} />} />
          <Route path="/blog/10" element={<ReusableBlogEntry entryKeys={['10', 'what-to-do-before-you-die-part-1-estate-preparation', 'estatepreparationblogentry']} />} />
          <Route path="/blog/11" element={<ReusableBlogEntry entryKeys={['11', 'voicesincareblogentries', 'the-heart-of-hospice-nursing-compassion-comfort-and-connection']} />} />
          <Route path="/blog/12" element={<ReusableBlogEntry entryKeys={['12', 'what-to-do-before-you-die-part-1-estate-preparation', 'estatepreparationblogentry']} />} />

          
       </Routes>
       <Footer />

       </ div>
  );
}

export default App;