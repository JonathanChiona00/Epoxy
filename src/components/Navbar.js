import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Facebook, Instagram, Youtube } from 'lucide-react';
import './Navbar.css';

const WhatsAppIcon = ({ size = 24, color = "white" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappLink = "https://wa.me/23771536382";
    const facebookLink = "https://www.facebook.com/epoxy"; // User specified "visit epoxy facebook link"
    const instagramLink = "#";
    const youtubeLink = "#";

    return (
        <nav className="navbar-wrapper">
            {/* Top Bar - Contact Info & Socials */}
            <div className="top-bar" style={{ backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container flex justify-between items-center text-sm py-2">
                    <div className="flex gap-4 hidden-mobile" style={{ color: 'var(--color-text-secondary)' }}>
                        <span>Sales: +263 771 536 382</span>
                        <span>Email: tadiwachiona@gmail.com</span>
                    </div>
                    {/* Social Icons - Visible on all screens in top bar */}
                    <div className="flex gap-4 items-center" style={{ color: 'white' }}>
                        <span className="hidden-mobile" style={{ color: 'var(--color-text-muted)' }}>Find us on:</span>
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="social-link-icon" title="Facebook"><Facebook size={18} /></a>
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="social-link-icon" title="Instagram"><Instagram size={18} /></a>
                        <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="social-link-icon" title="YouTube"><Youtube size={18} /></a>
                    </div>
                </div>
            </div>

            <div className="navbar">
                <div className="container navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        {/* Circular Logo with Sky Blue Background */}
                        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                            <div style={{
                                backgroundColor: 'var(--color-primary)', // Sky Blue
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                border: '3px solid white',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src={require('../assets/logo-new.jpg')}
                                    alt="Jonathan Epoxy Logo"
                                    style={{ height: 'auto', width: '85%', objectFit: 'contain' }}
                                />
                            </div>
                            <span style={{ fontWeight: '800', fontSize: '1.4rem', color: 'white', letterSpacing: '0.5px' }}>Jonathan Epoxy Works</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-links hidden-mobile">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>

                        {/* WhatsApp Icon appearing once in main menu */}
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                            className="nav-link"
                            style={{ color: '#25D366', display: 'flex', alignItems: 'center', gap: '5px' }}
                            title="Chat on WhatsApp">
                            <WhatsAppIcon size={24} color="#25D366" />
                        </a>

                        <a href="mailto:tadiwachiona@gmail.com?body=hi" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                            <Phone size={18} style={{ marginRight: '8px' }} />
                            Get Quote
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X color="white" /> : <Menu color="white" />}
                    </div>
                </div >

                {/* Mobile Menu Dropdown */}
                {
                    isOpen && (
                        <div className="mobile-menu" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                            <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/gallery" className="mobile-link" onClick={() => setIsOpen(false)}>Gallery</Link>
                            <Link to="/blog" className="mobile-link" onClick={() => setIsOpen(false)}>Blog</Link>
                            <div className="mobile-link flex justify-between items-center">
                                <span style={{ color: 'var(--color-text-secondary)' }}>Contact Us</span>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                                    <WhatsAppIcon size={24} color="#25D366" />
                                </a>
                            </div>
                            <a href="mailto:tadiwachiona@gmail.com?body=hi" className="mobile-link text-gold" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }} onClick={() => setIsOpen(false)}>Get Premium Quote</a>
                        </div>
                    )
                }
            </div >
        </nav >
    );
};

export default Navbar;
