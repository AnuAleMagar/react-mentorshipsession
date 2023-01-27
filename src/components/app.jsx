import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Project from "./project";

function App()
{
    return (<>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element ={<About contact="9810058325" />} />
        <Route path="/project" element ={<Project />} />
        <Route path="/contact" element ={<Contact />} />
    </Routes>
    </>
     
    );
}
export default App;