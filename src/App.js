import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";


function App() {
  var i = 0,
    a = 0,
    atParagraph = 0;

    // text array
  var textArray = [
    " Hello world|My name is Marcus_Welcome",
  ];

  // Speed (in milliseconds) of typing.
  var speedForward = 100, //Typing Speed
    speedBetweenLines = 1000; //Wait between first and second lines

    setTimeout(function () { typeWriter("output", textArray) }, 3000);

  function typeWriter(id, ar) {
    var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("#hello"), //Header element
      eParagraph = element.children("#hello1"), //Subheader element
      eParagraph2 = element.children("#hello2");
      // setTimeout(function () { typeWriter(id, ar); }, speedBetweenLines);

        if (aString.charAt(i) === "|") {
          atParagraph++;
          eHeader.removeClass("cursor");
          eParagraph.addClass("cursor");
          i++;
          setTimeout(function () { typeWriter(id, ar); }, speedBetweenLines);
        } else if (aString.charAt(i) === "_") {
          atParagraph++;
          eParagraph.removeClass("cursor");
          eParagraph2.addClass("cursor");
          i++;
          setTimeout(function () { typeWriter(id, ar); }, speedBetweenLines);
        } else {
          if (atParagraph === 0) {
            eHeader.text(eHeader.text() + aString.charAt(i));
          } else if (atParagraph === 1) {
            eParagraph.text(eParagraph.text() + aString.charAt(i));
          } else if (atParagraph === 2) {
            eParagraph2.text(eParagraph2.text() + aString.charAt(i));
          }
          i++;
          setTimeout(function () { typeWriter(id, ar); }, speedForward);
        }
  }


  return (
    <div className="App">
      <div className="container py-5">
        <div className="output" id="output">
          <p id="hello" className="cursor"></p>
          <p id="hello1"></p>
          <p id="hello2"></p>
          
        </div>
      </div>
      {/* <p id="lineOne">Hello world <br></br>My name is Marcus<br></br>Welcome</p> */}
      {/* <p id="lineTwo">My name is Marcus</p> */}
      {/* <p></p> */}
      {/* <p id="lineThree">Welcome</p> */}
      {/* <span className="blinking-cursor">_</span> */}



    </div>
  );
}

export default App;
