import React from 'react';
import './Home.css';
import modelImage from '../../assets/model-1.jpg'; // Import the image

function Home() {
    return (
        <div className="home-page">
            <section className="intro-section">
                <h2>Welcome to The Model Method</h2>
                <p>Discover the essential tools, skills, and strategies that will guide you to success in the modeling world. Our courses are designed for both beginners and professionals who want to elevate their careers.</p>
            </section>

            <section className="features-section">
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Expert guidance from industry professionals</li>
                    <li>Comprehensive portfolio building techniques</li>
                    <li>Focus on personal branding and marketing</li>
                    <li>Hands-on experience through practical exercises</li>
                    <li>Lifetime access to resources and updates</li>
                </ul>
            </section>

            <section className="model-image-section">
                <h3>Meet Our Models</h3>
                <img src={modelImage} alt="Professional Model" className="model-image" />
            </section>

            <section className="testimonials-section">
                <h3>What Our Clients Say</h3>
                <div className="testimonial">
                    <p>"The Model Method has transformed my career. I went from an aspiring model to a professional booked for major campaigns!"</p>
                    <span>- Emma, Professional Model</span>
                </div>
                <div className="testimonial">
                    <p>"The resources and tips I received gave me the confidence and knowledge I needed to succeed in a competitive industry."</p>
                    <span>- Liam, Aspiring Model</span>
                </div>
            </section>

            <section className="cta-section">
                <h3>Ready to Get Started?</h3>
                <p>Join us today and take the first step toward your modeling career.</p>
                <button className="cta-button">Sign Up Now</button>
            </section>
        </div>
    );
}

export default Home;
