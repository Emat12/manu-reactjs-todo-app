import React from "react"

import { useState } from "react"

//import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom" 

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar=()=>{
    //return <div> Hello from Navbar</div>

    const links=[{
        id:1,
        path:"/",
        text:"Home"
     },
     {
     id:2,
     path:"/about",
     text:"About"   
     },
     {
      id:3,
      path:"/product",
      text:"Product"
     },
     {
      id:4,
      path:"/portfolio",
      text:"Portfolio"
     },
     {
      id:5,
      path:"/contact",
      text:"Contact"
     }
    ]

   const [navbarOpen,setNavbarOpen]=useState(false) 

   const handleToggle=()=>{
      setNavbarOpen (prev => !prev)
   }

   const closeMenu=()=>{
      setNavbarOpen(false)
   }
   
   return (
    <nav className="navBar">
 <button onClick={handleToggle}>{navbarOpen ? (<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />) : (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)}</button>
    <ul className={`menuNav ${navbarOpen ? "showMenu":""}`}>
     {links.map(link => {
         return <li key={link.id}>
         <NavLink
          to={link.path} 
          activeClassName="active-link"
          onClick={()=> closeMenu()}>
         <a href="#">{link.text}</a>  
         </NavLink>    
         </li>
     })}
    </ul>
    </nav>
     )

}





export default Navbar;