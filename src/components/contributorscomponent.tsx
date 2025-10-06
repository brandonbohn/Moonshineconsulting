import React from 'react';
import { contributorsData, Contributor } from './contributorsdata.ts';

interface ContributorsComponentProps {
  id?: number;
}

const ContributorsComponent = ({ id }: ContributorsComponentProps) => {
  let contributors: Contributor[] = [];

  if (id !== undefined) {
    const contributor = contributorsData.find(contrib => contrib.id === id);
    if (contributor) contributors = [contributor];
  } else {
    contributors = contributorsData;
  }

  if (contributors.length === 0) {
    return <div>No contributors found.</div>;
  }

  return (
    <div style={{ width: "100%" }}>
      {contributors.map((contributor) => (
        <div key={contributor.id} style={{ 
          width: "100%", 
          margin: "0",  
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between",
          height: "100%",
          minHeight: "280px",
          padding: "0"
        }}>
          <div style={{ flex: "0 0 auto" }}>
            <h4 style={{ 
              fontSize: "27px", 
              fontWeight: "bold", 
              marginBottom: "10px", 
              lineHeight: "1.3",
              color: "#08023a",
              fontFamily: "Open Sans, Arial, sans-serif"
            }}>
              {contributor.name}
            </h4>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
              <img
                src={contributor.image}
                alt={contributor.name}
                width={120}
                height={120}
                style={{ 
                  objectFit: "cover", 
                  borderRadius: "50%",
                  border: "3px solid #08023a"
                }}
              />
            </div>
            <p style={{ 
              fontSize: "21px", 
              fontWeight: "600", 
              color: "#08023a", 
              marginBottom: "8px",
              textAlign: "center",
              fontFamily: "Georgia, serif"
            }}>
              {contributor.title}
            </p>
            {contributor.credentials && (
              <p style={{ 
                fontSize: "21px", 
                color: "#666", 
                marginBottom: "12px",
                textAlign: "center",
                fontStyle: "italic",
                fontFamily: "Georgia, serif"
              }}>
                {contributor.credentials}
              </p>
            )}
          </div>
          <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <p style={{ 
              fontSize: "21px", 
              lineHeight: "1.5", 
              marginBottom: "15px",
              textAlign: "justify",
              fontFamily: "Georgia, serif"
            }}>
              {contributor.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributorsComponent;
