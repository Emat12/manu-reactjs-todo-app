import React from "react";
import {Route, Link, Routes, useRouteMatch } from "react-router-dom"
//import SinglePage from "./SinglePage"; 

const About = () => {
 
   
    return <div className="about__content">
        <ul className="about__list">
        <li>
            <Link to="about-app">About App</Link>
        </li>
        <li>
            <Link to="about-author">About Author </Link>
        </li>
        </ul> 
    </div>
}


export default About