import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './nav.css';
class Navbar extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (<nav id="navContainer">
            <ul id="navList">
                <li className="listItem">
                    <div className="linkContainer">
                        <Link
                            className='linkItem'
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={this.scrollToTop}
                        >Home</Link>
                    </div>
                </li>
                <li className="listItem">
                    <div className="linkContainer">
                        <Link
                            className='linkItem'
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={400}
                        >About</Link></div></li>
                <li className="listItem">
                    <div className="linkContainer">
                        <Link
                            className='linkItem'
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={400}
                        >Work</Link></div></li>
                <li className="listItem">
                    <div className="linkContainer">
                        <Link
                            className='linkItem'
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={400}
                        >Contact</Link></div></li>
            </ul>
        </nav>);
    }
}

export default Navbar;