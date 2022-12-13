import React from "react";
import "../styles/main.css";
import logoIcon from "../assets/logo-icon.png";
import btnLogo from '../assets/btn-logo.png'
import card from '../assets/card.png'
import Typewriter from 'typewriter-effect';
import explore from '../assets/explore.png'
import Accordion from 'react-bootstrap/Accordion';

const Main = () => {
  return (
    <>
      <div className="banner">
      
        <div className="top">
          <div className="text">
            <h2>THE DIGITAL FAMILY OFFICE</h2>
            <h3>Your Single Source of Truth</h3>
            {/* <p>
              Login. Take control. Eliminate risk. Realize opportunities. Find
              clarity.
            </p> */}
            <Typewriter
                // options={{
                //     strings: ['Login. Take control. Eliminate risk. Realize opportunities. Find clarity.'],
                //     autoStart: true,
                //     loop: false,
                //     delay: 20
                // }}

                onInit={(typewriter) => {
                    typewriter.typeString(' Login. Take control. Eliminate risk. Realize opportunities. Find clarity.')
                      .callFunction(() => {
                        console.log('String typed out!');
                      })
                      .changeDelay(10)
                    //   .deleteAll()
                    //   .callFunction(() => {
                    //     console.log('All strings were deleted');
                    //   })
                      .start();
                  }}
                />
          </div>

          <div className="logoIcon">
            <img src={logoIcon} alt="" />
          </div>
        </div>


        
        <div className="bottom">
            <div className="bottom-container">

          <div className="schedule-btn">
            <button>Schedule a Consultation</button>
          </div>

          <div className="disclaimer">
            <p>
              {" "}
              <span>Disclaimer:</span> iPaladin is not a CRM, Financial
              Reporting System, or another tech <br/> stack with unending integrations
              masquerading for efficiency.{" "}
            </p>
          </div>
            </div>
        </div>
      </div>

    {/* second section */}
    <section id="digital-family">
        <div className="digital-section-logo" >
            <div  className="content">

                <h2>iPaladin’s DFO is a comprehensive family office operating system. </h2>
                <h3 >Advanced Technology for professionals. (That’s why it works better than anything else.)</h3>

                <div className="inner-content">
                    <div className="text-container">

                    <div className="paragraph">
                        <p>Access understandable information from a single secure virtual environment. Transform workflow and empower your team with clarity. Govern operations with full transparency.</p>
                    </div>
                    <button> Clients' Success Stories <img src={btnLogo} alt="button-logo   " /></button>
                    </div>

                    <div className="card-container">
                        <img src={card} alt="card" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    {/* explore-section */}
    {/* <section id="explore">
        <div className="img-text">
                <div className="img-container">
                    <img src={explore} alt="explore-image" />
                </div>
                <div className="btn-container">
                    <button>Explore Our Solution</button>
                </div>
        </div>

        <div className="accordian">
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Client-centric family wealth workspaces</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Indexed documents for intuitive search</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Precision workflow for multi-provider services</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Proof of Work, an elegant solution for complexity</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    </section> */}

    </>



  );
};

export default Main;
