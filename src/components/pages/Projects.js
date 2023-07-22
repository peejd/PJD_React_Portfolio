import React from 'react';
import SideHustle from '../assets/images/SH_logo.png';
import InkedIn from '../assets/images/INKEDIN_PORT.png';

function Projects() {
  return (
    <div className="bodyheaders">
      <section id="Projects">
        <h1>Portfolio</h1>

        <div className="card-container row row-cols-1 row-cols-sm-2 g-3">
          <div className="col row-cols-1 row-cols-sm-2 g-3">
            <a href="https://side-hustle.herokuapp.com/" alt="Side Hustle" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src={SideHustle} className="card-img-top" alt="Side Hustle" />
                <div className="card-body">
                  <h5 className="card-title">Side Hustle</h5>
                  <p className="card-text">In this Project, I built out the Sequelize data models, built the routes, 
                  and tested all the back-end functionality.</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col">
            <a href="https://inkedin-ef5cc989f602.herokuapp.com/" alt="InkedIn" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src={InkedIn} className="card-img-top" alt="Inked In" />
                <div className="card-body">
                  <h5 className="card-title">InkedIn</h5>
                  <p className="card-text">This social network app for tattoo artists and enthusiasts was built on the MERN stack 
                  as a culminating group project for the Coding Bootcamp and UNC Chapel Hill.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;