import React, { useState } from 'react';
import "./CustomButton.css"

function CustomButton({ text, onClick }) {
    const [coords, setCoords] = useState({ x: -1, y: -1 });

    const addRippleEffect = (e) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        onClick && onClick(e);
    }

    return (
        <button
            className="custom-button"
            onClick={addRippleEffect}
            style={{
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <span>{text}</span>
            {coords.x !== -1 && (
                <span
                    className="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y
                    }}
                ></span>
            )}
        </button>
    );
}

export default CustomButton;

