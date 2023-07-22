import React from 'react';
import ProfilePic from '../assets/images/pjd-werk.jpg';

function About() {
  return (
    <div>
      <h1 className='bodyheaders'>About Me</h1>
      <section className='bodytext'>
        <div className="row">
          <div className="col-md-6 order-md-2 text-center">
            <img src={ProfilePic} alt="Philip Davidian at work" style={{ width: '500px', height: 'auto' }} />
          </div>
          <div className="col-md-6 order-md-1">
            <div style={{ marginLeft: '80px', marginRight: 'auto' }}>
              <p>
                My name is Philip "PJ" Davidian, and I am a full-stack web developer with a fresh certification from the Coding Bootcamp at UNC Chapel Hill.
                <br></br> 
                <br></br> 
                
                Prior to enrolling in that program, I worked 8 years in enterprise software implementations and back-end tinkering, 
                and then another 3 years as Operations Manager for a busy General Contractor here in beautiful Asheville, NC.<br></br>
                <br></br> 
                I am also a drummer, carpenter, snowboarder, poker player, and generally a lover of life!
                <br></br>
              </p>
              <p>
                <br></br>
                Please have a look at my development portfolio and get in touch if you would like to enlist my services or otherwise network. 
                I look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;