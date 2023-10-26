import { useEffect } from 'react';
import './App.css';
import TitleType from './components/TitleType';
import MechButton from './components/MechButton';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Portrait, ChevronDown, Github, LinkedIn, HandWave } from './assets/images';
import StyledImage from './components/StyledImage';
import ProjectMenu from './components/ProjectMenu';


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className='App'>

        <div className='spacer'></div>

        <div id='home' className='header-title' data-aos='fade-up'>
          <Row>
            <Col md={7}>
              <Typewriter
                options={{
                    delay: 150,
                    loop: true
                }}
                onInit={(typewriter) => {
                    typewriter.typeString("hi, i'm salwa")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("say hello!")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
              <div className='header-textArea'>
                <p>
                  Here's a little bit about me.
                </p>
                <div style={{ height: '200px'}}>
                  <a href='#about-me' style={{display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>
                    <img id='chevron' src={ChevronDown} alt='Scroll down' className='chevron-down' />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <img id='hand' src={HandWave} alt='Hey there!' className='hand-wave'/>
            </Col>
          </Row>
        </div>

        <div className='spacer'></div>

        <div id='about-me' className='sections' data-aos='fade-up'>
          <Row>
            <Col md={4}>
              <StyledImage src={Portrait} alt={'A nice picture of me!'} height={'100%'}></StyledImage>
            </Col>
            <Col sm={1}></Col>
            <Col md={7}>
              <TitleType title={"about me"}/>
              <p className='textArea'>
                My name is Salwa Jeries, I'm a junior at The University of Alabama in Huntsville majoring in computer science with a math minor.
                I'm interested in software engineering and particularly web and app development for a career so that I can make fun projects - like this site -
                for others to enjoy as well! In my free time, you'll find me playing piano, cuddling with my two dachshunds, and checking out all the
                new local coffee shops!
              </p>
            </Col>
          </Row>
        </div>

        <div id='projects' className='sections' data-aos='fade-up'>
          <TitleType title={"projects"}/>
          <p className='textArea'><br/>Select a project to view more details. Scroll left to view more projects.</p>
          <ProjectMenu></ProjectMenu>
        </div>

        <div id='links' className='sections' data-aos='fade-up'>
          <TitleType title={"links"}/>
          <div style={{display: 'flex'}}>
            <MechButton src={Github} url={"https://github.com/salsajeries"} alt={"github.com/salsajeries"} width={'90px'} height={'90px'} />
            <MechButton src={LinkedIn} url={"https://www.linkedin.com/in/salwa-jeries-17a146226/"} alt={"Salwa Jeries on Linkedin"} width={'90px'} height={'90px'} />
          </div>
        </div>

      </div>
      
      <footer>
        <p className='textArea'>Made with React.js</p>
        <p className='textArea'>Copyright © 2023 Salwa Jeries</p>
      </footer>
    </div>
    
  );
}

export default App;