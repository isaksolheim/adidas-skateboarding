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
                <div className="side-text">Meet the team</div>
                <div className="title">Adidas Skateboarding</div>
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
                      Gustav Tønnesen is a norwegian skateboarder.
                      He does alot of techinical tricks.
                      Gustav Tønnesen is a norwegian skateboarder.
                      He does alot of techinical tricks.
                      Gustav Tønnesen is a norwegian skateboarder.
                      He does alot of techinical tricks.
                      Gustav Tønnesen is a norwegian skateboarder.
                      He does alot of techinical tricks.
                      <b>Read Full Bio</b>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="section">
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Landing;