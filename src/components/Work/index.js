import React, { Component } from 'react';
import Project from "../Project";
import Fade from 'react-reveal/Fade';
import "./work.css";
import data from "../../myData.js";

class Work extends Component {
    state = {  }
    render() { 
        return (<div className="container">
        <h1 className='heading'>
        <Fade bottom cascade>Work.</Fade></h1>
        <div className='work-content'>
            <ul>
                {data.projects.map((project)=>(
                    <li className="project-li">
                        <Project key={project.id}
                             name = {project.name}
                             service = {project.service}
                             gif = {project.gif}
                             image = {project.img}
                             url={project.url}
                        ></Project> 
                     </li>
                 ))}
            </ul>
        </div>
        </div>  );
    }
}
 
export default Work;
