import React from "react";
import "./hello.css";
import $ from "jquery";


function Hello() {
    return (
        <div className="App-header py-5" id="helloContainer">
            <div className="output" id="output">
                {/* <p id="hello" className="cursor"></p> */}
                <h1 id="hello1">Hey, I'm Marc.</h1>
                <p id="hello2">Web designer and developer from Brooklyn.</p>

            </div>  
            <div id="arrowDiv">
                <div id="arrow">
                   <p id="arrowImg">&#8595;</p> 
                </div>
            </div>
            
        </div>
    )
}

export default Hello;