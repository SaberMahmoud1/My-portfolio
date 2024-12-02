import React, { useState, useEffect } from 'react';
import Nav from './Nav'; // Import Nav component for individual link items
import home from '../Images/computer-icons-house-blue-technology-0a0b4bf9169418b2d715b685b61e3cc3.png';
import research from '../Images/research.jpg';
import ddesign from '../Images/degital.jpg';
import web from '../Images/wep.png';
import about from '../Images/PngItem_3406810.png';
import emb from '../Images/emb.jpg';

export default function Navbar() {
  const [opacity, setOpacity] = useState(1); // Initialize opacity state
  const [pointerEvents, setPointerEvents] = useState('auto'); // Initialize pointerEvents state

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get vertical scroll position
      const maxFadeHeight = 200; // Maximum scroll height for fading
      const newOpacity = Math.max(1 - scrollY / maxFadeHeight, 0); // Fully fade out at maxFadeHeight
      setOpacity(newOpacity);
      setPointerEvents(newOpacity > 0 ? 'auto' : 'none'); // Disable interactions when opacity is 0
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener
  }, []);

  return (
    <div
      className="mnavbar"
      style={{
        opacity: opacity, // Apply dynamic opacity
        pointerEvents: pointerEvents, // Control clickability dynamically
        transition: 'opacity 0.1s ease-in-out', // Faster transition
      }}
    >
      <ul className="navbar">
        <li>
          <Nav
            linka={"/"}
            title={"Home"}
            description={"Go to Home Page"}
            src={home}
          />
        </li>
        <li>
          <Nav
            linka={"/DigitalElectronics"}
            title={"Digital Electronics"}
            description={"Learn about Digital Electronics"}
            src={ddesign}
          />
        </li>
        <li>
          <Nav
            linka={"/EmbeddedSystems"}
            title={"Embedded Systems"}
            description={"Explore Embedded Systems"}
            src={emb}
          />
        </li>
        <li>
          <Nav
            linka={"/WebDevelopment"}
            title={"Web Development"}
            description={"Web development resources and tutorials"}
            src={web}
          />
        </li>
        <li>
          <Nav
            linka={"/ScientificResearch"}
            title={"Scientific Research"}
            description={"Research topics in various fields"}
            src={research}
          />
        </li>
        <li>
          <Nav
            linka={"/about"}
            title={"About"}
            description={"Learn more about me"}
            src={about}
          />
        </li>
      </ul>
    </div>
  );
}
