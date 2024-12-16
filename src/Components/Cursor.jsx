import React, { useEffect, useState } from 'react';

function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const cssStyle = {
      width: "40px",
      height: "40px",
      border: "1px solid black",
      borderRadius: "50%",
      position: 'absolute',
      zIndex: 999,
      top:0,
      left:0,
      transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
      transition: 'transform 0.1s ease', // Add a transition for smoothness
  };

    useEffect(() => {
        let animationFrameId;

        const handleMouseMove = (e) => {
            // Use requestAnimationFrame to update the mouse position
            animationFrameId = requestAnimationFrame(() => {
                setMousePosition({ x: e.pageX, y: e.pageY });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove the event listener and cancel animation frame
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div style={cssStyle} />
    );
}

export default Cursor;