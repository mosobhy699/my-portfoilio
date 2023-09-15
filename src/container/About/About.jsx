import React, { useState, useEffect } from 'react';
import { images } from "../../constants"
import { client } from '../../client';
import { wrapper, Motion } from '../../higherOrderComponent';
import './About.scss';
import { AiOutlineDownload } from "react-icons/ai"
const About = () => {


  return (
    <>
      <h2 className="head-text">ABOUT ME <span>if you wondering</span> <br />WHO  <span>I AM </span></h2>
      <p className='app__profiles' >Hi, My name is <span style={{color:"var(--secondary-color)"}}> Mohamed Sobhy</span> 28 years old. <br /> I am really passionate about technology and Computer learning Specially <span style={{color:"var(--secondary-color)"}}>Web Development</span>
      </p>
      <div className="app__profile-item" >
        <div className="alldiv">
          <h6>PERSONAL INFO</h6>
          <div className='item'>
            <div className='details'>
              <h5>First Name: </h5>
              <p> Mohamed</p>
            </div>
            <div className='details'>
              <h5>Last Name: </h5>
              <p> ElRabaie</p>
            </div>
            <div className='details'>
              <h5>Age: </h5><p> 28 </p>
            </div>
            <div className='details'>
              <h5>Freelance: </h5><p> Available</p></div>
            <div className='details'>
              <h5>Phone: </h5><p> 0201550327073</p>
            </div>
            <div className='details'>
              <h5>Nationality: </h5>

              <p> Egyptian</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div className='details'>
                <h5>Email: </h5>
                <p> mohamedsobhy7899@gmail.com</p>
              </div>
              <a href="https://drive.google.com/drive/u/0/folders/1pWO636f3lqFo1ZXPy5k_uF9ByG6_Lngr"><button>DownLoad CV <AiOutlineDownload /></button></a>
            </div>
          </div>
        </div>
        <div className='profile'>
          <img src={images.profile} /></div>
      </div>
     
    </>
  );
};

export default wrapper(
  Motion(About, 'app__about'), 'about', "app__whitebg");
