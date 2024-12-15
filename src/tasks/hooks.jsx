import React, { useState } from 'react';

export default function CounterFc() {
    const [counter, setCounter] = useState(0);

    const countHandler = (action) => {
        switch (action) {
            case 'increment':
                setCounter(counter + 1);
                break;
            case 'decrement':
                setCounter(counter - 1);
                break;
            default:
                setCounter(0);
        }
    };

    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={() => countHandler('increment')}>Increment</button>
            <br />
            <button onClick={() => countHandler('decrement')}>Decrement</button>
        </div>
    );
}

