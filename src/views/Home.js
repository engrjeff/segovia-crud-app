import React from "react";
import mypic from "../images/me.jpg";

function Home(props) {
  return (
    <div className='profile-container d-flex'>
      <img src={mypic} alt='Jeff Segovia' />
      <div className='profile-container-details'>
        <p>Hi everyone, I am</p>
        <h1>Jeff Segovia</h1>
        <p>Electronics Engineer / Web Developer</p>
        <div className='profile-container-email my-4'>
          <p className='mb-0'>You can contact me at:</p>
          <p className='text-info fw-bold'>engineerjeff15@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
