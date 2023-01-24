import darkMode from "../images/darkMode.png"
import dayMode from "../images/dayMode.png"
import circle from "../images/circle.png"
import React from 'react'

export default function Narbar() {

    function myFunction2() {
        const changeModeName = document.getElementById('mode');
        changeModeName.addEventListener('click', () => { 
            let element = document.body;
            element.classList.toggle("dark-mode");
            document.getElementById("mode-image").src = { dayMode };
        })
    }

    return (
        <div>
            <nav className="navbar">
                <div id='name'>
                    <img id="navCircle" src={circle} alt="" />
                    Akash Dabhane
                </div>
                <ul>
                    <li id="homeNav"><a href="/">Home</a></li>
                    {/* <li id="contactNav"><a href="#contactMeTitle">Contact</a></li> */}
                    <li id="contactNav"><a href="#contactMeTitle">Contact</a></li>
                    <li id="workNav"><a href="/Work">Work</a></li>
                    <li id="aboutNav"><a href="https://drive.google.com/file/d/1CXwR-vRiFC1WF0-vCrAkC2EHvOu8qGF_/view?usp=share_link" target={"_black"}>Resume</a></li>

                </ul>
                <div id='mode' onClick={myFunction2}>
                    <img src={darkMode} alt='' id='modeImage' />
                    Dark
                </div>
            </nav>
        </div>
    )
}
