import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// METHOD 1: Import a local image (Move your image to src/images/ first)
// import localImage from '../images/Capture.JPG'; 

const Counter = ({ target, duration }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;

        let totalMiliseconds = duration;
        let incrementTime = Math.max(totalMiliseconds / end, 10);

        let timer = setInterval(() => {
            start += Math.ceil(end / (duration / 50));
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <span className="counter-spin">{count.toLocaleString()}</span>;
};

const RotatingNames = () => {
    const names = [
        "Sandra Ndlovu", "Chipo Kwayedza", "Ian Chikomborero",
        "Brendon Kasasa", "Farai Moyo", "Tinotenda Gumbo",
        "Kudzai Mutasa", "Rudo Zhou", "Tinashe Maramba", "Nyasha Makoni"
    ];
    const [index, setIndex] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % names.length);
                setFade(true);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, [names.length]);

    return (
        <div style={{
            transition: 'all 0.5s ease',
            opacity: fade ? 1 : 0,
            transform: fade ? 'scale(1)' : 'scale(0.8) rotate(5deg)',
        }}>
            <h4 className="text-gold" style={{ fontSize: '1.8rem', margin: 0, fontWeight: '700' }}>{names[index]}</h4>
        </div>
    );
};

const RotatingComments = () => {
    const comments = [
        "Exceptional quality!", "Love my new garage floor!", "Very professional team.",
        "Highly recommended.", "Best epoxy service in town.", "Durable and beautiful finish.",
        "The finish is like glass!", "Top-notch customer service.", "Transformed our warehouse."
    ];
    const [index, setIndex] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % comments.length);
                setFade(true);
            }, 500);
        }, 4000);
        return () => clearInterval(interval);
    }, [comments.length]);

    return (
        <div style={{
            transition: 'all 0.5s ease',
            opacity: fade ? 1 : 0,
            transform: fade ? 'translateY(0)' : 'translateY(10px)',
            minHeight: '35px'
        }}>
            <p style={{ color: 'white', fontStyle: 'italic', fontSize: '1.2rem', margin: 0, letterSpacing: '0.05em' }}>
                <span style={{ color: 'var(--color-primary)', marginRight: '10px', fontSize: '1.5rem' }}>"</span>
                {comments[index]}
                <span style={{ color: 'var(--color-primary)', marginLeft: '10px', fontSize: '1.5rem' }}>"</span>
            </p>
        </div>
    );
};

const Home = () => {
    // slideshow State
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    // Images for the slideshow

    const backgroundImages = [
        require('../assets/slide1.jpg'),
        require('../assets/slide2.jpg'),
        require('../assets/slide3.jpg'),
        require('../assets/slide4.jpg'),
        require('../assets/slide5.jpg')
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [backgroundImages.length]);


    const emailLink = "mailto:tadiwachiona@gmail.com?body=hi";

    return (
        <div className="home-page">
            {/* Hero Section with Slideshow */}
            <section className="hero section flex items-center justify-center bg-gold" style={{
                position: 'relative',
                minHeight: '90vh',
                overflow: 'hidden'
            }}>
                {/* Background Images Overlay */}
                {backgroundImages.map((img, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: index === currentImageIndex ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out',
                            zIndex: 0
                        }}
                    />
                ))}

                <div className="container text-center fade-in" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ marginBottom: '1.5rem', color: 'white', fontSize: '3.5rem', fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        Transform Your Space with <br /><span className="text-gold">Premium Epoxy Flooring</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '700px', marginInline: 'auto', color: '#f0f0f0', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                        Industrial-grade durability meets showroom aesthetics. Experience the slideshow of our finest work.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href={emailLink} className="btn btn-primary">Get Quote from Jonathan <ArrowRight size={18} style={{ marginLeft: '8px' }} /></a>
                        <Link to="/gallery" className="btn btn-outline">View Gallery</Link>
                    </div>
                </div>
            </section>

            {/* Live Stats & Activity Section */}
            <div style={{
                backgroundColor: 'var(--color-bg-secondary)',
                padding: '4rem 0',
                borderBottom: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        {/* Profile Reveals Counter */}
                        <div className="stat-card" style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="text-gold" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                <Counter target={1284} duration={2000} />
                            </div>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>Profile Reveals</p>
                        </div>

                        {/* Clients Attended Counter */}
                        <div className="stat-card" style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="text-gold" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                <Counter target={856} duration={2500} />
                            </div>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>Clients Attended</p>
                        </div>

                        {/* Active Clients Reveal (Rotating) */}
                        <div className="stat-card" style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <RotatingNames />
                            </div>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>Active Now</p>
                        </div>
                    </div>

                    {/* Rotating Comments under the profile reveals bar */}
                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(14, 165, 233, 0.1)', padding: '1.5rem', borderRadius: '50px', border: '1px dashed var(--color-primary)' }}>
                            <RotatingComments />
                        </div>
                    </div>
                </div>
            </div>


            {/* Services Section */}
            <section className="section" style={{ backgroundColor: 'white', padding: '5rem 0' }}>
                <div className="container text-center">
                    <h2 className="section-title text-gold" style={{ marginBottom: '3rem' }}>Our Professional Services</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Residential Epoxy', desc: 'Stunning garage, basement, and living room floors that last a lifetime.', icon: '🏠' },
                            { title: 'Commercial Flooring', desc: 'High-performance, slip-resistant coatings for retail and offices.', icon: '🏢' },
                            { title: 'Industrial Coatings', desc: 'Heavy-duty protection for warehouses and factories.', icon: '🏭' },
                        ].map((service, idx) => (
                            <div key={idx} style={{ padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '12px', background: 'white' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                                <h3 style={{ marginBottom: '1rem', color: '#333' }}>{service.title}</h3>
                                <p style={{ color: '#666' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                <div className="container">
                    <h2 className="text-center section-title text-gold" style={{ marginBottom: '3rem' }}>Why Choose Epoxy?</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Durability', desc: 'Resistant to stains, impact, and heavy traffic.' },
                            { title: 'Aesthetics', desc: 'Customizable colors, patterns, and high-gloss finishes.' },
                            { title: 'Low Maintenance', desc: 'Easy to clean and maintain for years to come.' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ padding: '2rem', background: 'var(--color-bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <CheckCircle className="text-gold" size={32} style={{ marginBottom: '1rem' }} />
                                <h3 style={{ marginBottom: '0.5rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section" style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '5rem 0' }}>
                <div className="container text-center">
                    <h2 className="section-title text-gold" style={{ marginBottom: '4rem' }}>Our Process</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {[
                            { step: '01', title: 'Consultation', desc: 'We assess your needs and provide a free quote.' },
                            { step: '02', title: 'Preparation', desc: 'Diamond grinding and surface repair.' },
                            { step: '03', title: 'Application', desc: 'Expert installation of multiple epoxy layers.' },
                            { step: '04', title: 'Completion', desc: 'Final inspection and walkthrough.' },
                        ].map((item, idx) => (
                            <div key={idx} className="process-card">
                                <span style={{ fontSize: '4rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.1)', display: 'block', marginBottom: '-1rem' }}>{item.step}</span>
                                <h3 style={{ color: '#d4af37', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section" style={{ backgroundColor: 'white', padding: '5rem 0' }}>
                <div className="container text-center">
                    <h2 className="section-title text-gold" style={{ marginBottom: '3rem' }}>Client Testimonials</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: 'Sarah M.', text: 'Absolutely transformed our garage. The team was professional and fast!', role: 'Homeowner' },
                            { name: 'James P.', text: 'Best investment for our warehouse. Easy to clean and looks great.', role: 'Business Owner' }
                        ].map((t, idx) => (
                            <div key={idx} style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '12px', textAlign: 'left' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#555' }}>"{t.text}"</p>
                                <h4 style={{ color: '#333', fontWeight: 'bold' }}>{t.name}</h4>
                                <span style={{ fontSize: '0.85rem', color: '#888' }}>{t.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Quote Section */}
            <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg-accent)' }}>
                <div className="container text-center">
                    <h2 className="text-gold">Ready to Upgrade Your Floor?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>Contact us today for a free consultation and quote.</p>
                    <a href={emailLink} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Contact Us Now</a>
                </div>
            </section>
        </div>
    );
};

export default Home;
