import React from 'react';
import { Fade } from "react-awesome-reveal";
import intro from '../Images/degital.jpg';
import projimg from '../Images/Picsart_23-09-01_16-22-18-095.jpg';
import skillimg from '../Images/Picsart_23-09-02_02-19-11-790.jpg';
import courseimg from '../Images/Picsart_23-09-01_16-18-46-238.jpg';
import Dmrcmp from './Dmrcmp';
import Dmlfcmp from './Dmlfcmp';
import Dmlfccmp from './Dmlfccmp';

export default function Design() {
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
        <Fade delay={200}><Dmlfcmp imgd={projimg} /> </Fade>
        <Fade delay={200}><Dmrcmp imgd={skillimg} /> </Fade>
        <Fade delay={200}><Dmlfccmp imgd={courseimg} /> </Fade>
      </div>
    </div>
  );
}
