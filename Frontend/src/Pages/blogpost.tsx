
import { useParams } from 'react-router-dom';
import BlogNavigation from '../components/BlogNavigation.tsx';
// ...existing code...

// Import blog entry pages
import MoonshinesBlog from './blogentries/moonshinesblogentry.tsx';
import EstatePreparationBlogEntry from './blogentries/estatepreparationblogentry.tsx';
import EndOfLifeDoulaBlogEntry from './blogentries/endoflifedoulablogentry.tsx';
import NurseJourneyMemoryBlogEntry from './blogentries/nursejourneymemoryblogentry.tsx';
import SeniorLivingDeskBlogEntry from './blogentries/seniorlivingdeskblogentry.tsx';
import SeniorPolicyBeatBlogEntry from './blogentries/seniorpolicybeatblogentry.tsx';
import SharedMiracleBlogEntry from './blogentries/sharedmiracleblogentry.tsx';
import ThingstoKnowAndDoBlogEntry from './blogentries/thingstoknowanddoblogentry.tsx';
import VoicesInCareBlogEntries from './blogentries/voicesincareblogentries.tsx';
import VoicesInCareBlogEntry from './blogentries/voicesincareblogentry.tsx';
import WhatToDoBeforeYouDieBlogEntry from './blogentries/what-to-do-before-you-die-blogentry.tsx';
// ...existing code...

const blogEntryComponentMap: Record<string, React.ComponentType<any>> = {
  moonshinesblogentry: MoonshinesBlog,
  estatepreparationblogentry: EstatePreparationBlogEntry,
  endoflifedoulablogentry: EndOfLifeDoulaBlogEntry,
  nursejourneymemoryblogentry: NurseJourneyMemoryBlogEntry,
  seniorlivingdeskblogentry: SeniorLivingDeskBlogEntry,
  seniorpolicybeatblogentry: SeniorPolicyBeatBlogEntry,
  sharedmiracleblogentry: SharedMiracleBlogEntry,
  thingstoknowanddoblogentry: ThingstoKnowAndDoBlogEntry,
  voicesincareblogentries: VoicesInCareBlogEntries,
  voicesincareblogentry: VoicesInCareBlogEntry,
  'what-to-do-before-you-die-blogentry': WhatToDoBeforeYouDieBlogEntry,
};

function BlogPost() {
  const { slugOrId } = useParams();
  // Defensive fallback
  const key = (slugOrId || '').toLowerCase();
  const BlogEntryComponent = blogEntryComponentMap[key];

  if (!BlogEntryComponent) {
    return (
      <div>
        <BlogNavigation categoryName="Main Blog" categoryLink="/mainblog" />
        <div style={{ padding: '40px', fontSize: '21px' }}>Blog post not found.</div>
      </div>
    );
  }

  return <BlogEntryComponent />;
}

export default BlogPost;
