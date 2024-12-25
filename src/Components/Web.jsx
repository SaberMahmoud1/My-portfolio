import React from 'react';
import { Fade } from "react-awesome-reveal";
import intro from '../Images/wep.jpg';
import projimg from '../Images/ropot.png';
import skillimg from '../Images/Picsart_23-09-02_02-19-11-790.jpg';
import Wmlfcmp from './Wmlfcmp';
import Wmrcmp from './Wmrcmp';
export default function wep() {
  return (
    <div 
      className="digital" 
      style={{
        backgroundImage: `url(${intro})`, // Set background image dynamically
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh', // Ensure it covers the full height of the viewport
      }}
    >
      
      <div className='dcontainer'>
        <Fade delay={200}><Wmlfcmp imgd={projimg} /> </Fade>
        <Fade delay={200}><Wmrcmp imgd={skillimg} /> </Fade>
      </div>
    </div>
  );
}
