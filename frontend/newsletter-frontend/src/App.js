import './App.css';
import React from 'react';
import NewsletterSubscription from './NewsletterSubscription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSkype, faInstagram } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue-600 w-full">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-blue-400 text-white text-center p-8 md:p-12 w-full">
      <h2 className="text-4xl font-bold">Welcome to Our Newsletter</h2>
      <p className="text-lg">Stay updated with our latest news and offers.</p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h4 className="font-bold">Explore</h4>
          <a href="#home" className="text-gray-400 hover:text-gray-200">Home</a>
          <a href="#questions" className="text-gray-400 hover:text-gray-200">Questions</a>
          <a href="#articles" className="text-gray-400 hover:text-gray-200">Articles</a>
          <a href="#tutorials" className="text-gray-400 hover:text-gray-200">Tutorials</a>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-bold">Support</h4>
          <a href="#faqs" className="text-gray-400 hover:text-gray-200">FAQs</a>
          <a href="#help" className="text-gray-400 hover:text-gray-200">Help</a>
          <a href="#contact" className="text-gray-400 hover:text-gray-200">Contact Us</a>
          <br/>
          <h1 className="text-3xl font-bold">DEV@Deakin</h1>
          <br/>
          <p><a href="#privacy" className="text-gray-400 hover:text-gray-200 mx-2">Privacy Policy</a>
          <a href="#terms" className="text-gray-400 hover:text-gray-200 mx-2">Terms</a>
          <a href="#code-of-conduct" className="text-gray-400 hover:text-gray-200 mx-2">Code of Conduct</a>
          </p>
        </div>

        <div className="flex flex-col items-end">
          <h4 className="font-bold">Stay Connected</h4>
          <div className="flex space-x-2">
            <a href="#facebook" className="text-gray-400 hover:text-gray-200">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#skype" className="text-gray-400 hover:text-gray-200">
              <FontAwesomeIcon icon={faSkype} size="lg" />
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-gray-200">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default App;

