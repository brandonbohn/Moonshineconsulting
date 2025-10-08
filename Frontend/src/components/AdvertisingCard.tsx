import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AdvertisingCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  price?: string;
  discount?: string;
  category?: string;
}

const AdvertisingCard: React.FC<AdvertisingCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  buttonText,
  buttonLink,
  price,
  discount,
  category
}) => {
  return (
    <div className="advertising-card-container" style={{ width: "400px", height: "auto" }}>
      <div 
        className="card h-100 advertising-card-responsive" 
        style={{ 
          borderRadius: "15px", 
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
          border: "none",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.15)";
        }}
      >
        {/* Image Section */}
        <div className="position-relative" style={{ height: "200px", overflow: "hidden" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt={imageAlt}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
          
          {/* Category Badge */}
          {category && (
            <div 
              className="position-absolute top-0 start-0 m-2 px-2 py-1"
              style={{
                backgroundColor: "#08023a",
                color: "white",
                fontSize: "12px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "600",
                borderRadius: "5px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              {category}
            </div>
          )}
          
          {/* Discount Badge */}
          {discount && (
            <div 
              className="position-absolute top-0 end-0 m-2 px-2 py-1"
              style={{
                backgroundColor: "#ffc107",
                color: "#08023a",
                fontSize: "14px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                borderRadius: "5px"
              }}
            >
              {discount}
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column" style={{ padding: "25px" }}>
          {/* Title */}
          <h3 
            className="card-title"
            style={{
              fontSize: "28px",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "700",
              color: "#08023a",
              marginBottom: "15px",
              lineHeight: "1.3"
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p 
            className="card-text flex-grow-1"
            style={{
              fontSize: "18px",
              fontFamily: "Open Sans, sans-serif",
              color: "#2c2c2c",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}
          >
            {description}
          </p>

          {/* Price Section */}
          {price && (
            <div className="price-section mb-3">
              <span 
                style={{
                  fontSize: "24px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  color: "#08023a"
                }}
              >
                {price}
              </span>
            </div>
          )}

          {/* Action Button */}
          <a
            href={buttonLink}
            className="btn btn-warning btn-lg mt-auto"
            style={{
              width: "100%",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "600",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#ffc107",
              color: "#08023a",
              textDecoration: "none",
              transition: "all 0.3s ease"
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
            {buttonText}
          </a>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Tablet responsive */
          @media (max-width: 991px) {
            .advertising-card-container {
              width: 350px !important;
            }
          }
          
          /* Mobile responsive */
          @media (max-width: 767px) {
            .advertising-card-container {
              width: 100% !important;
              max-width: 350px !important;
            }
            
            .advertising-card-responsive .card-title {
              font-size: 24px !important;
            }
            
            .advertising-card-responsive .card-text {
              font-size: 16px !important;
            }
          }
          
          /* Small mobile */
          @media (max-width: 576px) {
            .advertising-card-container {
              max-width: 300px !important;
            }
            
            .advertising-card-responsive .card-body {
              padding: 20px !important;
            }
            
            .advertising-card-responsive .card-title {
              font-size: 22px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AdvertisingCard;
