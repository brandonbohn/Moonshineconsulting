import React from 'react';
import BlogNavigation from '../../components/BlogNavigation.tsx';

function SeniorPolicyBeatBlog()
{
  return (
    <div>
      {/* Blog Navigation */}
      <BlogNavigation 
        categoryName="Senior Policy Beat" 
        categoryLink="/seniorpolicybeat" 
      />

      <main role="main" aria-label="Senior Policy Beat blog content">
        <div className="Text" style={{ fontFamily: "Open Sans, sans-serif", minHeight: "100vh", fontSize: "18px", lineHeight: "1.6" }}>
          <header>
            <h1 className="Titles text-white" style={{ background:"#000000", textAlign: "center", padding: "20px", margin: "50px", borderRadius: "8px", fontSize: "28px", fontFamily: "Open Sans, sans-serif" }}>
              <strong>Welcome to the Senior Policy Beat,</strong> where we break down the most important issues affecting older adults and their care. Whether you're navigating Medicare, helping a loved one age at home, or just trying to understand how today's health policies impact real people — you're in the right place.
            </h1>
          </header>
          
          <article>
            <h1 className="Titles cards text-white" style={{ textAlign: "center", background:"#08023a", color: "#ffffff", padding: "20px", marginTop: "50px", borderRadius: "8px", fontSize: "28px", fontFamily: "Open Sans, sans-serif" }}>Medicare Home Health: What Seniors Need to Know</h1>
            <h2 style={{ textAlign: "center", background:"#08023a", color: "#ffffff", padding: "10px", marginTop: "0", borderRadius: "0 0 8px 8px", fontSize: "18px", fontFamily: "Open Sans, sans-serif", fontStyle: "italic" }}>Author: Karen</h2>
            
            <section style={{ background: "#ffffff", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                <strong>To Kick off the Senior Policy Beat,</strong> a blog dedicated to helping seniors and their families navigate the complex world of healthcare policy.
                In this opening edition, I want to share what I've learned from over 30 years as a nurse in Medicare Home Health. I've seen how this program helps people heal and stay independent, but I've also lived through the rules changing around us — sometimes making care harder to deliver and receive. Let me clear it up, together.
              </p>

              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                One of the most important topics that I have gained great ability in throughout my career is Medicare Home Health. This knowledge is crucial for seniors, and I want to share what I've learned from decades of hands-on experience.
              </p>
              
              <h2 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>The Historical Roots of Home Health</h2>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                The idea of home health can be traced all the way back to the ancients, who often traveled to see their patients or were stationed at the king's house. However, these practices evolved and became the basis of what home health is today in the early 19th century, when doctors would come to see their patients and make house calls with their black bags.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                This tradition continued to evolve in the early 20th century when nurses took on the role of seeing patients at the urge of local physicians. A pivotal moment came in 1893 when Lillian Wald coined the term "public health nurse" and moved to New York's Lower East Side, eventually founding what became the Visiting Nurse Service of New York.<sup><a href="#ref1" style={{ color: "#08023a", textDecoration: "none" }}>1</a></sup>
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                Then came the mid-1960s and the creation of Medicare through Social Security.<sup><a href="#ref2" style={{ color: "#08023a", textDecoration: "none" }}>2</a></sup> This was a game-changer for home health care. As time went on, doctors became more specialized, and nurses took over general practice visits. Modern home health was born.
              </p>
              
              <h2 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>What Home Health Is Today</h2>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Home health today has taken its historical roots and expanded on them. It's where a nurse comes to your home and helps you with your medical issues. It might be wound care. It might be teaching and training on how to care for a specific disease that you might have. This depends on your diagnosis.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                There is another kind that is driven by private pay and Medicaid but let me focus on Medicare Home Health since that's what most seniors need to understand.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                You can also receive physical therapy at home. Most of the time, the physical therapist will see you for the first admission assessment and write a treatment plan for you. These could be exercises to help strengthen your muscles after a hip replacement, for example. A physical therapy assistant will then come and visit you for a few weeks, with the physical therapist returning every couple of weeks to supervise their visits.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                You can also see an occupational therapist. They work to help you with your upper body, and they will come for your first visit and then come to supervise their occupational therapy assistant. Occupational therapy can also make sure you are safe in your home, such as using the stove if you have had a stroke, among other things.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                You can also have a home health aide for bathing. They usually come a couple of times a week. They do not do housekeeping - that is important to understand.
              </p>
              
              <h2 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>When Everything Changed: The 1990s to 2000</h2>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Many years ago, in the 1990s, I was able to make visits to people's homes without worrying about strict rules and regulations. As an RN, I could go to someone's house who had diabetes just to give them an insulin injection, see other patients, then give them another injection. It was straightforward nursing care.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                Then came a new regulation by the government called the Prospective Payment System (PPS). It was introduced and adopted in 2000.<sup><a href="#ref3" style={{ color: "#08023a", textDecoration: "none" }}>3</a></sup> This completely changed how we could provide care.
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>What PPS Means for You</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Due to PPS, you must now qualify for these services. It's a Medicare payment system where home health agencies receive a predetermined, fixed payment for a 60-day episode of care, regardless of the actual cost of services provided, according to the Centers for Medicare & Medicaid Services (CMS). This payment is adjusted based on factors like a patient's clinical characteristics and functional status, which are assessed using the Outcome and Assessment Information Set (OASIS).
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                What is OASIS? It is the set of questions and the assessment that the nurse performs that decides what you can qualify to have Medicare pay for. We were then only able to see patients two to three times per week to teach and train or to do hands-on care, depending on their diagnosis.
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>What a Real Home Health Visit Looks Like</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Let me tell you how a normal visit goes. I would have a new admission to someone I had never seen before. I would spend an hour and a half in the house doing a head-to-toe assessment. That means taking blood pressure, temperature, and pulse. I listen to their heart and lungs. Next, I would listen to their stomach for bowel sounds. I would check their pulse in their feet and check to see if they could feel their toes.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                I would spend time calling their doctor for orders. I would usually spend a couple of hours at home at night finishing paperwork or computer work. I had to make 30 patient visits in a week and drive anywhere from 50 to 100 miles in a day. I had regular visits during the day after admitting someone.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                The workload was very doable unless you lived outside the city limits. I would put a thousand miles a week on my car. I enjoyed this life, seeing everyone. Sometimes it was stressful, trying to guess how long you would be at each person's house. Sometimes I would be late if I had to send someone to the hospital.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                There were frustrating times when I would see someone who said they would be home but were not when I arrived. We were paid per visit. No one home, I did not get paid. I would check on them before I left. Back then, I could look in windows and try to see if someone was lying on the floor. I would knock on the back door, ask a neighbor.
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>How Government Changes Affected Care</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                After the 1990s, the government stepped in again due to abuse and fraud in the system. Some people had gotten too greedy and made too much money off the government system. Now nurses are expected to see up to 35 patients a week and can put up to 1,500 miles on their cars. The government is much stricter on what we can do, therefore affecting you, the patient.
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>So How Does This Affect You?</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Nurses and therapists have less time to spend with you due to their decreased visit time. You need someone that they can teach and train. This is usually a family member. They need to learn to help you take showers and be with you most of the time.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                The regulations also say you must be homebound. Homebound status means you can leave your home on a limited basis. You can go to get your hair done. You can go to the grocery store if you have no one to go with you. You can go to church. You are not able to go out of town for long, extensive times such as a cruise.
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>What to Do If You Need Help</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                You should always call your home health agency if you have problems with staff and are not happy with their service. The best advice is to call and talk to the director. If you get no resolution, you can call the home health hotline. This will be included in your admission packet that the nurse gives you.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                You might also get a survey in the mail. Please return it as surveys help the agency improve their services.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                When looking for a good home health agency, look them up online and check their star rating. It's rated 1 to 5 stars. The higher the stars, the better the care.
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>My Final Thoughts</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Medicare is a wonderful service, but it could be so much better. I hope this helps you understand Medicare Home Health from someone who has lived it, breathed it, and seen how it affects real people every single day.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Contact your Congress representative to increase home health benefits. Your voice matters, and these services are too important to let bureaucracy get in the way of good care.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                The tradition that started with ancient healers making house calls continues today, but it takes all of us - patients, families, nurses, and lawmakers - to make sure it works the way it should.
              </p>
              
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                Stay tuned for updates on key topics such as healthcare, retirement security, elder rights, and more.
              </p>
              
              <h2 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "40px", marginBottom: "20px" }}>
                References
              </h2>
              
              <div style={{ fontSize: "16px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "30px", backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "5px" }}>
                <p id="ref1" style={{ marginBottom: "15px" }}>
                  <strong>1.</strong> Visiting Nurse Service of New York. "Our History: Lillian Wald and the Henry Street Settlement." <em>VNSNY.org</em>. Accessed 2025. Available at: <a href="https://www.vnsny.org/about-us/our-history/" target="_blank" rel="noopener noreferrer" style={{ color: "#08023a" }}>https://www.vnsny.org/about-us/our-history/</a>
                </p>
                <p id="ref2" style={{ marginBottom: "15px" }}>
                  <strong>2.</strong> Centers for Medicare & Medicaid Services. "History of Medicare & Medicaid." <em>CMS.gov</em>. Updated 2024. Available at: <a href="https://www.cms.gov/About-CMS/Agency-Information/History" target="_blank" rel="noopener noreferrer" style={{ color: "#08023a" }}>https://www.cms.gov/About-CMS/Agency-Information/History</a>
                </p>
                <p id="ref3" style={{ marginBottom: "0" }}>
                  <strong>3.</strong> Centers for Medicare & Medicaid Services. "Home Health Prospective Payment System." <em>CMS.gov</em>. Updated 2024. Available at: <a href="https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HomeHealthPPS" target="_blank" rel="noopener noreferrer" style={{ color: "#08023a" }}>https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HomeHealthPPS</a>
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
export default SeniorPolicyBeatBlog;
