import React from "react"
import ReactDOM from "react-dom"
//SinglePage component 
import SinglePage from "./functionBased/pages/SinglePage"
//component file
//import TodoContainer from "./components/TodoContainer"

//stylesheet
//import "./App.css" 

import TodoContainer from "./functionBased/components/TodoContainer"   
//Routes 
import {Routes, Route} from "react-router-dom"

//Stylesheet 
import "./functionBased/App.css" 

//React Router library import
//import {BrowserRouter} from "react-router-dom" 
//OR use alias 

import {BrowserRouter as Router} from "react-router-dom"
import About from "./functionBased/pages/About"
import NoMatch from "./functionBased/pages/NoMatch"

//import Navbar from "./functionBased/components/Navbar"
//import {BrowserRouter as Router} from"react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NoMatch />}/>
        <Route path=":slug" element={<SinglePage />} />
      </Routes>                        
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);