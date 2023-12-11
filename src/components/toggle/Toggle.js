import { useState } from "react";
import React from 'react';
import './Toggle.css'


function Toggle() {

    const [on, setOn] =useState(false);

    const handleToggle = () => {
        setOn(!on);
    }

    return (
        <div className="box">
            <div className={`toggle ${on ? "active" :""}`} onClick={handleToggle}>
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
                <div className="test">{on ? "true" : "false"}</div>
        </div>
    );
};

export default Toggle;