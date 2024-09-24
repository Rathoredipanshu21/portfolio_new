import React from 'react';
import './Tool.css';
import { FaWindows, FaAndroid, FaServer } from 'react-icons/fa';
import { SiVisualstudiocode, SiPostman } from 'react-icons/si';

const Tools = () => {
    return (
        <div className="tools-section">
            <h2 style={{color:'#fff'}}>Tools I Use</h2>
            <div className="tools-grid">
                <div className="tool-item">
                    <FaWindows />
                    {/* <p>Windows</p> */}
                </div>
                <div className="tool-item">
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
