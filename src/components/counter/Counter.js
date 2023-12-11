import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
        setTimeout(function delay() {
            setCounter((counter) => counter+1)
        },  1000);
    }

    return (
        <div onClick={handleCounter}>
            Bạn click bao nhiêu lần {counter}
        </div>
    );
};

export default Counter;