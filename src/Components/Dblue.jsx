import React from 'react'
import {
    BrowserRouter as Router, Route, Link, Routes
  } from "react-router-dom";
export default function ({title,para,img,linka}) {
    

    return (
        <div className='blue'>
            <h3>{title}</h3>
            <div className='subblue'>
                <div className='txt'>
                <p>{para}</p>
                <Link to={linka}>Click here for the code.</Link>
                </div>
                <img src={img}alt='Loading⏳'/>
            </div>
            
        </div>
    )
}
