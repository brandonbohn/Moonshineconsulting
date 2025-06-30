import React from 'react';

const blogEntry = {
    title: "Rehab Solutions: Your Path to Recovery",
    date: "June 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    paragraphs: [
        "At Rehab Solutions, we believe in a holistic approach to recovery. Our team of dedicated professionals is here to guide you every step of the way.",
        "Whether you're recovering from surgery, injury, or managing a chronic condition, our personalized programs are designed to help you regain strength and confidence.",
        "Join our community and take the first step towards a healthier, happier you. Contact us today to learn more about our services and how we can support your journey."
    ]
};

const RehabSolutionsBlogEntry = () => (
    <article style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
        <h1>{blogEntry.title}</h1>
        <p style={{ color: '#888', marginBottom: '1rem' }}>{blogEntry.date}</p>
        <img
            src={blogEntry.imageUrl}
            alt="Rehab Solutions"
            style={{ width: '100%', borderRadius: 8, marginBottom: '1.5rem' }}
        />
        {blogEntry.paragraphs.map((text, idx) => (
            <p key={idx} style={{ lineHeight: 1.7, marginBottom: '1rem' }}>{text}</p>
        ))}
    </article>
);

export default RehabSolutionsBlogEntry;