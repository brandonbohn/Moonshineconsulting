import React from 'react';
import BlogNavigation from '../../components/BlogNavigation.tsx';

function NurseJourneyMemoryBlogEntry() {
  return (
    <div>
      {/* Blog Navigation */}
      <BlogNavigation 
        categoryName="Voices in Care" 
        categoryLink="/Voicesincare" 
      />

      <div
        className="container"
        style={{ fontFamily: "sans-serif", minHeight: "100vh" }}
      >
      <style>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }
          .Titles {
            text-align: center;
            padding: 20px;
            background: #ffffff;
            margin-top: 50px;
            border-radius: 8px;
          }
          .content p {
            font-size: 18px;
            line-height: 1.6;
          }
          @media (max-width: 768px) {
            .Titles {
              font-size: 20px;
              padding: 15px;
            }
            .content p {
              font-size: 16px;
            }
          }
        `}
      </style>
      
      <div className="Titles text-white" style={{ backgroundColor: "#08023a", padding: "20px", borderRadius: "10px" }}>
        <h1>
          A Nurse's Journey: From Reluctant Student to Dedicated Caregiver
        </h1>
        <h2>Author: Cindy</h2> 
      </div>
      
      <div className="content mb-4 box text-dark" style={{ padding: "20px", fontSize: "18px", height: "100%", width: "100%" }}>
        <p>
          I wasn't a very good student in high school. I couldn't have cared less if I failed out. I was not a kid who was always raising my hand or earning good grades. I barely was accepted into high school, and I did only slightly above mediocre work. I worked very hard in college to get that uniform on as a "grunt."
          <br />
          <br />
          Back in the day, around 2004, we didn't have orderlies like we do now, and I have since met my husband, who was an orderly years ago. I've worked many years in a psych unit, and I've worked with very great patients. I worked the evening shift and was always front and center with patient care. After I could help patients, they left feeling completely fine and unafraid. I'd even sleep near patients if needed—I wasn't afraid of them, and they didn't know to fear me.
          <br />
          <br />
          <strong>The Elevator Incident</strong>
          <br />
          There were two orderlies working with me, and we had to take a discharged patient to the morgue. We had to take the old elevator, the back one with the retractable door. The three of us were in the elevator with this deceased person when suddenly the body began to move, and the head was moving too. All three of us started to bang on the door to get out, and one orderly was clawing at the door, screaming "Let me out, let me out!" After that incident, I never wanted to take that elevator again!
          <br />
          <br />
          <strong>Learning the Ropes</strong>
          <br />
          I worked in the medical field in the ICU area. I started out working across the hall on the sixth floor. I had no medical training before I began, but I learned as I went. After a few months, I worked my way up. The first few weeks were spent learning patient care, teaching responsibilities, and managing time effectively. I also worked with patients for extended periods, learning to visit with them and provide comfort. I always enjoyed the wonderful medical staff who helped and taught me. At the same time, I just wanted to become a nurse. I had been interested in nursing for a while and always loved the idea of medical care—whether patients loved or hated their treatment, I couldn't help but want to learn more.
          <br />
          <br />
          <strong>A Different Era of Medicine</strong>
          <br />
          Back then, in the 1940s, we didn't have all the electronics that we have now—not the electronic equipment, blood pressure cuffs, or modern monitoring devices. But we still got the job done with what we had. I was able to witness emergencies, and when a surgeon was needed due to a medical emergency, all the surgeons were available and ready to help. It felt like second nature to me, and it prepared me well for nursing school.
          <br />
          <br />
          <strong>Reflections on a Lifetime of Care</strong>
          <br />
          Looking back on this journey from a reluctant high school student to a dedicated healthcare professional, I realize that sometimes our calling finds us in unexpected ways. The path wasn't always smooth, and there were moments that tested my resolve—like that terrifying elevator ride to the morgue. But each experience, whether frightening or inspiring, shaped me into the nurse I became.
          <br />
          <br />
          The healthcare field has changed dramatically since those early days. We have advanced technology, better equipment, and more specialized roles. Yet the heart of nursing remains the same: being present for patients in their most vulnerable moments, providing comfort, and advocating for their care.
          <br />
          <br />
          To those just starting their healthcare journey, remember that it's not about where you begin—it's about the compassion you bring and your willingness to learn and grow. Sometimes the most unexpected people become the most dedicated caregivers.
        </p>
      </div>
      </div>
    </div>
  );
}

export default NurseJourneyMemoryBlogEntry;
