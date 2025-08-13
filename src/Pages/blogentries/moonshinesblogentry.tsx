import React from 'react';
import BlogNavigation from '../../components/BlogNavigation.tsx';

function MoonshinesBlog()
{
  return (
    <div>
      {/* Blog Navigation */}
      <BlogNavigation 
        categoryName="Moonshine's Corner" 
        categoryLink="/moonshinescorner" 
      />

      <main role="main" aria-label="Moonshine's Corner blog content">
        <div className="Text" style={{ fontFamily: "Open Sans, sans-serif", minHeight: "100vh", fontSize: "18px", lineHeight: "1.6" }}>
          <header>
            <h1 className="Titles text-white" style={{ background:"#000000", textAlign: "center", padding: "20px", margin: "50px", borderRadius: "8px", fontSize: "28px", fontFamily: "Open Sans, sans-serif" }}>
              <strong>Welcome to Moonshine's Corner,</strong> where I share my adventures as a nursing home companion and the joy I bring to seniors who need a furry friend to brighten their day.
            </h1>
          </header>
          
          <article>
            <h1 className="Titles cards text-white" style={{ textAlign: "center", background:"#08023a", color: "#ffffff", padding: "20px", marginTop: "50px", borderRadius: "8px", fontSize: "28px", fontFamily: "Open Sans, sans-serif" }}>How I Learned to Bring Smiles to Senior Faces</h1>
            
            <section style={{ background: "#ffffff", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                <strong>Woof! My name is Moonshine.</strong> Mom is in the other room, and she's working as always. Since my mother is busy, I wanted to share my tale of how I put smiles on my mom's patients' faces and learned about senior care.
              </p>

              <h2 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>My Training Adventure (And How It Didn't Go As Planned)</h2>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                It started about a year and a half ago when Mom took me to some training to be a service dog. However, I got scared and it didn't work out! That's when Mom had a brilliant idea.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                She started taking me into the nursing home where she works. Not to brag or anything, but I was a hit.
              </p>
              
              <h2 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>Meeting My New Friends</h2>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Most people there were very nice. I got lots of love from the residents. They all wanted to hold me and give me treats. Mom always brings special soft training treats that are easy for seniors with arthritis to hold and gentle on my tummy. In turn, I made them smile.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                There was one lady who asked Mom if I could live with her. She said she loved dogs, and I was so adorable she wanted to keep me in the nursing home! Mom explained to her that I had a brother and sister who needed me to come home but promised we would come back to visit.
              </p>
              
              <h2 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>Learning About Memory Challenges</h2>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Sometimes it was sad because some of the residents acted a little different and yelled a lot, and that scared me. Mom said it was because they had dementia or Alzheimer's and couldn't remember things.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                I still don't know what those big names mean, but Mom reassured me and said we would get some more treats if I continued to go and make the residents smile.
              </p>
              
              <h2 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>Putting on a Show</h2>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Sometimes Mom would make me heel and do tricks for the residents. Mom uses a quiet training clicker and keeps treats in a special treat pouch that doesn't make noise during visits. They all clapped and wanted me to come back.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                It felt so good to see their faces light up when I did my sit, stay and shake commands. Even the staff members would gather around to watch my little performances.
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>What I've Learned About Helping Seniors</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Through my visits to the nursing home, I've discovered that seniors really need us dogs to visit them. Here's what I've learned:
              </p>
              <ul style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px", paddingLeft: "30px" }}>
                <li style={{ marginBottom: "10px" }}><strong>Touch matters:</strong> Many residents haven't petted a dog in years. When they stroke my fur, you can see the joy in their eyes. Mom brings a soft-bristled brush that seniors can easily hold to gently brush my coat — it's therapeutic for both of us!</li>
                <li style={{ marginBottom: "10px" }}><strong>Memories come alive:</strong> Residents often tell me about dogs they used to have. I help them remember happy times.</li>
                <li style={{ marginBottom: "10px" }}><strong>Laughter is medicine:</strong> When I do my tricks or just act silly, it brings out genuine smiles and laughter.</li>
                <li style={{ marginBottom: "10px" }}><strong>Companionship heals:</strong> Sometimes just sitting quietly with someone is exactly what they need.</li>
              </ul>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>The Not-So-Fun Part</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                We do have to behave and have the one thing I hate — shots! Yikes! But Mom says it's important to keep everyone safe and healthy. We also use special antibacterial wipes after visits, and I take calming supplements before vet visits to help with my nerves.
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>What's Coming Next</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                Gotta run — here comes Mom! In future posts, I'll give you more information about my experiences visiting the folks in the nursing home and tell you about other things that other dogs and cats are doing to help seniors.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                I'll share stories about my animal friends who work in hospitals, assisted living facilities and with home health patients. There's so much we furry companions can do to make life better for seniors!
              </p>
              
              <h3 style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "25px", marginBottom: "15px" }}>A Message for Seniors and Their Families</h3>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "15px" }}>
                If you're a senior missing the companionship of a pet, ask your facility about pet therapy programs. Many nursing homes and assisted living communities welcome visits from trained therapy animals.
              </p>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                Family members can also inquire about bringing well-behaved family pets for visits. Essential items like a portable water bowl, sanitizing wipes, and a comfortable travel mat make visits easier and safer for everyone. It might be one of the best gifts you can give your loved one.
              </p>
              
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px", fontStyle: "italic", textAlign: "center" }}>
                Bye for now!<br />
                <strong>Love, Moonshine</strong> 🐾
              </p>
              
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                Stay tuned for more adventures from Moonshine's Corner, where we explore how pets and therapy animals make a difference in senior care.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
export default MoonshinesBlog;
