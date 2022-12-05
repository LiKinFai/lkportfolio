import '.././stylesheets/Home.css'
import { Link, Route, Routes } from "react-router-dom";
import { LKTFTHelper } from "./LKTFTHelper"
import { Sam1Lam4Zuk3EJan1 } from "./Sam1Lam4Zuk3EJan1"

export function Home() {
  return <div className='home'>
    <div className='intro'>
        <article>
                Hi, I'm Li Kin Fai, Kenny. I am currently on the road to becoming a self-taught programmer,
                 looking for a career as a <span>Junior Front-End Developer</span>.<br></br>
            <br></br>
            Aspired to be a full-time programmer, I always try my best to improve my skills.
            I am always passionate and eager to learn, and am more than willing to learn from others.
        </article>
        <br></br>
        <span>I primarily use: </span><span className='learnt'>HTML, CSS, Javascript, React</span>
    </div>
    <div className='myprojects'>My Projects:</div> 
    <div className='projects-container'>
      <div className='project'>
        <div className='project-title'>LK's TFT Helper</div>
        <div className='photo-container'>
        <img className='project-photo' alt="LK's TFT Helper" src={require(`../images/lktfthelper2.png`)}></img>
          <div className='overlay'>
            <li className="project-detail"><Link to="/LKTFTHelper">Detail</Link></li>
            <Routes>
              <Route path="/LKTFTHelper" element={<LKTFTHelper />}/>
            </Routes>
          </div>
        </div>
        <article className='project-description'>A personal project that consists of a proxy server and a website that provides a real-time interactive
        rolling cost calculator and player search function utilizing Riot's API for TFT players.</article>
        <br></br>
        <span className='related'>Related Tech: </span><span className='techs'>HTML, CSS, Javascript, React, Express</span>
      </div>
      <div className='project'>
        <div className='project-title'>Sam1Lam4Zuk3EJan1</div>
        <div className='photo-container'>
        <img className='project-photo' alt="Sam1Lam4Zuk3EJan1" src={require(`../images/sam1lam4zuk3ejan1.png`)}></img>
          <div className='overlay'>
              <li className="project-detail"><Link to="/Sam1Lam4Zuk3EJan1">Detail</Link></li>
              <Routes>
                <Route path="/Sam1Lam4Zuk3EJan1" element={<Sam1Lam4Zuk3EJan1 />}/>
              </Routes>
          </div>
        </div>
        <article className='project-description'>My first ever Javascript related-project, a school group project which 
        consists of two parts: A browser multiplayer Hide And Seek game and a login/register page. 
        I coded the game while other three groupmates coded the login/register page.</article>
        <br></br>
        <span className='related'>Related Tech: </span><span className='techs'>HTML, p5js, Javascript, SocketIO, Express</span>
      </div>
    </div>
    <div className='contact' id='contact'>
      <div className='contact-body'>
        <header className='contact-header'>Contact Me</header>
        <div className='contact-buttons'>
          <a href='https://github.com/LiKinFai' target={'_blank'} rel="noreferrer" ><img className='contact-images' alt="GitHub" src={require(`../images/github.png`)}/></a>
          <a href='https://www.linkedin.com/in/%E5%81%A5%E8%BC%9D-%E6%9D%8E-195845259/' target={'_blank'} rel="noreferrer" ><img className='contact-images' alt="LinkedIn" src={require(`../images/linkedin.png`)}/></a>
          <a href="mailto: likinfaiemail@gmail.com" target={'_blank'} rel="noreferrer" ><img className='contact-images' alt="Email" src={require(`../images/email.png`)}/></a>
        </div>
      </div>
    </div>
  </div>
}