import BlogNavigation from "../../components/BlogNavigation";
import { ProductComponent } from "../../components/productgenerator";

function VoicesInCareBlogEntry() {
  return (
    <div>
      {/* Blog Navigation */}
      <BlogNavigation 
        categoryName="Voices in Care" 
        categoryLink="/voicesincare" 
      />
      <div style={{ backgroundColor: "#08023a", borderRadius: "10px", padding: "32px 0 24px 0", margin: "50px 0 0 0", width: "100%", maxWidth: "100%" }}>
        <h1 style={{ color: "#fff", textAlign: "center", fontSize: "2.8rem", fontWeight: "bold", marginBottom: "16px", letterSpacing: "1px", width: "100%" }}>
          Voices in Care: Stories from the Heart
        </h1>
        <h2 style={{ color: "#fff", fontSize: "1.3rem", fontStyle: "italic", textAlign: "left", margin: "0 0 8px 0", width: "100%" }}>Author: Christie</h2>
        <div style={{ color: "#fff", textAlign: "left", fontSize: "1.2rem", marginBottom: "16px", width: "100%" }}>
          {new Date('2025-09-15').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <img
          src="/images/nurse.jpg"
          alt="Voices in Care"
          style={{ display: "block", margin: "0 auto 12px auto", maxWidth: "400px", width: "100%", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        />
      </div>
      {/* Ad placement for Red Light Therapy Device */}
      <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
        <ProductComponent productid={8} />
      </div>
      <div className="content mb-4 box text-dark" style={{ padding: "32px", fontSize: "22px", width: "100%", maxWidth: "100%", margin: "30px 0 0 0", background: "#fff", borderRadius: "10px", textAlign: "left", boxSizing: "border-box" }}>
        {/* Story content starts here */}
        <p>
          In my years as a nurse, I've witnessed countless stories of resilience, hope, and healing. Each patient and family brings their own journey, and it's a privilege to support them through difficult transitions. Whether it's providing comfort, guidance, or simply a listening ear, the heart of care is always about compassion.
        </p>
        <p>
          One thing I've learned is that small comforts can make a big difference. For those recovering at home or managing chronic conditions, products that promote relaxation and relief are invaluable. That's why I recommend considering a <strong>Red Light Therapy Device</strong> for gentle pain management and a <strong>therapy blanket</strong> for soothing comfort. These tools can help create a healing environment and support well-being for both patients and caregivers.
        </p>
      </div>
    </div>
  );
}
export default VoicesInCareBlogEntry;
