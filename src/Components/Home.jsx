import React from 'react';
import { Fade } from "react-awesome-reveal";
import introimg from '../Images/best-app-with-the-highest-quality-wallpapers-video-v0-oa2krnhvnhob1.jpg';
import sumimg from '../Images/WhatsApp Image 2024-11-29 at 01.31.40_848e9588.jpg';
import thinking from '../Images/pngwing.com (7).png';
import project from '../Images/WhatsApp Image 2023-08-25 at 4.03.33 AM.jpeg';
import educ from '../Images/WhatsApp Image 2023-08-25 at 4.06.07 AM.jpeg';
import skill from '../Images/WhatsApp Image 2023-08-25 at 4.06.07 AM (1).jpeg';
import cont from '../Images/WhatsApp Image 2023-08-28 at 4.07.07 AM.jpeg';
import exp from '../Images/exphome.webp';
import cv from '../Images/cv_img.png';
import Lfcmp from './Lfcmp';

export default function Home() {

  return (
    <div 
      className='home'
      style={{
        backgroundImage: `url(${introimg})`, // Set background image dynamically
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Prevent image from repeating
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '1vh',
        paddingBottom: '7vh'
      }}
    >
      {window.scrollTo(0, 0)}
      <div className='intro'>
        <div className='subintro'>
          <h3 className='subintrotitle'>Self Introduction</h3>
          <p className='subintrop'>
            My name is Saber Mahmoud. I live in Giza. My major is Electronics and Electrical Communications. I am interested in Digital Electronics, scientific research, Embedded Systems, and more. For more details, don't hesitate to explore my website.
          </p>
        </div>
        <img src={sumimg} className='introimg' alt='Loading⏳'/>
      </div>

      <div className='postintro'>
        <div className='subpostintro'>
          <h3>What can you find here?</h3>
          <img src={thinking} alt="Thinking" />
        </div>

        <Fade delay={200}>
          <Lfcmp title={'Experience'} para={'My Work experience timeline is mentioned with specifying my role nature in each as well as the organization.'} img={exp} />
        </Fade>
        <Fade delay={200}>
          <Lfcmp title={'Education'} para={'My educational Phases are available for those who are interested. Also, most of the courses I have taken are present with a brief description for each.'} img={educ} />
        </Fade>
        <Fade delay={200}>
          <Lfcmp title={'Projects'} para={'You can find easily most of the projects I worked in. They are mostly related to Digital Electronics, Embedded Systems, and Web Development. Links to many of these projects on GitHub are found and can be easily viewed...by just a few clicks.'} img={project} />
        </Fade>
        <Fade delay={200}>
          <Lfcmp title={'Skills'} para={'Skills gained throughout the journey are added to be explored. They vary between technical and non-technical skills. On each page, you will find the skills related to the page topic to keep the website well-organized.'} img={skill} />
        </Fade>
        <Fade delay={200}>
          <Lfcmp title={'Contact Info.'} para={'My email and social media accounts links are available. If you have any questions or queries, feel free to message me through one of the available means.'} img={cont} />
        </Fade>
        <Fade delay={200}>
          <Lfcmp title={'CV'} para={"Eventually, my CV link is added to the website to be available for anyone who becomes interested while surfing through the pages. You can easily access it through the added link."} img={cv} />
        </Fade>
      </div>
    </div>
  );
}
