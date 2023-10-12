import {FaCode,FaCrop,FaAppStoreIos,FaExternalLinkAlt,FaPhone,FaEnvelope} from "react-icons/fa";

function Main() {

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(event, tabname) {
        if (event.currentTarget) {
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (var tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        }
    }
  return (
    <> 
        
       {/* About */}
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="profile.jpg"/>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>I live in Pugaan, Iligan City. I'm 20 years old and I love playing video games, riding bicycle 
                            and spending time with the love of my life. Currently I'm a third year student in St. Peter's College Iligan, 
                            taking the Bachelor of Science in Information Technology course. I'm an Ambivert person who's introvert when I'm not comfortable
                            with the people in sorroundings and I'm extrovert when I feel comfortable. This one is my favorite quote
                            "Don't stop when you're tired, Stop when you're done".</p>

                        <div className="tab-titles">
                        <p className="tab-links active-link" onClick={(event) => opentab(event, 'skills')}> Skills</p>
                        <p className="tab-links" onClick={(event) => opentab(event,'experience')}> Experience</p>
                        <p className="tab-links" onClick={(event) => opentab(event,'education')}> Education</p>

                        </div>
                        <div className="tab-contents active-tab" id="skills" >
                            <ul>
                                <li><span>CSS NCII</span><br/>Configure computer systems and setup networks and servers</li>
                                <li><span>UI/UX</span><br/>Designing Web/App interface</li>
                                <li><span>Web Development</span><br/>Web App Development</li>
                            </ul>    
                        </div> 
                        <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>2023 - Current</span><br/>Learning Design and Development</li>
                                <li><span>2019 - 2020</span><br/> OJT about computer servicing</li>
        
                            </ul>    
                        </div> 
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>College - Current</span><br/>Still Studying (3rd Year)</li>
                                <li><span>Senior High School (2018 - 2020)</span><br/> Iligan Access Institute of Technology Inc.</li>
                                <li><span>High School (2014 - 2018) </span><br/>Espiridion F. Encabo I Memorial High School</li>
                                <li><span>Primary School (2009 - 2014)</span><br/>Ibajay Central School</li>                                                                                      
                            </ul>    
                        </div>    
                    </div>
                </div>
            </div>
        </div>
       {/* Services */}

       <div id="services">
            <div className="container">
                <h1 className="sub-title"> My Services</h1>
                <div className="services-list">
                    <div>
                        <FaCode className="icon"/>
                        <h2>Web Design</h2>
                        <p> I've never done this but I want to try <br/> Help me to have experience
                         <br/> I want to try IT field <br/> I hope you'll hire me <br/>See you in the office boss :)</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div>
                        <FaCrop className="icon"/>
                        <h2>UI/UX Design</h2>
                        <p> I've never done this but I want to try <br/> Help me to have experience
                         <br/> I want to try IT field <br/> I hope you'll hire me <br/>See you in the office boss :)</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div>
                        <FaAppStoreIos className="icon"/>
                        <h2>App Design</h2>
                        <p> I've never done this but I want to try <br/> Help me to have experience
                         <br/> I want to try IT field <br/> I hope you'll hire me <br/>See you in the office boss :)</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
       </div>

       {/* Portfolio */}

       <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src="work1.png" />
                        <div className="layer">
                            <h3> Silhouette </h3>
                            <p>Click green flag to play music and click unicorn to broadcast. Click Naruto to introduce himself.</p>
                            <a href="https://scratch.mit.edu/projects/562813059/" target="_blank"><FaExternalLinkAlt/> </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="work2.png" />
                        <div className="layer">
                            <h3> Krazy Ninja</h3>
                            <p>Click Green Flag and Enjoy Playing :) :) :) Avoid all falling shurikens and Don't get close to edge Eat apple for extra score</p>
                            <a href="https://scratch.mit.edu/projects/569727302/" target="_blank"><FaExternalLinkAlt/> </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="work3.png" />
                        <div className="layer">
                            <h3> Knife Hunter</h3>
                            <p>click left button in mouse to launch the knife</p>
                            <a href="https://scratch.mit.edu/projects/421485915/" target="_blank"><FaExternalLinkAlt/> </a>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">See More</a>
            </div>
        </div> 

        {/* Contact */}

        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p id="email"><FaEnvelope className="icons" /> dexternielbasergo.202100227@gmail.com</p>
                        <p><FaPhone className="icons"/> 09464675139</p>
                    </div>
                    <div className="contact-right"></div>
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required/>
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                </div>
            </div>
        </div>

    </>
  )
}

export default Main