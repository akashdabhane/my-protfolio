import { Animated } from "react-animated-css";
import developer from "../images/developer.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linkedIn.png"
import github from "../images/github.png"
import darkMode from "../images/darkMode.png"
import dayMode from "../images/dayMode.png"
import circle from "../images/circle.png"
import square from "../images/square.png"
import triangle from '../images/triangle.png'
import React from 'react'

export default function HomePage() {
    function myFunction() {
        let element = document.body;
        element.classList.toggle("dark-mode");
        document.getElementById("modeImage").src = { dayMode };  
    }
    const styleObj = {
        marginTop: 50
    }
    return (

        <div>
            <div className="container">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration={2500} animateOnMount={true} isVisible={true}>
                    <div id='homePage'>
                        <img src={developer} alt="BigCo Inc. logo" />
                        <div id='homePageText'>
                            <h2>Hello!</h2>
                            <div id="pitch">
                                I'm Akash, a Web Developer || App Developer based in Mumbai.
                            </div>
                        </div>
                    </div>
                </Animated>
                <div className='endLine'></div>


                <div id='educationTitle'>
                    <div><li>Education</li></div>
                </div>
                <div id="myEducationContainer">
                    <div id='myEducation'>
                        <div className='education'>
                            <img src={square} alt="" />
                            <div id="eduInfo">
                                <h2>Diploma In Computer Engineering</h2>
                                <h3>Government Polytechnic Mumbai</h3>
                                49, Kherwadi, A.Y.Jung Marg, Bandra (East), Mumbai- 40005
                                <div style={{ marginTop: 12 }}>percentage: - </div>
                            </div>
                        </div>
                        <div className='education' style={styleObj}>
                            <img src={square} alt="" />
                            <div id="eduInfo">
                                <h2>Secondary school</h2>
                                <h3>Jagruti Vidyalaya Dahagaon</h3>
                                Dahagaon, Taluka- Kalyan, Dist.- Thane
                                <div style={{ marginTop: 12 }}>percentage: 90.40% </div>
                            </div>
                        </div>
                    </div>
                    <div id="skills">
                        <h2 style={{ textAlign: "center", color: "black" }}>Skills</h2>
                        <div id="skillsCtgrztn">
                            <div id="webDev" style={{paddingLeft:30}}>
                                <div className="skillList">HTML/CSS</div>
                                <div className="skillList">Javascript</div>
                                <div className="skillList">React.Js</div>
                                <div className="skillList">SQL</div>
                                <div className="skillList">MongoDB</div>
                            </div>
                            <div id="appDev" style={{paddingLeft:30}}>
                                <div className="skillList">Android</div>
                                <div className="skillList">Java</div>
                                <div className="skillList">Python</div>
                                <div className="skillList">R language</div>
                                <div className="skillList">C/C++</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='endLine'></div>


                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration={2500} animateOnMount={true} isVisible={true}>
                    <div id='contactMeTitle'>
                        <div></div>
                        <div><li>Contact Me</li></div>
                    </div>
                    <div id='contactMe'>
                        <div id='socialMediaContact'>
                            <h3>Contact</h3>
                            <div className="socialMediaIconAndLinks">
                                <a href="https://www.instagram.com/akash.dabhane_/?hl=en" target="_blank">
                                    <li id="instagramLi">
                                        <img id="instagramImg" src={instagram} alt="" />
                                        Instagram
                                    </li>
                                </a>
                                <a href="https://www.linkedin.com/feed/" target="_blank">
                                    <li id="linkedLi">
                                        <img id="linkedInImg" src={linkedIn} alt="" />
                                        LinkedIn
                                    </li>
                                </a>
                                <a href="https://github.com/akashdabhane" target="_blank">
                                    <li id="githubLi">
                                        <img id="githubImg" src={github} alt="" />
                                        Github
                                    </li>
                                </a>
                                <a href="mailto:akashdabhane10@gmail.com" target="_blank" >
                                    <li id="EmailLi">
                                        akashdabhane10@gmail.com
                                    </li>
                                </a>
                            </div>
                        </div>
                        <form id='emailContact' action="https://formsubmit.co/b78d9ef524143958099718c199159b65" method="POST">
                            <div id='emailHeader'>
                                <input id='fullName' type="text" name="name" placeholder="Enter Your Name" required></input>
                                <input id='emailAddress' type="email" name="email" placeholder='Enter Your Email' required></input>
                            </div>
                            <div id='emailBody'>
                                <textarea id="email" type="text" name="message" placeholder='Enter your message..' required></textarea>
                                <button id='sendEmailBtn' type="submit">Send Email</button>
                            </div>
                        </form>
                    </div>
                </Animated>
                <div className='endLine'></div>

                <div className="lastImgHome contactMe">
                    <a href="#homePage"><img id="triangleUpImage" src={triangle} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

