import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./contact.css"
// import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div className="container">
        <h1>
                <Fade bottom cascade>Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <p>
                Let’s 
                <span className='amazingColor'> create</span><br></br>
                something together
                </p>
                    {/* <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a> */}
                <ul>
                    
                    {/* {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}    */}
                </ul>
        </div>
        </Fade>

            {/* <span className='footer'>Made With ❤ by <a href="http://chetanverma.com/">Chetan Verma</a></span> */}
        </div>);
    }
}
 
export default Contact;