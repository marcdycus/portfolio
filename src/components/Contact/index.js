import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./contact.css"
import data from "../../myData.js";


class Contact extends Component {
    state = {}
    render() {
        return (<div className="container">
            <h1>
                <Fade bottom cascade>Contact.</Fade>
            </h1>
            <Fade bottom>
                <div className='contact-content'>
                    <p id="friends">Let's be
                        <span className='amazingColor'> internet friends</span><br></br>
                    </p>
                    <ul id="socialList">

                        {data.social.map((link, index) => (
                            <div className="imgContainer">
                                <li key={index} className="item">
                                    <a target="new" rel="noopener noreferrer" href={link.url} className="itemLink">
                                        <img className="social" src={link.img} alt={link.name}></img>
                                    </a>
                                </li>
                            </div>
                        ))}

                    </ul>
                    <p id="questions">You can also reach out to me directly if you have any questions or opportunities.</p>
                    <div className="emailContainer"><div className="imgContainer">
                        <a href={`mailto:${data.email.url}`} className='itemLink'><img className="social" src={data.email.img} alt={data.email.name}></img></a>
                    </div></div>
                    
                </div>
            </Fade>

        </div>);
    }
}

export default Contact;