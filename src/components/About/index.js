import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../../myData';
import "./about.css";
import landscape from "../../img/landscape.jpg";

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about container'>
            <div className='about-content'>
            
            <h1 id="about"><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom><img id="landscape" src={landscape}></img></Fade>
            <Fade bottom>
                    <p className="aboutText">
                        {/* about me blah blah long text al;kjdfl;kjafl;jkv  ao v;neiin v idnvnne i i eai neiin 
                        vokvn ei naoane oanmv  aoenr oe arpoi2nvnbmcm0 cocoeo voeoe a  a oine voiiwnapcocv
                        falnvoiefoie nvovomeoa0n3o vnvoeoeoihgjbnckielew aolc.eoet  ovoelalv eoangoiboielap
                        about me blah blah long text al;kjdfl;kjafl;jkv  ao v;neiin v idnvnne i i eai neiin 
                        vokvn ei naoane oanmv  aoenr oe arpoi2nvnbmcm0 cocoeo voeoe a  a oine voiiwnapcocv
                        falnvoiefoie nvovomeoa0n3o vnvoeoeoihgjbnckielew aolc.eoet  ovoelalv eoangoiboielap
                        about me blah blah long text al;kjdfl;kjafl;jkv  ao v;neiin v idnvnne i i eai neiin 
                        vokvn ei naoane oanmv  aoenr oe arpoi2nvnbmcm0 cocoeo voeoe a  a oine voiiwnapcocv
                        falnvoiefoie nvovomeoa0n3o vnvoeoeoihgjbnckielew aolc.eoet  ovoelalv eoangoiboielap
                         */}
                        {data.aboutText}
                    </p>
                    

                       
            </Fade>
            </div>
            {/* {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null} */}
            

        </div>  );
    }
}
 
export default About;