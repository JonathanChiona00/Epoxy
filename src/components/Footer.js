import React, { startTransition } from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111', color: 'white', padding: '4rem 0', marginTop: 'auto', borderTop: '1px solid #333' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {/* Brand Column */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>J EPOXY <span className="text-gold">SOLUTIONS</span></h2>
                        <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            Premium sustainable flooring solutions for residential, commercial, and industrial spaces.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fff' }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="mailto:tadiwachiona@gmail.com?body=hi" style={{ color: 'inherit', textDecoration: 'none' }}>Get Quote from Jonathan</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fff' }}>Contact Us</h3>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                            <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                                <span>📞</span> <span>Sales: +263 771 536 382</span>
                            </li>
                            <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                                <span>✉️</span> <span>tadiwachiona@gmail.com</span>
                            </li>
                            <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                                <span>📍</span> <span>Harare, Zimbabwe</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #222', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
                    <p>© {new Date().getFullYear()} Epoxy Flooring. All rights reserved.</p>
                    <p style={{ marginTop: '0.5rem', color: '#888' }}>
                        Designed with ❤️ by <span className="text-gold">Jonathan Chiona</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
