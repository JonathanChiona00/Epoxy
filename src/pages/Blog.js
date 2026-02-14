import React from 'react';
import { Calendar, User } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: '5 Benefits of Epoxy Flooring for Your Garage',
        excerpt: 'Discover why epoxy is the ultimate choice for durability, aesthetics, and ease of maintenance in your home garage.',
        date: 'Oct 12, 2025',
        author: 'Admin',
        image: 'https://images.unsplash.com/photo-1517646287270-a549cca63c9c?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        title: 'How to Maintain Your Epoxy Floor',
        excerpt: 'Epoxy floors are low maintenance, but a little care goes a long way. Here are our top tips for keeping your floors looking new.',
        date: 'Sep 28, 2025',
        author: 'Support',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        title: 'Epoxy vs. Polished Concrete: Which is Better?',
        excerpt: 'Confused between epoxy and polished concrete? We break down the pros and cons to help you make the right decision.',
        date: 'Sep 15, 2025',
        author: 'Admin',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
    }
];

const Blog = () => {
    return (
        <div className="blog-page section">
            <div className="container">
                <div className="text-center mb-5" style={{ marginBottom: '3rem' }}>
                    <h1>Latest <span className="text-gold">Insights</span></h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Tips, guides, and news from the world of flooring.</p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {posts.map(post => (
                        <article key={post.id} style={{ background: 'var(--color-bg-secondary)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '1.5rem' }}>
                                <div className="flex items-center gap-4" style={{ marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                    <span className="flex items-center"><Calendar size={14} style={{ marginRight: '4px' }} /> {post.date}</span>
                                    <span className="flex items-center"><User size={14} style={{ marginRight: '4px' }} /> {post.author}</span>
                                </div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{post.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                                <a href="#" className="text-gold" style={{ fontWeight: '500' }}>Read More →</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
