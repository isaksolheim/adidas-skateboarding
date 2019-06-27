import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './Navbar';
import { Fade } from 'react-reveal';
//import ScrollAnimation from 'react-animate-on-scroll';


const Landing = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            <div className="section">
              <div className="landing-container">
                <Navbar />
                <div className="landing-text">
                  <div className="side-text">Meet the team</div>
                  <div className="title">Adidas Skateboarding</div>
                </div>
            </div>
          </div>
          <div className="section">
            <div className="skater1">
              <div className="content">
                <div className="skater">
                  <Fade left>
                    <img src={'./images/gustav.png'} alt="gustav"/>
                  </Fade>
                  <Fade>
                    <span className="dot" />
                  </Fade>
                </div>
                <Fade right>
                  <div className="text-box">
                    <div className="number">01</div>
                    <div className="name">Gustav Tønnesen</div>
                    <div className="text">
                      Coming through the ranks of the highly successful Swedish skate brand Sweet, this humble,
                      quiet Norwegian has let his skateboarding do all the talking. Like many European skaters,
                      Gustav migrated to the skate mecca of Barcelona. Now riding for Sour and making his full debut in Away Days,
                      we can’t wait for the next installment.
                      <br />
                      <b>Read Full Bio</b>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="skater1">
              <div className="content">
                <Fade left>
                  <div className="text-box">
                    <div className="number">02</div>
                    <div className="name">Tyshaw Jones</div>
                    <div className="text">
                      Tyshawn Jones isn’t even old enough to vote and he’s already laid the groundwork for a lasting legacy.
                      With standout footage in Supreme’s Cherry and subsequent web edits, things are looking good for TJ.
                      <br />
                      <b>Read Full Bio</b>
                    </div>
                  </div>
                </Fade>
                <div className="skater">
                  <Fade right>
                    <img src={'./images/tyshaw.png'} alt="gustav"/>
                  </Fade>
                  <Fade>
                    <span className="dot" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Landing;