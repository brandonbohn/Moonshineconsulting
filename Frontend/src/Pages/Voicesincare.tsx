import React from 'react';
import BlogComponent from '../components/blogcomponentengine';
import { useWebsiteContent } from '../data/websiteContent';

function Voicesincare() {
  const websiteContent = useWebsiteContent();
  if (!websiteContent) {
    return null;
  }
  const content = websiteContent.pages.voicesInCare;

  return (
    <div className="voices-in-care" style={{ fontFamily: "sans-serif", background: "#ffffff", minHeight: "100vh" }}>
      <style>{`
        .voices-header {
          background: #08023a;
          padding: 30px;
          text-align: center;
          margin-top: 50px;
          border-radius: 10px;
        }
        
        .voices-title {
          margin: 30px;
          padding: 20px;
          font-size: 28px;
          color: #ffffff;
          font-family: "Open Sans, sans-serif";
        }
        
        .voices-subtitle {
          font-size: 18px;
          color: #ffffff;
          font-family: "Open Sans, sans-serif";
        }
        
        .voices-main {
          max-width: auto;
          margin: 20px;
          padding: 20px;
        }
        
        .blog-section {
          margin-top: 20px;
        }
        
        .voices-footer {
          text-align: center;
          padding: 1rem 0;
          color: #b08968;
        }
        
        /* Extra Large Screens (1400px and up) - For Multiple Monitor Setups */
        @media (min-width: 1400px) {
          .voices-header {
            margin-top: 80px;
            padding: 40px;
          }
          
          .voices-title {
            font-size: 42px !important;
            margin: 40px;
            padding: 30px;
          }
          
          .voices-subtitle {
            font-size: 22px !important;
          }
          
          .voices-main {
            margin: 30px;
            padding: 30px;
          }
          
          .blog-section {
            margin-top: 30px;
          }
          
          .voices-footer {
            font-size: 18px !important;
            padding: 2rem 0;
          }
        }
        
        /* Ultra Wide Screens (1600px and up) - For Ultrawide Monitors */
        @media (min-width: 1600px) {
          .voices-header {
            margin-top: 100px;
            padding: 50px;
          }
          
          .voices-title {
            font-size: 48px !important;
            margin: 50px;
            padding: 40px;
          }
          
          .voices-subtitle {
            font-size: 24px !important;
          }
          
          .voices-main {
            margin: 40px;
            padding: 40px;
          }
          
          .blog-section {
            margin-top: 40px;
          }
          
          .voices-footer {
            font-size: 20px !important;
            padding: 2.5rem 0;
          }
        }
        
        /* Super Ultra Wide (1920px and up) - For 4K and Multiple Monitor Dev Setups */
        @media (min-width: 1920px) {
          .voices-header {
            margin-top: 120px;
            padding: 60px;
          }
          
          .voices-title {
            font-size: 56px !important;
            margin: 60px;
            padding: 50px;
          }
          
          .voices-subtitle {
            font-size: 26px !important;
          }
          
          .voices-main {
            margin: 50px;
            padding: 50px;
          }
          
          .blog-section {
            margin-top: 50px;
          }
          
          .voices-footer {
            font-size: 22px !important;
            padding: 3rem 0;
          }
        }
      `}</style>
      
      <header className="voices-header">
        <h1 className="voices-title">{content.title}</h1>
        <p className="voices-subtitle">
          {content.subtitle}
        </p>
      </header>
      
      <main className="voices-main">
        <section>
          <BlogComponent category="Voices In Care" limit={10} />
        </section>
      </main> 
      
      <footer className="voices-footer">
        © {new Date().getFullYear()} {content.footer}
      </footer>
    </div>
  );
};

export default Voicesincare;