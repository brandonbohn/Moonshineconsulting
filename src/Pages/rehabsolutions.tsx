import React from 'react';
function RehabSolutions() {
    const blogPosts = [
        {
            title: 'The Importance of Rehab in Recovery',
            summary: 'Discover why rehabilitation is a crucial step in the recovery process and how it can help individuals regain independence.',
            link: '#',
        },
        {
            title: 'Top 5 Rehab Solutions for 2024',
            summary: 'Explore the latest and most effective rehab solutions available this year.',
            link: '#',
        },
        {
            title: 'How to Choose the Right Rehab Program',
            summary: 'A guide to selecting the best rehabilitation program for your unique needs.',
            link: '#',
        },
    ];
    return (
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
            <h1>Rehab Solutions Blog</h1>
            <p>Welcome to our collection of articles and resources about rehabilitation solutions. Stay informed and empowered on your journey to recovery.</p>
            <div style={{ marginTop: '2rem' }}>
                {blogPosts.map((post, idx) => (
                    <div key={idx} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: 8 }}>
                        <h2>{post.title}</h2>
                        <p>{post.summary}</p>
                        <a href={post.link} style={{ color: '#0070f3', textDecoration: 'underline' }}>Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RehabSolutions;