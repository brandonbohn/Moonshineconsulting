import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BlogNavigationProps {
  categoryName: string;
  categoryLink: string;
}
function BlogNavigation({ categoryName, categoryLink }: BlogNavigationProps) {
  return (
    <div className="blog-navigation" style={{ padding: "30px 0", backgroundColor: "#faf0e6" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
              
              {/* Back to Category Button */}
              <a
                href={categoryLink}
                className="btn btn-warning btn-lg"
                style={{
                  backgroundColor: "#ffc107",
                  borderColor: "#ffc107",
                  color: "#08023a",
                  fontSize: "18px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "600",
                  padding: "12px 25px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  border: "2px solid #ffc107",
                  minWidth: "200px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffb000";
                  e.currentTarget.style.borderColor = "#ffb000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffc107";
                  e.currentTarget.style.borderColor = "#ffc107";
                }}
              >
                ← Back to {categoryName}
              </a>

              {/* Back to Main Blog Button */}
              <a
                href="/mainblog"
                className="btn btn-warning btn-lg"
                style={{
                  backgroundColor: "#ffc107",
                  borderColor: "#ffc107",
                  color: "#08023a",
                  fontSize: "18px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "600",
                  padding: "12px 25px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  minWidth: "200px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffb000";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffc107";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                📰 Back to Main Blog
              </a>
            </div>

            {/* Divider */}
            <hr 
              style={{ 
                margin: "30px 0", 
                border: "none", 
                height: "2px", 
                backgroundColor: "#08023a", 
                opacity: "0.3" 
              }} 
            />
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Mobile responsive */
          @media (max-width: 767px) {
            .blog-navigation .d-flex {
              gap: 15px !important;
            }
            
            .blog-navigation .btn {
              width: 100% !important;
              min-width: auto !important;
              font-size: 16px !important;
              padding: 10px 20px !important;
            }
          }
          
          /* Small mobile */
          @media (max-width: 576px) {
            .blog-navigation {
              padding: 20px 0 !important;
            }
            
            .blog-navigation .btn {
              font-size: 15px !important;
              padding: 8px 16px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BlogNavigation;
