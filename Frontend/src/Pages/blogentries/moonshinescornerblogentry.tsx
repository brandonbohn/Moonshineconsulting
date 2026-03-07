import React from 'react';
import BlogNavigation from '../../components/BlogNavigation';
// ...existing imports...

function MoonshinesCornerBlog() {
  return (
    <div>
      {/* Blog Navigation */}
      <BlogNavigation 
        categoryName="Moonshine's Corner" 
        categoryLink="/moonshinescorner" 
      />
      <div style={{ backgroundColor: "#08023a", borderRadius: "10px", padding: "32px 0 24px 0", margin: "50px 0 0 0", width: "100%" }}>
        <h1 style={{ color: "#fff", textAlign: "center", fontSize: "2.8rem", fontWeight: "bold", marginBottom: "16px", letterSpacing: "1px", width: "100%" }}>
          How I hearded hearts instead of sheep
        </h1>
        <h2 style={{ color: "#fff", fontSize: "1.3rem", fontStyle: "italic", textAlign: "left", margin: "0 0 8px 0", width: "100%" }}>Author: Moonshine</h2>
        <div style={{ color: "#fff", textAlign: "left", fontSize: "1.2rem", marginBottom: "16px", width: "100%" }}>
          {new Date('2025-07-01').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <img
          src="/images/moonshine.jpg"
          alt="Moonshine's Corner"
          style={{ display: "block", margin: "0 auto 12px auto", maxWidth: "400px", width: "100%", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        />
      </div>
      <div className="content mb-4 box text-dark" style={{ padding: "32px", fontSize: "22px", width: "100%", margin: "30px 0 0 0", background: "#fff", borderRadius: "10px", textAlign: "left", boxSizing: "border-box" }}>
        {/* Story content starts here */}
        <p>
          Woof! My name is Moonshine.
        </p>
        <p>
          Mom is in the other room working, as always. Since my mom is busy, I thought I would share my story about how I helped put smiles on her patients’ faces and learned a little about senior care.
        </p>
        <p>
          It all started about a year and a half ago when Mom took me to training to become a service dog. But I got scared, and it didn’t work out! After that, she started taking me into the nursing home where she works.
        </p>
        <p>
          Not to brag or anything, but I was a hit.
        </p>
        <p>
          Most people there were very nice, and I got lots of love from the residents. They all wanted to hold me and give me treats. In return, I tried my best to make them smile.
        </p>
        <p>
          Sometimes Mom would bring a soft therapy blanket for the residents to hold while they sat with me. Some of them liked to pet me while wrapped in something warm and cozy, like the Bedsure Sherpa Fleece Throw Blanket. Mom says warm blankets can help people relax, especially seniors who feel cold easily.
        </p>
        <p>
          Sometimes it was a little sad because a few residents acted differently and yelled a lot, which scared me. Mom explained that some of them had dementia or Alzheimer’s disease and could not remember things very well. I still don’t really understand those big words, but Mom reassured me that everything was okay—and that we would get more treats if I kept helping the residents smile.
        </p>
        <p>
          There was one lady who even asked Mom if I could live with her. She said she loved dogs and thought I was so adorable that she wanted me to stay at the nursing home! Mom explained that I had a brother and sister at home who needed me, but she promised we would come back and visit.
        </p>
        <p>
          Sometimes Mom would make me heel and do tricks for the residents. They would clap and laugh, and many of them asked when I would come back again. Mom sometimes brought little things for the residents to squeeze or hold while they watched me perform tricks. Some of them liked soft sensory items like the BunMo Sensory Fidget Toys for Adults, which helped keep their hands busy.
        </p>
        <p>
          Of course, I also had to behave very well during my visits. Mom always makes sure I have my favorite treats and toys before we go. My favorite reward treats are soft training treats like Zuke’s Mini Naturals Dog Training Treats, which help me stay focused and do my best tricks.
        </p>
        <p>
          Uh oh… I hear Mom coming!
        </p>
        <p>
          I have to run for now, but next time I will tell you more about my adventures visiting the folks at the nursing home—and about other dogs and cats who help make seniors happy too.
        </p>
        <p>
          We do have to behave, and there’s one thing I really hate: shots. Yikes!
        </p>
        <p>
          Bye for now.
        </p>
        <p>
          Love,
          Moonshine 🐾
        </p>
      </div>
    </div>
  );
}
export default MoonshinesCornerBlog;
