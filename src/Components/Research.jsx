import React from 'react'
import { Fade } from "react-awesome-reveal";
import {
    BrowserRouter as Router, Route, Link, Routes
  } from "react-router-dom";
  import report1 from '../Images/report1.png'
  import poster1 from '../Images/poster1.png'
  import GOAT from '../Images/GOAT.jpg'
  import vinamatics from '../Images/vinamatics.jpg'
  import report2 from '../Images/report2.png'
  import poster2 from '../Images/poster2.png'
  import intro from '../Images/research.jpg'
export default function Research() {
    

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
        <div className='research'>
             {window.scrollTo(0,0)}
      <div className='pintro'>
      <h1>The 7th engineering scientific forum</h1>
      <Fade delay={200}><div className='fintro'>
       <p> This research project was an incredibly rewarding experience, spanning approximately 80 days from initiation to the results presentation. It significantly enhanced my understanding of inverse kinematics, algorithm design, and robotic motion control. The process sharpened my skills in scientific research, mathematical modeling, and practical problem-solving, culminating in a deeper appreciation of kinematics' applications in robotics and automation.</p>
       <img src={GOAT}alt='Loading⏳'/>
      </div></Fade>
     <Fade delay={200}> <div className='tintro'>
      <p>Our team project, titled "Robot Kinematics: A Study on Inverse Kinematics," focused on modeling and analyzing the motion of robotic arms to solve inverse kinematics problems. We utilized mathematical equations, such as trigonometric relationships and geometric constraints, to implement and simulate robotic arm motion. These equations were instrumental in developing algorithms for calculating joint angles, enabling precise positioning and practical applications in robotics and automation.</p>
      <img src={""}alt='Loading⏳'/>
      </div></Fade>
      <Fade delay={200}><div className='reintro'>
      <div className='retext'>
        <p>
          As a normal scientific research process, the journey started with the problem definintion phase. Then, going through the phases till reaching the Experimental work phase where we tried to test our model thorugh multi-tests. Hence, we were able then to compare the results with other models. Based on more than 30 references the report was executed. 
        </p>
       <Link to={"https://drive.google.com/drive/folders/1DbycS7yXm1qUWLMHKKgWrQwv3c9JoEoe"}>Click here to view the Report</Link>
      </div>
      <img src={report1}alt='Loading⏳'/>
      </div></Fade>
      <Fade delay={200}><div className='pointro'>
        <div className='retextp'>
          <p>We had to construct a brief explanatory scientific poster by which we can explain to the judging doctors what we had done and what we had reached. I had the honour to design the major percentage of this poster. I was also-as a team leader-one of the main presenters on that day. </p>
          <Link to={"https://drive.google.com/drive/folders/1DbycS7yXm1qUWLMHKKgWrQwv3c9JoEoe"}>Click here to view the Poster</Link>       
        </div>
        <img src={poster1}alt='Loading⏳'/>
      </div></Fade>
      </div>
      <div className='pintro'>
      <h1>The 8th engineering scientific forum</h1>
      <Fade delay={200}><div className='fintro'>
       <p> It was also one of the most interesting experiences that I went through. it also took around 80 days from beginning to the results day was an excellent way to enhance my skills concerning scientific research.</p>
       <img src={vinamatics}alt='Loading⏳'/>
      </div></Fade>
     <Fade delay={200}> <div className='tintro'>
      <p>veinmatics-our team-project title was "Mathematical Modeling and Diagnosis of Atherosclerosis". Conducted an in-depth study on the causes and diagnosis of atherosclerosis, focusing on mathematical modeling to predict and analyze plaque buildup in arterial walls. </p>
      <img src={""}alt='Loading⏳'/>
      </div></Fade>
      <Fade delay={200}><div className='reintro'>
      <div className='retext'>
        <p>The research journey began with defining the problem, forming the foundation for the subsequent phases. Progressing through these stages, we reached the experimental phase, where our model was rigorously tested through multiple trials. This allowed us to effectively compare our findings with existing models and draw meaningful conclusions.</p>
       <Link to={"https://drive.google.com/drive/folders/1ZzMKIchIbnsl0-gS7N9ccjv9SKngOpyC"}>Click here to view the Report</Link>
      </div>
      <img src={report2}alt='Loading⏳'/>
      </div></Fade>
      <Fade delay={200}><div className='pointro'>
        <div className='retextp'>
          <p>We had to construct a brief explanatory scientific poster by which we can explain to the judging doctors what we had done and what we had reached. I had the honour to design the major percentage of this poster. I was also-as a team leader-one of the main presenters on that day. </p>
          <Link to={"https://drive.google.com/drive/folders/1ZzMKIchIbnsl0-gS7N9ccjv9SKngOpyC"}>Click here to view the Poster</Link>       
        </div>
        <img src={poster2}alt='Loading⏳'/>
      </div></Fade>
      </div> 
        </div> 
    </div>
    )
}
