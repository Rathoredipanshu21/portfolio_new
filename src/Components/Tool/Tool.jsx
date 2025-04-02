import React from 'react';
import './Tool.css';
import { FaWindows, FaAndroid, FaServer } from 'react-icons/fa';
import { SiVisualstudiocode, SiPostman } from 'react-icons/si';

const Tools = () => {
    return (
        <div className="tools-section" data-aos="zoom-in-right">
            <h2 style={{color:'#fff'}}>Tools I Use</h2>
            <div className="tools-grid" data-aos="zoom-out-up">
                <div className="tool-item" data-aos="zoom-out-right">
                    <FaWindows />
                    {/* <p>Windows</p> */}
                </div>
                <div className="tool-item" data-aos="flip-left">
                    <SiVisualstudiocode />
                    {/* <p>VS Code</p> */}
                </div>
                <div className="tool-item">
                    <FaServer />
                    {/* <p>XAMPP Server</p> */}
                </div>
                <div className="tool-item">
                    <FaAndroid />
                    {/* <p>Android Studio</p> */}
                </div>
                <div className="tool-item">
                    <SiPostman />
                    {/* <p>Postman</p> */}
                </div>
            </div>
        </div>
    );
};

export default Tools;
