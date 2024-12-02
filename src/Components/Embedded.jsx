import React from 'react';
import { Fade } from "react-awesome-reveal";
import intro from '../Images/emb.jpg';
import projimg from '../Images/ropot2.jpg';
import skillimg from '../Images/Picsart_23-09-28_03-37-42-482.jpg';
import courseimg from '../Images/Picsart_23-09-28_03-36-41-079.jpg';
import Emrcmp from './Emrcmp';
import Emlfcmp from './Emlfcmp';
import Emlfccmp from './Emlfccmp';

export default function Embedded() {
    return (
        <div
            style={{
                backgroundImage: `url(${intro})`, // Replace with your wallpaper image path
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '20px',
            }}
        >
            {window.scrollTo(0, 0)}

            {/* Content container */}
            <div className='dcontainer'>
                <Fade delay={200}><Emlfcmp imgd={projimg} /></Fade>
                <Fade delay={200}><Emrcmp imgd={skillimg} /></Fade>
                <Fade delay={200}><Emlfccmp imgd={courseimg} /></Fade>
            </div>
        </div>
    );
}
