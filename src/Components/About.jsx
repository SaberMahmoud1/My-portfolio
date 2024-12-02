import React from 'react'
import { Fade } from "react-awesome-reveal";
import aboutintro from '../Images/space.jpg'
import eduintro from '../Images/wallpaperflare.com_wallpape.jpg'
import lanintro from '../Images/lang.jpeg'
import hobyntro from '../Images/wallb.jpg'
import techintro from '../Images/technology-2082642-1200x675.jpg'
import cv from '../Images/cv_img.png'
import m from '../Images/m.jpg'
import {
    BrowserRouter as Router, Route, Link, Routes
  } from "react-router-dom";
export default function About() {
    

    return (
        <div
        style={{
            backgroundImage: `url(${aboutintro})`, // Replace with your wallpaper image path
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
        
      <div className='about'>
        <Fade delay={200}>

        <div className='cont'>
       <div className='conttxt'>
        <h1>Education🎓</h1>
        <div className='contitem'>
            <h3>Cairo University-Faculty Of Engineering     (2020-2025)</h3>
            <p>Major in Electronics &  Electrical Communications</p>
        </div>
        <div className='contitem'>
            <h3>bahnnen secondary school     (2017-2019)</h3>
            <p>General Secondary Certificate</p>
        </div>
       </div>
<img src={eduintro}alt='Loading⏳'/>

        </div>
        <div className='cont'>
       <div className='conttxt'>
        <h1>Languages🌍</h1>
        <div className='contitem'>
            <h3>Arabic</h3>
            <p>Native Language</p>
        </div>
        <div className='contitem'>
            <h3>English</h3>
            <p>Upper-Intermediate Level</p>
        </div>
        <div className='contitem'>
            <h3>German</h3>
            <p>Pre-Intermediate Level</p>
        </div>
       </div>
<img src={lanintro}alt='Loading⏳'/>

        </div>
        <div className='cont'>
       <div className='conttxt'>
        <h1>Personal Skills⚙️</h1>
        <div className='contitem'>
            <h3>-Leadership</h3>
            <h3>-Critical Thinking</h3>
            <h3>-Scientific Thinking</h3>
            <h3>-Presentation Skills</h3>
            <h3>-Ability to perform effectively under pressure while maintaining quality and meeting deadlines.</h3>
            <h3>-Self Motivated</h3>
            <h3>-Team Work</h3>
        </div>
       </div>
<img src={techintro}alt='Loading⏳'/>

        </div>
       
     
        <div className='cont'>
       <div className='conttxt'>
        <h1>Hobbies⚽</h1>
        <div className='contitem'>
            <h3>-Football⚽</h3>
            <h3>-Reading📖</h3>
            <h3>-swimming🏊</h3>
            <h3>-body building🏋️</h3>
            <h3>-coding👨‍💻</h3>
            <h3>-chess♟️</h3>
        </div>
       </div>
<img src={hobyntro}alt='Loading⏳'/>

        </div>
<div className='cv'>
    <div className='cvtxt'>
<h1>My C.V.</h1>
<p>Eventually, you can easily view my updated C.V. from the link below.😃</p>
<Link to="https://drive.google.com/drive/folders/1-fDF8Ijm5INqgmP41iWjpOnKb-N1pD7o">S.M. C.V. </Link>
    </div>
    <img src={cv}alt='Loading⏳'/>
</div>   
        </Fade>
        <img src={m}className='m'alt='Loading⏳'/>
        </div> 
</div>
        
    )
}
