import { useEffect } from 'react';
import './App.css';
import TitleType from './components/TitleType';
import CardScroll from './components/CardScroll';
import MechButton from './components/MechButton';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wave from './assets/hand-wave.png'
import Portrait from './assets/myself.jpeg';
import GithubIcon from './assets/github.svg';
import LinkedinIcon from './assets/linkedin.svg';

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
              <p className='header-textArea'>
                Here's a little bit about me.
              </p>
            </Col>
            <Col md={4}>
              <img id='hand' src={Wave} alt='Hey there!' className='hand-wave'/>
            </Col>
          </Row>
        </div>

        <div className='spacer'></div>

        <div id='about-me' className='sections' data-aos='fade-up'>
          <Row>
            <Col sm={4}>
              <img src={Portrait} alt='A nice picture of me!' className='styled-img' />
            </Col>
            <Col sm={1}></Col>
            <Col sm={7}>
              <TitleType title={"about me"}/>
              <p className='textArea'>
                My name is Salwa Jeries, I'm a sophomore at The University of Alabama in Huntsville majoring in computer science with a math minor. I have a background in cyber security and love to make cool websites. I want to explore software engineering and web development for a career so that I can make fun projects - like this site - for others to enjoy as well! In my free time, I like to play piano, cuddle with my hot dog (Lily), and checkout all the new local coffee shops!
              </p>
            </Col>
          </Row>
        </div>

        <div id='projects' className='sections' data-aos='fade-up'>
          <TitleType title={"projects"}/>
          <p className='textArea'><br/>Click to open project link.</p>
          <CardScroll/>
        </div>

        <div id='links' className='sections' data-aos='fade-up'>
          <TitleType title={"links"}/>
          <MechButton src={GithubIcon} url={"https://github.com/salsajeries"} alt={"github.com/salsajeries"} />
          <MechButton src={LinkedinIcon} url={"https://www.linkedin.com/in/salwa-jeries-17a146226/"} alt={"Salwa Jeries on Linkedin"} />
        </div>

      </div>
      
      <footer>
        <p className='textArea'>Salwa Jeries</p>
        <p className='textArea'>Made with Reactjs</p>
      </footer>
    </div>
    
  );
}

export default App;
