import React, { useState } from 'react';

export default function Scroll(props) {

    const [state, setState] = useState(50);

    const value = (e) => {
        setState(e.target.value);
    }


    return (
        <>
            <div className='scroll-bar'>
                <p className="scroll-heading">{props.heading}</p>
                <div className='scroll-line d-flex'>
                    <div className="scroll-block">
                        <input type="range" min="0" max="100" className="slider" onChange={value} />
                    </div>
                    <div className="scroll-value">
                        <p>{state}%</p>
                    </div>
                </div>
            </div>
        </>
    )
}