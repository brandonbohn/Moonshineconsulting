import React from "react";

const seniorTips = [
    {
        title: "Stay Active",
        description: "Engage in regular physical activity like walking, yoga, or swimming to maintain mobility and health.",
    },
    {
        title: "Eat Healthy",
        description: "Incorporate fruits, vegetables, and whole grains into your diet for better nutrition.",
    },
    {
        title: "Stay Connected",
        description: "Keep in touch with friends and family to support mental and emotional well-being.",
    },
    {
        title: "Regular Checkups",
        description: "Visit your healthcare provider for regular checkups and screenings.",
    },
    {
        title: "Keep Learning",
        description: "Challenge your mind with puzzles, reading, or learning new skills.",
    },
];

const SeniorTips: React.FC = () => (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 24, fontFamily: "sans-serif" }}>
        <h1>Senior Tips</h1>
        <p>Helpful advice for seniors to stay healthy and happy.</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
            {seniorTips.map((tip, idx) => (
                <li key={idx} style={{ marginBottom: 24, background: "#f9f9f9", padding: 16, borderRadius: 8 }}>
                    <h2 style={{ margin: "0 0 8px 0", fontSize: 20 }}>{tip.title}</h2>
                    <p style={{ margin: 0 }}>{tip.description}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default SeniorTips;