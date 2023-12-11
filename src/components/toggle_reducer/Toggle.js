import React, { useState } from 'react';
import './style.css'

const Toggle = () => {
    const [state, setState] = useState(true)
 
    return (
        <div className={`toggle ${state ? "true": "false"}`}>
            <div 
                className={`toggle-input ${state ? "true": "false"}`}
                onClick={() => setState(!state)}
            >
                <div 
                    className={`toggle-control ${state ? "true": "false"}`}
                >
                </div>
            </div>
        </div>
    );
};

export default Toggle;