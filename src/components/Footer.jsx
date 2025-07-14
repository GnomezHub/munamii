import { Mail, Instagram, Facebook } from "lucide-react";
//import Facebook from '../assets/facebook.svg';
//import Instagram from '../assets/instagram.svg';

// --- Footer Component ---
// This component displays social media links and contact email.
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-400 text-white shadow-inner rounded-t-xl mt-8">
      {/* <footer className="bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-light-blue)] text-white shadow-inner rounded-t-xl mt-8"> */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center">
        {/* Copyright Information */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Munamii Cakery. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com/munamii.cakery/" // Placeholder Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={28} strokeWidth={2.5} />
          </a>
          <a
            href="https://www.facebook.com/munamiicupcakes/" // Placeholder Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook size={28} strokeWidth={2.5} />
          </a>
          <a
            href="mailto:contact@munamiicakery.com" // Placeholder Email Address
            className="text-white hover:text-pink-400 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={28} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
