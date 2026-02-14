import React from 'react';

const epoxyTypes = [
    {
        title: 'Metallic Epoxy',
        desc: 'A multi-layered epoxy flooring system that incorporates metallic additives to create exotic, dynamic, and color-shifting effects resembling marble or colored glass. Perfect for showrooms and high-end living spaces.',
        img: '/Images/Capture.JPG'
    },
    {
        title: 'Glycidylamine Epoxy Resins',
        desc: 'With a high level of functionality, these epoxies are generated from the reaction between epichlorohydrin and aromatic amines. They offer exceptional mechanical strength and heat resistance.',
        img: '/Images/Capture1.JPG'
    },
    {
        title: 'Epoxy Resin Diluents',
        desc: 'Specialized compounds used to lower the viscosity of epoxy resins for easier application. They improve flexibility and wetting properties, ensuring a smooth, flawless finish.',
        img: '/Images/Capture3.JPG'
    },
    {
        title: 'Aliphatic Epoxy Resins',
        desc: 'Known for valid resistance to UV degradation and weathering. These resins are the top choice for outdoor applications or areas exposed to sunlight, as they resist yellowing over time.',
        img: 'https://images.unsplash.com/photo-1590674899505-1c5c4125b0ae?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Cycloaliphatic Epoxy Resins',
        desc: 'Offering superior electrical properties and UV resistance, these resins provide a high-gloss, durable finish. Ideal for high-performance coatings where aesthetics are critical.',
        img: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Bisphenol Epoxy Resins',
        desc: 'The industry standard for toughness and adhesion. Bisphenol A & F resins are versatile workhorses used in a vast array of industrial and decorative flooring systems.',
        img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Novolac Epoxy Resins',
        desc: 'Engineered for extreme environments. Novolac resins provide superior chemical and heat resistance, making them the go-to choice for industrial containment and tank linings.',
        img: 'https://images.unsplash.com/photo-1502005229766-528352a2e738?auto=format&fit=crop&w=800&q=80'
    }
];

const Gallery = () => {
    return (
        <div className="gallery-page">
            {/* Header */}
            <div className="section text-center text-white" style={{ background: '#111', padding: '4rem 1rem' }}>
                <h1 className="fade-in" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    Artistry in <span className="text-gold">Epoxy</span>
                </h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#aaa', fontSize: '1.2rem' }}>
                    Explore the technical mastery and aesthetic beauty of our flooring solutions.
                </p>
            </div>

            {/* Types of Epoxy Section */}
            <div className="section container">
                <h2 className="section-title text-center text-gold" style={{ marginBottom: '3rem' }}>Types of Epoxy Resin</h2>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
                    {epoxyTypes.map((type, index) => (
                        <div key={index} className="epoxy-card fade-in" style={{
                            background: 'white',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                            }}
                        >
                            <div style={{ height: '220px', overflow: 'hidden' }}>
                                <img src={type.img} alt={type.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ color: '#222', marginBottom: '1rem', borderBottom: '2px solid #d4af37', display: 'inline-block', paddingBottom: '5px' }}>
                                    {type.title}
                                </h3>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    {type.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="section bg-gold text-center text-white" style={{ padding: '4rem 1rem' }}>
                <h2 style={{ marginBottom: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Inspired by our collection?</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Let's create something beautiful together.</p>
                <a href="mailto:tadiwachiona@gmail.com?body=hi" className="btn" style={{
                    backgroundColor: 'white',
                    color: '#d4af37',
                    padding: '1rem 3rem',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                    Get Quote from Jonathan
                </a>
            </div>
        </div>
    );
};

export default Gallery;
