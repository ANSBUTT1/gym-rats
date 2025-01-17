import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // For navigation using React Router
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and Close icons
import { FaHome, FaDumbbell, FaUsers, FaPhoneAlt } from 'react-icons/fa'; // Icons for navigation links

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility
  const mobileMenuRef = useRef(null); // Ref for mobile menu to detect click outside

  // Toggle mobile menu on click
  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false); // Close the mobile menu
      }
    };

    // Adding event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-primary text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link to="/" className="text-white">
            FitLife Gym
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={handleMenuToggle}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link to="/" className="flex items-center hover:text-secondary transition duration-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/plan" className="flex items-center hover:text-secondary transition duration-300">
            <FaDumbbell className="mr-2" /> Plans
          </Link>
          <Link to="/about" className="flex items-center hover:text-secondary transition duration-300">
            <FaUsers className="mr-2" /> About Us
          </Link>
          <Link to="/trainer" className="flex items-center hover:text-secondary transition duration-300">
            <FaUsers className="mr-2" /> Trainers
          </Link>
          <Link to="/contact" className="flex items-center hover:text-secondary transition duration-300">
            <FaPhoneAlt className="mr-2" /> Contact
          </Link>
          {/* Join Now Button for Desktop */}
          <Link to="/signup">
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary-dark transition duration-300">
              Join Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible when the hamburger menu is clicked) */}
      <div
        ref={mobileMenuRef} // Attach the ref to the mobile menu
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-primary absolute top-16 left-0 right-0 p-4 rounded-b-lg`}
      >
        <div className="flex flex-col items-center">
          <Link to="/" className="flex items-center text-white py-2 hover:text-secondary transition duration-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/plan" className="flex items-center text-white py-2 hover:text-secondary transition duration-300">
            <FaDumbbell className="mr-2" /> Plans
          </Link>
          <Link to="/about" className="flex items-center text-white py-2 hover:text-secondary transition duration-300">
            <FaUsers className="mr-2" /> About Us
          </Link>
          <Link to="/trainer" className="flex items-center text-white py-2 hover:text-secondary transition duration-300">
            <FaUsers className="mr-2" /> Trainers
          </Link>
          <Link to="/contact" className="flex items-center text-white py-2 hover:text-secondary transition duration-300">
            <FaPhoneAlt className="mr-2" /> Contact
          </Link>
          {/* Join Now Button for Mobile Menu */}
          <Link to="/signup">
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary-dark transition duration-300 mt-4">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
