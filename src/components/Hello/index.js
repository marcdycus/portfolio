import React from "react";
import "./hello.css";
import $ from "jquery";


function Hello() {

    var i = 0,
        a = 0,
        atParagraph = 0,
        typing = true;

    // text array
    var textArray = [
        " HELLO WORLD|I'M MARCUS_WELCOME",
    ];

    // Speed of typing
    var speedForward = 90, //Typing Speed
        speedBetweenLines = 900; //Wait between first and second lines


        // if the array isn't complete yet
    if (typing) {

        setTimeout(function () { typeWriter("output", textArray) }, 1000); // wait to start typing

        function typeWriter(id, ar) {
            var element = $("#" + id),
                aString = ar[a],
                eHeader = element.children("#hello"), //Header element
                eParagraph = element.children("#hello1"), //Subheader element
                eParagraph2 = element.children("#hello2");



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
                if (i == aString.length) {
                    return (typing = false);
                } else if (atParagraph === 0) {
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
    } else {
        return false
    }


    return (
        <div className="App-header container py-5">
            <div className="output" id="output">
                <p id="hello" className="cursor"></p>
                <h1 id="hello1"></h1>
                <p id="hello2"></p>

            </div>

        </div>
    )
}

export default Hello;