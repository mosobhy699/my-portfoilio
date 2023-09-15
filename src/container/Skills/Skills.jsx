import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from "react-tooltip"
import { images } from "../../constants"

import { wrapper, Motion } from '../../higherOrderComponent';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

    return (
        <>
            <h2 className="head-text " style={{color:"var(--secondary-color)"}}>Skills </h2>
            <div className='lan' style={{ marginTop: "50px", backgroundColor: "white" }}>
                <div className='icons'>
                    <div className='images'>
                        <img src={images.html} alt="" />
                        <p>HTML</p>
                    </div>
                    <div className='images'>
                        <img src={images.css} alt="" />
                        <p>CSS</p>
                    </div>
                    <div className='images'>
                        <img src={images.javascript} alt="" />
                        <p>JAVA SCRIPT</p>
                    </div  >
                    <div className='images'>
                        <img src={images.tailwind} alt="" />
                        <p>TAILWINDCSS</p></div>
                    <div className='images'>
                        <img src={images.sass} alt="" />
                        <p>SASS</p></div>
                    <div className='images'>
                        <img src={images.bootstrap} alt="" />
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className='images'>
                        <img src={images.github} alt="" />
                        <p>GITHUB</p>
                    </div>
                    <div className='images'>
                        <img src={images.react} alt="" />
                        <p>REACT</p>
                    </div>
                    <div className='images'>
                        <img src={images.redux} alt="" />
                        <p>REDUX</p>
                    </div>
                    <div className='images'>
                        <img src={images.next} alt="" />
                        <p>NEXT JS</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default wrapper(Motion(Skills, "app__skills"), 'skills', "app__whitebg")