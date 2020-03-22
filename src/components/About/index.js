import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import data from '../yourdata';
import "./about.css";
import landscape from "../../img/landscape.jpg";

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about container'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p className="aboutText">
                        about me blah blah long text
                        
                        {/* {data.abouttext} */}
                    </p>
                    
                        ><img src={landscape}></img>
            </Fade>
            </div>
            {/* {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null} */}
            

        </div>  );
    }
}
 
export default About;