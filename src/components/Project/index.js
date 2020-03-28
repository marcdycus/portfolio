import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./project.css";

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
            <a className="project-link" href={this.props.url}>
                <img className="project-img" src={this.props.image} alt={this.props.name}></img>
                <div className="project-content">
                    <h1 id={this.props.key} className="project-title">{this.props.name}</h1>
                    <p className="project-text">{this.props.service}</p>
                    <iframe className="gif" src={this.props.gif}></iframe>
                </div>
            </a>
        </div> 
            </Fade>);
    }
}
 
export default Project;