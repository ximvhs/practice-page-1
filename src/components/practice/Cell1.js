import React from 'react';

const Cell1 = ({className, onClick, value}) => {
    return (
        <div className={`game-cell ${className}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell1;