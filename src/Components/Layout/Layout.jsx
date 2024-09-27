import React, { useEffect, useState } from 'react'
import styles from './/Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout({userData , clearUserData}) {

  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Change this value to the scroll position where you want to show the button
      const scrollThreshold = 200;

      // Update visibility based on scroll position
      setIsVisible(scrollTop > scrollThreshold);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };

  return <>    

    <div className="scroll-btn-container">
      {isVisible && (
        <button className="scroll-btn" onClick={scrollToTop}>
          <i className="fas fs-4 fa-arrow-alt-circle-up"></i>
        </button>
      )}
    </div>

    <Navbar clearUserData={clearUserData} userData = {userData}/>
        <Outlet></Outlet>
    <Footer/>
    
  </>
}
